var listUsersSince = function(lastUserId) {
  let url = `https://api.github.com/users?since=${lastUserId}`;
  return fetch(url).then(response => response.json())
}

export { listUsersSince };
