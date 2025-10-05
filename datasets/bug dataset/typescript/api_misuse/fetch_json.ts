// API misuse: not checking response.ok before parsing JSON leads to thrown errors on non-2xx
export async function fetchJson(url: string) {
  const r = await fetch(url);
  const j = await r.json(); // may throw if 404 returns HTML
  return j;
}
