function normalizePort(val) {
  let port = parseInt(val);

  if (isNaN(port)) return false;

  if (port >= 0) return port;

  return false;
}

export { normalizePort };