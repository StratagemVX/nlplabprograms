# Natural Language Processing Lab Programs (`nlplabprograms`) — MVJ22CS72 Reference

> Single-file static HTML/CSS/JS web reference containing syntax-highlighted NLTK and Python NLP laboratory implementations for MVJ College of Engineering (`MVJ22CS72`) with search filtering and one-click code copy buttons.

[![HTML5](https://img.shields.io/badge/HTML5-Static%20Web-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Python](https://img.shields.io/badge/Python-NLTK-yellow.svg)](https://www.nltk.org/)

---

## Executive Overview

**`nlplabprograms`** is a self-contained browser reference (`index.html`) presenting Python/NLTK implementations across 5 structured NLP units for the **MVJ22CS72** laboratory curriculum. Users can filter topics, jump across menu sections, and copy program source snippets directly.

> **Quality & CI Status (`main` vs. Open Draft PR #2 — `maintenance/repository-quality-improvements`):**
> - **PR #2** adds `.gitignore`, static site verification (`tests/verify_site.mjs`), and `.github/workflows/quality.yml` (verified passing in GitHub Actions).

---

## Implemented Program Index (`index.html`)

1. **Text Preprocessing Fundamentals**
   - Tokenization — Word and Sentence Tokenization
   - Stopword Elimination
   - Stemming
2. **Part of Speech Tagging & Lemmatization**
   - Part of Speech Tagging — Version 1 (Standard) & Version 2 (Simplified)
   - Lemmatization
3. **Chunking & Named Entity Recognition**
   - Chunking — Version 1 (Dynamic Tagger) & Version 2 (Pre-Tagged Tuples)
   - Named Entity Recognition
4. **Information Retrieval & Parsing**
   - TF-IDF
   - CYK Parsing
5. **N-Gram Modeling & Language Probability**
   - Unigram, Bigram, and Trigram
   - Bigram Probability

---

## Usage & Verification

```bash
git clone https://github.com/StratagemVX/nlplabprograms.git
cd nlplabprograms

# Open index.html in a browser or serve locally:
python -m http.server 8000

# Run static HTML/JS/asset verification (PR #2)
node tests/verify_site.mjs
```

---

## Contributor Attribution

- **Curator:** Chethan Kumar B S (`StratagemVX`)
- **Earlier Styling Variant:** [StratagemVX/importnltklabprograms](https://github.com/StratagemVX/importnltklabprograms) (private)
- **GitHub:** [https://github.com/StratagemVX](https://github.com/StratagemVX)
- **Portfolio:** [https://chethan-kumar-portfolio.vercel.app/](https://chethan-kumar-portfolio.vercel.app/)
