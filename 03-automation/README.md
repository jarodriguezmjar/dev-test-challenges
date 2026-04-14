# Challenge 03 — Automation Workflow

**Module weight:** 25% of total score  
**Estimated time:** 90–120 min

## Scenario

Your team receives user registrations via webhook. The current process is manual and error-prone. You need to build an automation workflow that handles this reliably.

## Webhook Payload (input)

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "source": "landing_page"
}
```

## Requirements

Your workflow must:

1. **Validate email format** — reject if invalid (not just check for `@`)
2. **Reject duplicates** — check if email already exists before saving
3. **Save valid data** — store to Supabase, Google Sheets, or Airtable
4. **Retry on failure** — at least 1 automatic retry if the save step fails
5. **Log errors** — save failed attempts with reason to a log
6. **Return structured response**:
   ```json
   { "status": "saved" | "duplicate" | "invalid" | "error", "message": "..." }
   ```

## Tools Allowed

- n8n ✅
- Zapier ✅
- Make (Integromat) ✅

## What to Submit

- **Workflow link** (shareable) or **exported JSON** of the workflow
- Written explanation of your logic: how each step works, what edge cases you handled

## Evaluation Criteria

| Criterion | Weight |
|-----------|--------|
| Email validation (not naive) | 20% |
| Duplicate detection working | 20% |
| Retry logic implemented | 20% |
| Error logging present | 20% |
| Explanation demonstrates understanding | 20% |

**FAIL conditions:**
- No validation at all
- No duplicate control
- No retry logic
- Workflow works but candidate cannot explain it