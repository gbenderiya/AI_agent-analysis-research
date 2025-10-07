/* Concurrency bug: multiple rapid setState calls relying on stale state (closure over old state) */
import React, { useState } from 'react'
import { Button, Text } from 'react-native'

export default function CounterRace () {
  const [count, setCount] = useState(0)
  function incTwice () {
    setTimeout(() => setCount(count + 1), 0)
    setTimeout(() => setCount(count + 1), 0) // both use same 'count' closure -> only +1
  }
  return (
    <>
      <Text>{count}</Text>
      <Button title='++' onPress={incTwice} />
    </>
  )
}
