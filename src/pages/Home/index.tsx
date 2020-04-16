import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import quicksort from '../../sortingAlgorithms/quicksort';
export default function Home() {
  const [list, setList] = useState<number[]>([]);
  const [listSize, setListSize] = useState(20);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    generateRandomArray();
  }, []);

  function play() {
    const swaps = quicksort([...list]);
    if (swaps.length !== 0) setIsRunning(true);
    let newList = [...list];
    swaps.forEach((swap, index) => {
      setTimeout(() => {
        let aux = newList[swap[0]];
        newList[swap[0]] = newList[swap[1]];
        newList[swap[1]] = aux;
        setList([...newList]);
        if (index === swaps.length - 1) setIsRunning(false);
      }, 100 * (index + 1));
    });
  }

  function generateRandomArray(): number[] {
    let array: number[] = [];
    for (let i = 0; i < listSize; i++) {
      array.push(Math.random());
    }
    setList(array);
    return array;
  }

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
      <TouchableOpacity
        onPress={play}
        disabled={isRunning}
        accessibilityLabel="Run the sorting algorithm"
        style={{
          backgroundColor: '#8020f0',
          height: 65,
          width: 65,
          borderRadius: 65,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: 20,
          bottom: 20
        }}
      >
        <Text>></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        disabled={isRunning}
        accessibilityLabel="Run the sorting algorithm"
        style={{
          backgroundColor: '#8020f0',
          height: 65,
          width: 65,
          borderRadius: 65,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: 100,
          bottom: 20
        }}
      >
        <Text>*</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={generateRandomArray}
        disabled={isRunning}
        accessibilityLabel="Run the sorting algorithm"
        style={{
          backgroundColor: '#8020f0',
          height: 65,
          width: 65,
          borderRadius: 65,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: 180,
          bottom: 20
        }}
      >
        <Text>?</Text>
      </TouchableOpacity>
    </View>
  );
}
