// Performance antipattern: reading layout and writing in tight loop cause layout thrashing
function updateList(items) {
  const container = document.getElementById('list');
  items.forEach((it, i) => {
    const height = container.clientHeight; // reading layout inside loop
    const node = document.createElement('div');
    node.textContent = it;
    container.appendChild(node);
  });
}
