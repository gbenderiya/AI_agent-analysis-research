/* Syntax bug in JSX: missing closing tag can crash packager */
import React from 'react';
import { Text, View } from 'react-native';

export default function Hello() {
  return (
    <View>
      <Text>Hello</Text>
      <Text>World</Text>
  );
}
