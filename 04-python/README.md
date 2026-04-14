# Challenge 04 — Python Script

**Module weight:** 10% of total score  
**Estimated time:** 30–45 min

## Context

A script that processes a list of users and groups valid emails by domain is producing wrong output. Your job is to find the bugs and fix them.

## Your Task

1. Clone this repository
2. Create a branch named `dev`
3. Fix the script so the output matches the expected result
4. Create a Pull Request from `dev` → `main`

## Expected Output

```python
{"gmail.com": 2, "yahoo.com": 1}
```

The script must:
- Validate emails properly (not just check for `@`)
- Remove duplicates before counting
- Group by domain (the part after `@`)
- Count occurrences per domain

## What to Submit

- Your **forked repo URL**
- Written explanation of each bug you found and how you fixed it

## Evaluation Criteria

| Criterion | Weight |
|-----------|--------|
| Correct output produced | 30% |
| Proper email validation (regex or equivalent) | 25% |
| Deduplication logic correct | 25% |
| Explanation shows understanding of the bugs | 20% |
