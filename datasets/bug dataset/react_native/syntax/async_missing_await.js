/* Logic/syntax mix: forgetting to await an async helper leads to unresolved promise used as data */
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

async function fetchData () {
  return Promise.resolve({ ok: true })
}

export default function Screen () {
  const [d, setD] = useState(null)
  useEffect(() => {
    const res = fetchData() // missing await => res is a Promise
    setD(res)
  }, [])
  return <Text>{JSON.stringify(d)}</Text>
}
