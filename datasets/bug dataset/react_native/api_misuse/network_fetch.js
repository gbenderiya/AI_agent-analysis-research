/* API misuse: not handling network cancellation or component unmount - memory leaks possible */
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function Data() {
  const [d, setD] = useState(null);
  useEffect(()=>{
    fetch('https://httpbin.org/delay/5')
      .then(r=>r.json())
      .then(j=>setD(j));
  }, []);
  return <Text>{JSON.stringify(d)}</Text>;
}
