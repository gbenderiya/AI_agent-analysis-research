// Off-by-one: incorrect calculation of slice end leads to missing one item per page
function page (items, pageNum, perPage) {
  const start = (pageNum - 1) * perPage
  const end = start + perPage - 1 // should be + perPage
  return items.slice(start, end)
}

console.log(page([1, 2, 3, 4, 5], 1, 2)) // expects [1,2] but prints [1]
