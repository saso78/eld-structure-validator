# 🚛  ELD Output File Validation

This project validates FMCSA-compliant ELD output files (flat text format) using Playwright with TypeScript. It checks for the presence of required structural segments as defined in the [FMCSA ELD Final Rule](https://www.fmcsa.dot.gov/hours-service/elds/electronic-logging-devices).

---

## 🔍 What It Does

- Validates structural integrity of `.eld.txt` files
- Reports missing or present sections
- Generates console and file-based debug reports
- Uses Playwright's test runner with a clear test spec

---

## 📁 Project Structure
```
crusader-eld-validation
├─ /test
│ └─ eld-validation.spec.ts # Playwright test file
├─ /utils
│ └─ validateEldFile.ts # Validation helper logic
├─ /test-files
│ └─ sample.eld.txt # Sample ELD output files (ignored via .gitignore)
├─ /reports
│ └─ eld-validation-report.txt # Auto-generated detailed test reports
├─ README.md
└─ .gitignore

```
---

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
    ```
    Run the test:
```
npx playwright test
```
Check the console or read the generated file:

    /reports/eld-validation-report.txt

🧪 Sample Validation Output
```
✅ ELD File Header Segment:
✅ User List:
❌ CMV List:
✅ ELD Event Annotations or Comments:
```


📦 Tech Stack

    Playwright

    TypeScript

    Node.js
