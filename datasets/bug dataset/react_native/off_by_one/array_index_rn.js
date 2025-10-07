/* Off-by-one: using <= when mapping indices causes undefined rendering item */
import React from 'react'
import { Text } from 'react-native'

export function ShowItems ({ items }) {
  return items.map((it, i) => {
    if (i <= items.length) {
      // should be <
      return <Text key={i}>{items[i]}</Text>
    }
  })
}
