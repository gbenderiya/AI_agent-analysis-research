// API misuse / security: injecting unsanitized user input into innerHTML
function show (msg) {
  const el = document.getElementById('out')
  el.innerHTML = '<div>' + msg + '</div>' // XSS if msg untrusted
}
