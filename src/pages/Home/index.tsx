import React, { useState, useEffect } from 'react';
import { Text, View, Modal, Picker } from 'react-native';
import { Container, AnimationArea, Settings, SettingsPopup } from './styles';
import { Appbar, FAB, Button } from 'react-native-paper';

import { quicksort, mergesort } from '../../sortingAlgorithms';

export default function Home() {
  const [list, setList] = useState<number[]>([]);
  const [listSize, setListSize] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const [modalSettingsVisible, setModalSettingsVisible] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Quicksort');
  const [stepDelay, setStepDelay] = useState(10);
  const [FABOpen, setFABOpen] = useState(false);
  useEffect(
    () => {
      generateRandomArray();
    },
    [listSize]
  );

  function play() {
    let swaps: number[][] = [];
    switch (selectedAlgorithm) {
      case 'Quicksort':
        swaps = quicksort([...list]);
        break;
      case 'Mergesort':
        swaps = mergesort([...list]);
        break;
      default:
        swaps = quicksort([...list]);
        break;
    }

    if (swaps.length !== 0) setIsRunning(true);
    let newList = [...list];
    swaps.forEach((swap, index) => {
      setTimeout(() => {
        let aux = newList[swap[0]];
        newList[swap[0]] = newList[swap[1]];
        newList[swap[1]] = aux;
        setList([...newList]);
        if (index === swaps.length - 1) setIsRunning(false);
      }, stepDelay * (index + 1));
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

  const ModalSettings = (
    <Modal animationType="fade" transparent={true} visible={modalSettingsVisible}>
      <Settings>
        <SettingsPopup>
          <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>Settings</Text>
          <Text style={{ color: 'white', fontSize: 14, marginBottom: -10 }}>Algorithm</Text>
          <Picker
            selectedValue={selectedAlgorithm}
            style={{
              height: 50,
              width: 150,
              color: 'white'
            }}
            onValueChange={(itemValue) => setSelectedAlgorithm(itemValue)}
          >
            <Picker.Item label="Quicksort" value="Quicksort" />
            <Picker.Item label="Mergesort" value="Mergesort" />
          </Picker>
          <Text style={{ color: 'white', fontSize: 14, marginBottom: -10 }}>List Size</Text>
          <Picker
            selectedValue={listSize}
            style={{ height: 50, width: 150, color: 'white' }}
            onValueChange={(itemValue) => setListSize(itemValue)}
          >
            <Picker.Item label="10 items" value={10} />
            <Picker.Item label="30 items" value={30} />
            <Picker.Item label="100 items" value={100} />
          </Picker>
          <Text style={{ color: 'white', fontSize: 14, marginBottom: -10 }}>Step Delay</Text>
          <Picker
            selectedValue={stepDelay}
            style={{ height: 50, width: 150, color: 'white' }}
            onValueChange={(itemValue) => setStepDelay(itemValue)}
          >
            <Picker.Item label="10 ms" value={10} />
            <Picker.Item label="100 ms" value={100} />
            <Picker.Item label="500 ms" value={500} />
          </Picker>
          <Button
            icon="check"
            mode="contained"
            onPress={() => setModalSettingsVisible(false)}
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              width: '100%'
            }}
          >
            APPLY
          </Button>
        </SettingsPopup>
      </Settings>
    </Modal>
  );
  return (
    <Container>
      <Appbar.Header>
        <Appbar.Content title={selectedAlgorithm} />
      </Appbar.Header>
      {ModalSettings}
      <AnimationArea>
        {list.map((element, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: '#5060cc',
                width: element * 100 + '%',
                height: 100 / (list.length * 1.3) + '%',
                elevation: 2
              }}
            />
          );
        })}
      </AnimationArea>
      <FAB.Group
        visible={!isRunning}
        open={FABOpen}
        icon={FABOpen ? 'minus' : 'plus'}
        actions={[
          {
            icon: 'tune',
            label: 'Settings',
            onPress: () => setModalSettingsVisible(true)
          },
          {
            icon: 'playlist-plus',
            label: 'New list',
            onPress: generateRandomArray
          },
          { icon: 'play', label: 'Run', onPress: play }
        ]}
        onStateChange={({ open }) => {
          setFABOpen(open);
        }}
      />
    </Container>
  );
}
