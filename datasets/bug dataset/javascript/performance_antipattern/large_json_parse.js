// Performance antipattern: parsing giant JSON on main thread instead of streaming
function handleBody(body) {
  const obj = JSON.parse(body); // may block event loop for large bodies
  return obj;
}
