# Challenge 02 — Backend Debug

**Module weight:** 20% of total score  
**Estimated time:** 60–90 min

## Context

A small Express API has been deployed. QA reports that `GET /data` always returns `undefined`, and `POST /save` is causing a gradual memory increase in production. There are also inconsistent HTTP status codes.

## Your Task

1. Clone this repository
2. Create a branch named `dev`
3. Find and fix **all** bugs
4. Add basic input validation to `POST /save`
5. Create a Pull Request from `dev` → `main`
6. Document every bug in your PR description

## What to Submit

- Your **forked repo URL**
- Optional: Postman collection or screenshot showing the fixed endpoints working
- Written explanation of each bug and the fix

## Evaluation Criteria

| Criterion | Weight |
|-----------|--------|
| Missing `await` identified and fixed | 20% |
| Correct HTTP status codes | 15% |
| Input validation added to POST /save | 25% |
| Memory leak identified and addressed | 25% |
| Error handling middleware added | 15% |

> A **good** fix addresses the root cause. A **bad** fix only adds `await` without understanding why it was missing.
