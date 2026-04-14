# Dev Test — Candidate Challenges

> **Access note:** This branch (`candidate`) is the only branch accessible to candidates.  
> The `main` branch (platform code) is private and not accessible.

## How to access each challenge

Each module has its own folder. Clone or fork this branch, work on the module assigned, and submit your repo URL through the evaluation form.

| Module | Folder | Weight |
|--------|--------|--------|
| Frontend Debug | `01-frontend-debug/` | 15% |
| Backend Debug | `02-backend-debug/` | 20% |
| Automation | `03-automation/` | 25% |
| Python Script | `04-python/` | 10% |
| Mini App | `05-mini-app/` | 10% |
| Conceptual Q&A | Answered in the form | 10% |

## Branch & Git workflow (required)

```bash
# 1. Fork this repo to your GitHub account
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/dev-test-challenges.git

# 3. For each module, create a dev branch
git checkout -b dev

# 4. Make changes, commit clearly
git commit -m "fix: add await to fetch calls in api.js"

# 5. Push and open a Pull Request from dev → main in YOUR fork
git push origin dev
```

## Submission

Submit your work through the evaluation platform you were given access to.  
For each module, provide:
- Your **forked repo URL** (must match your registered GitHub username)
- Your **written explanation** in the form

## Important

- Commits are reviewed — make them meaningful
- AI tools are allowed, but you must explain your code
- Missing explanations = 0 on that component