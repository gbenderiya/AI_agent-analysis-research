/* Performance antipattern: loading full-size images into memory without resize */
import React from 'react';
import { Image } from 'react-native';

export default function Avatar({uri}){
  return <Image source={{uri}} style={{width:100,height:100}} />; // may still fetch huge image
}
