# NLP Lab Programs – MVJ22CS72
### MVJ College of Engineering

A standalone, completely offline web application for viewing, searching, and copying Natural Language Processing lab programs during laboratory sessions and examinations.

---

## 🚀 How to Open
1. Open the file **`index.html`** in any web browser (Chrome, Edge, Firefox, Brave, Safari, etc.) by double-clicking it.
2. No internet connection, server (`node`/`python -m http.server`), or external downloads required!

---

## 📋 Included Programs

### **Program 1: Text Preprocessing Fundamentals**
- **1A. Tokenization** – Word & Sentence Tokenization (Regex & `wordpunct_tokenize`)
- **1B. Stopword Elimination** – Predefined offline stopword filtering & reduction counts
- **1C. Stemming** – Suffix removal with `PorterStemmer`

### **Program 2: POS Tagging & Lemmatization**
- **2A. Part of Speech Tagging – Version 1 (Standard)** – Multi-category rule patterns using `RegexpTagger`
- **2A. Part of Speech Tagging – Version 2 (Simplified)** – Focused tagger patterns with tuple unpacking
- **2B. Lemmatization** – Dictionary/rule-based morphological lemma extraction

### **Program 3: Chunking & Named Entity Recognition**
- **3A. Chunking – Version 1 (With Dynamic Tagger)** – Full shallow parsing (`NP`, `PP`, `VP`) combining `RegexpTagger` and `RegexpParser`
- **3A. Chunking – Version 2 (Pre-tagged Tuples)** – Self-contained parser using direct (word, tag) input tuples
- **3B. Named Entity Recognition** – Entity classification (`PERSON`, `ORGANIZATION`, `GPE`, `O`)

### **Program 4: Information Retrieval & Parsing**
- **4A. TF-IDF** – Term Frequency – Inverse Document Frequency calculation
- **4B. CYK Parsing** – Cocke-Younger-Kasami chart parser for CNF Grammars

### **Program 5: N-Gram Modeling & Language Probability**
- **5A. Unigrams, Bigrams & Trigrams** – N-Gram token sequences using `nltk.util.ngrams`
- **5B. Bigram Probability** – Statistical bigram language modeling & sentence likelihood

---

## ✨ Features
- **Offline & Self-Contained**: 100% offline; zero dependencies on `nltk.download()`.
- **Instant Clipboard Copying**: "Copy Code" button on every card with temporary "Copied!" confirmation.
- **Copy All Programs**: Top header button to copy all lab programs in one click with clear separators.
- **Search & Filter**: Real-time filtering by program number (e.g. `1A`, `2A`, `3A`, `4B`), title, or keywords.
- **Collapsible Cards**: Click any card header or use "Expand All" / "Collapse All" to keep the page clean and compact.
- **Responsive Layout**: Sticky sidebar for desktops and responsive drawer for mobile devices.
