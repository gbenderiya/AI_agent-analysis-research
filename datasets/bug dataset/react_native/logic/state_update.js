/* Logic bug: mutating state directly instead of using setState/useState setter */
import React, { useState } from 'react'
import { Button, Text } from 'react-native'

export default function Counter () {
  const [state, setState] = useState({ count: 0 })
  function inc () {
    state.count += 1 // direct mutation - UI may not update
    setState(state)
  }
  return (
    <>
      <Text>{state.count}</Text>
      <Button title='+' onPress={inc} />
    </>
  )
}
