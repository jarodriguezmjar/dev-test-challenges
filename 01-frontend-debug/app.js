// app.js
// BUG #3: assignment (=) instead of comparison (===) in validation
// BUG #4: inverted validation logic — blocks valid IDs, allows invalid ones
// BUG #5: innerHTML with unsanitized input — XSS vulnerability
// BUG #6: caching the Promise instead of the resolved value — race condition
// BUG #7: no try/catch — unhandled rejection crashes silently

let cachedUser = null;

async function loadUser() {
  const userId = document.getElementById('userId').value;

  // BUG #3 + #4: should be (userId === '') but uses assignment + wrong logic
  if (userId = '') {           // BUG #3: assigns empty string, always falsy
    showResult('Please enter a valid ID');
    return;
  }

  if (userId > 0 === false) {  // BUG #4: inverted — rejects positive IDs
    showResult('ID must be positive', true);
    return;
  }

  // BUG #6: caches the Promise, not the resolved value
  if (!cachedUser) {
    cachedUser = fetchUser(userId);  // BUG #6: Promise stored, not data
  }

  // BUG #7: no try/catch — if fetchUser rejects, nothing handles it
  const user = await cachedUser;

  // BUG #5: unsanitized user data injected into innerHTML — XSS risk
  document.getElementById('result').innerHTML =
    `<strong>${user.name}</strong><br>${user.email}<br>${user.website}`;  // BUG #5
}

function showResult(message, isError = false) {
  const el = document.getElementById('result');
  el.className = isError ? 'error' : '';
  el.textContent = message;
}