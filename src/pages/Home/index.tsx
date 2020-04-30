import React, { useState, useEffect } from 'react';
import { View, Modal, Picker } from 'react-native';
import { Container, AnimationArea, Settings } from './styles';
import { Appbar, FAB, Button } from 'react-native-paper';

import sortingAlgorithms from '../../sortingAlgorithms';

export default function Home() {
  const [list, setList] = useState<number[]>([]);
  const [listSize, setListSize] = useState(50);
  const [isRunning, setIsRunning] = useState(false);
  const [modalSettingsVisible, setModalSettingsVisible] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Quicksort');
  const [stepDelay, setStepDelay] = useState(10);
  const [currentSwap, setCurrentSwap] = useState<number[]>([]);
  const [FABOpen, setFABOpen] = useState(false);

  useEffect(generateRandomArray, [listSize]);

  function step(swaps: number[][], list: number[]) {
    const swap = swaps.shift();
    if (swap === undefined) {
      setIsRunning(false);
      setCurrentSwap([]);
      return;
    }
    setCurrentSwap(swap);
    let aux = list[swap[0]];
    list[swap[0]] = list[swap[1]];
    list[swap[1]] = aux;
    setList([...list]);
    setTimeout(() => {
      step(swaps, list);
    }, stepDelay);
  }

  function play() {
    setIsRunning(true);
    let swaps: number[][] = [];
    switch (selectedAlgorithm) {
      case 'Quicksort':
        swaps = sortingAlgorithms.quicksort([...list]);
        break;
      case 'Mergesort':
        swaps = sortingAlgorithms.mergesort([...list]);
        break;
      case 'Heapsort':
        swaps = sortingAlgorithms.heapsort([...list]);
        break;
      case 'InsertionSort':
        swaps = sortingAlgorithms.insertionSort([...list]);
        break;
      default:
        swaps = sortingAlgorithms.quicksort([...list]);
        break;
    }
    if (swaps.length === 0) {
      setIsRunning(false);
      return;
    }
    step(swaps, [...list]);
  }

  function generateRandomArray() {
    let array: number[] = [];
    for (let i = 0; i < listSize; i++) {
      array.push(Math.random());
    }
    setList(array);
  }

  const ModalSettings = (
    <Modal animationType="fade" transparent={true} visible={modalSettingsVisible}>
      <Settings.Background>
        <Settings.Popup>
          <Settings.Title>Settings</Settings.Title>
          <Settings.Subtitle>Algorithm</Settings.Subtitle>
          <Settings.WhitePicker
            selectedValue={selectedAlgorithm}
            onValueChange={(itemValue) => setSelectedAlgorithm(itemValue)}
          >
            <Picker.Item label="Quicksort" value="Quicksort" />
            <Picker.Item label="Mergesort" value="Mergesort" />
            <Picker.Item label="Heapsort" value="Heapsort" />
            <Picker.Item label="Insertion Sort" value="InsertionSort" />
          </Settings.WhitePicker>
          <Settings.Subtitle>List Size</Settings.Subtitle>
          <Settings.WhitePicker selectedValue={listSize} onValueChange={(itemValue) => setListSize(itemValue)}>
            <Picker.Item label="10 items" value={10} />
            <Picker.Item label="50 items" value={50} />
            <Picker.Item label="100 items" value={100} />
            <Picker.Item label="200 items" value={200} />
          </Settings.WhitePicker>
          <Settings.Subtitle>Step Delay</Settings.Subtitle>
          <Settings.WhitePicker selectedValue={stepDelay} onValueChange={(itemValue) => setStepDelay(itemValue)}>
            <Picker.Item label="0 ms" value={0} />
            <Picker.Item label="10 ms" value={10} />
            <Picker.Item label="100 ms" value={100} />
            <Picker.Item label="200 ms" value={200} />
          </Settings.WhitePicker>
          <Button
            mode="contained"
            onPress={() => setModalSettingsVisible(false)}
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              width: '100%'
            }}
            color="#03dac4"
          >
            APPLY
          </Button>
        </Settings.Popup>
      </Settings.Background>
    </Modal>
  );

  const fabs = [
    {
      icon: 'tune',
      label: 'Settings',
      onPress: () => setModalSettingsVisible(true)
    },
    {
      icon: 'playlist-plus',
      label: 'New random list',
      onPress: generateRandomArray
    },
    { icon: 'play', label: 'Run', onPress: play }
  ];

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
                backgroundColor: currentSwap.includes(index) ? '#03dac4' : '#5060c0',
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
        actions={fabs}
        onStateChange={({ open }) => {
          setFABOpen(open);
        }}
      />
    </Container>
  );
}
