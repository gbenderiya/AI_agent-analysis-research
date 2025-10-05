/* Performance antipattern: creating inline functions and objects during render causing re-renders */
import React from 'react';
import { View } from 'react-native';

export default function List({items}){
  return (
    <View>
      {items.map(i => <Item key={i} onClick={() => console.log(i)} />)} {/* inline function in render */}
    </View>
  );
}

function Item(){ return null; }
