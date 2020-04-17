import React, { useState, useEffect } from 'react';
import { Text, View, Modal, Button, Picker } from 'react-native';
import quicksort from '../../sortingAlgorithms/quicksort';
import { Container, Settings, SettingsPopup, FAB } from './styles';

export default function Home() {
  const [list, setList] = useState<number[]>([]);
  const [listSize, setListSize] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [modalSettings, setModalSettings] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Quicksort');

  useEffect(
    () => {
      generateRandomArray();
    },
    [listSize]
  );

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
    <Container>
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

      <Modal animationType="slide" transparent={true} visible={modalSettings}>
        <Settings>
          <SettingsPopup>
            <Text>Settings</Text>
            <Picker
              selectedValue={selectedAlgorithm}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedAlgorithm(itemValue)}
            >
              <Picker.Item label="Quicksort" value="Quicksort" />
            </Picker>
            <Picker
              selectedValue={listSize}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setListSize(itemValue)}
            >
              <Picker.Item label="10" value={10} />
              <Picker.Item label="30" value={30} />
              <Picker.Item label="100" value={100} />
            </Picker>
            <Button
              onPress={() => {
                setModalSettings(false);
              }}
              title="Close"
            />
          </SettingsPopup>
        </Settings>
      </Modal>

      <FAB
        onPress={play}
        disabled={isRunning}
        accessibilityLabel="Run the sorting algorithm"
        style={{
          right: 20,
          bottom: 20
        }}
      >
        <Text>></Text>
      </FAB>
      <FAB
        onPress={() => {
          setModalSettings(true);
        }}
        disabled={isRunning}
        accessibilityLabel="Run the sorting algorithm"
        style={{
          right: 100,
          bottom: 20
        }}
      >
        <Text>*</Text>
      </FAB>
      <FAB
        onPress={generateRandomArray}
        disabled={isRunning}
        accessibilityLabel="Run the sorting algorithm"
        style={{
          right: 180,
          bottom: 20
        }}
      >
        <Text>?</Text>
      </FAB>
    </Container>
  );
}
