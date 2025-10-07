/* Logic bug: using index as key causing reorder bugs and UI flicker */
import React from 'react'
import { FlatList, Text } from 'react-native'

export default function Names ({ names }) {
  return (
    <FlatList
      data={names}
      renderItem={({ item, index }) => <Text key={index}>{item}</Text>}
    />
  )
}
