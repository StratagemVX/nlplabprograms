import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const rootDir = process.cwd();
const htmlPath = path.join(rootDir, "index.html");
assert.ok(fs.existsSync(htmlPath), "index.html must exist");

const html = fs.readFileSync(htmlPath, "utf8");
assert.match(html, /<!DOCTYPE html>/i, "index.html must declare HTML5 doctype");
assert.match(html, /<html\b/i);
assert.match(html, /<\/html>/i);

const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1].trim()).filter(Boolean);
assert.ok(scripts.length >= 1, "Expected at least one inline script block");

for (const [idx, code] of scripts.entries()) {
  const tmpFile = path.join(os.tmpdir(), `nlplabprograms-check-${process.pid}-${idx}.js`);
  try {
    fs.writeFileSync(tmpFile, code, "utf8");
    execFileSync(process.execPath, ["--check", tmpFile], { stdio: "inherit" });
  } finally {
    fs.rmSync(tmpFile, { force: true });
  }
}

const codeIds = [...html.matchAll(/elementId:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
assert.ok(codeIds.length >= 1, "Expected program definitions referencing code-prog-* element IDs");
for (const id of codeIds) {
  assert.ok(html.includes(`id="${id}"`) || html.includes(`id='${id}'`), `Missing code block id: ${id}`);
}

console.log(`Verified HTML structure, ${scripts.length} script block(s), and ${codeIds.length} code block references.`);
