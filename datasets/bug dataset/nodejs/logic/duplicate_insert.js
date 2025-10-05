/* Logic bug: double insert due to missing error handling path - race in callback leads to duplicate DB writes */
const db = { insert: (item, cb) => setTimeout(()=>cb(null, item), 10) };

function saveItem(item) {
  db.insert(item, (err) => {
    if (err) console.error(err);
    // missing return; following retry code may be invoked by caller as well causing duplicate
    db.insert(item, (e) => {});
  });
}

saveItem({name:'x'});
