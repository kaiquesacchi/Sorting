import sortingAlgorithms from '.';

function generateRandomArray(listSize: number): number[] {
  let array: number[] = [];
  for (let i = 0; i < listSize; i++) {
    array.push(Math.random());
  }
  return array;
}

function swapPositions(array: number[], firstPosition: number, secondPosition: number) {
  let aux = array[firstPosition];
  array[firstPosition] = array[secondPosition];
  array[secondPosition] = aux;
}
let unsortedArray: number[];
let sortedArray: number[];

beforeEach(() => {
  /**
     * Gives each test an array of 100 numbers, sorted and unsorted.
     */
  unsortedArray = generateRandomArray(100);
  sortedArray = [...unsortedArray];
  sortedArray.sort();
});

afterEach(() => {
  /**
     * Checks if the sorting algorithm was successful ordering the array.
     */
  expect(unsortedArray).toEqual(sortedArray);
});

test('Runs Heapsort and checks if it sorts correctly', () => {
  let swaps = sortingAlgorithms.heapsort([...unsortedArray]);
  swaps.forEach((swap) => {
    swapPositions(unsortedArray, swap[0], swap[1]);
  });
});

test('Runs Insertion Sort and checks if it sorts correctly', () => {
  let swaps = sortingAlgorithms.insertionSort([...unsortedArray]);
  swaps.forEach((swap) => {
    swapPositions(unsortedArray, swap[0], swap[1]);
  });
});

test('Runs Mergesort and checks if it sorts correctly', () => {
  let swaps = sortingAlgorithms.mergesort([...unsortedArray]);
  swaps.forEach((swap) => {
    swapPositions(unsortedArray, swap[0], swap[1]);
  });
});

test('Runs Quicksort and checks if it sorts correctly', () => {
  let swaps = sortingAlgorithms.quicksort([...unsortedArray]);
  swaps.forEach((swap) => {
    swapPositions(unsortedArray, swap[0], swap[1]);
  });
});
