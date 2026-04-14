# script.py
# BUG #1: naive email validation — only checks for "@", accepts "a@b"
# BUG #2: no deduplication — duplicates counted multiple times
# BUG #3: grouping logic is wrong — groups by full email, not by domain
# BUG #4: count is always 1 — doesn't accumulate

users = [
    {"name": "Alice", "email": "alice@gmail.com"},
    {"name": "Bob",   "email": "bob@yahoo.com"},
    {"name": "Carol", "email": "alice@gmail.com"},   # duplicate
    {"name": "Dave",  "email": "dave@gmail.com"},
    {"name": "Eve",   "email": "not-an-email"},      # invalid
    {"name": "Frank", "email": "frank@"},            # invalid — BUG #1 would accept this
]

def validate_email(email):
    # BUG #1: only checks for "@" — accepts "a@", "@b", "@@"
    return "@" in email

def group_by_domain(users):
    result = {}
    for user in users:
        email = user["email"]
        if validate_email(email):
            # BUG #3: uses full email as key instead of domain
            # BUG #2: no deduplication — alice@gmail.com counted twice
            domain = email          # BUG #3: should be email.split("@")[1]
            # BUG #4: always sets to 1 instead of incrementing
            result[domain] = 1      # BUG #4: should be result.get(domain, 0) + 1
    return result

output = group_by_domain(users)
print(output)

# Expected output (after fixes):
# {"gmail.com": 2, "yahoo.com": 1}
#
# Current (buggy) output:
# {"alice@gmail.com": 1, "bob@yahoo.com": 1, "alice@gmail.com": 1, "dave@gmail.com": 1, "frank@": 1}