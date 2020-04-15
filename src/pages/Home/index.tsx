import React from 'react';
import { Text, View } from 'react-native';

export default function Home() {
  const list = [0.3, 0.8, 0.6, 0.4, 0.8, 0.6, 0.2, 0.5, 0.7, 0.4, 0.8, 0.4, 0.8];
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        paddingVertical: 80,
        paddingHorizontal: 20,
        justifyContent: 'space-around'
      }}
    >
      {list.map((element, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor: 'blue',
              width: element * 100 + '%',
              height: 100 / (list.length + 1) + '%'
            }}
          />
        );
      })}
    </View>
  );
}
