// api.js
// BUG #1: fetch without await — returns Promise, not data
// BUG #2: response.json() without await — returns Promise, not parsed object
async function fetchUser(id) {
  const response = fetch(`https://jsonplaceholder.typicode.com/users/${id}`);  // BUG #1
  const data = response.json();                                                  // BUG #2
  return data;
}