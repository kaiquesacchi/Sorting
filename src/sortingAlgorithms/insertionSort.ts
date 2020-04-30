export default function insertionSort(list: number[]): number[][] {
  let swaps: number[][] = [];

  for (let end = 1; end < list.length; end++) {
    for (let pointer = end - 1; pointer >= 0; pointer--) {
      if (list[pointer] <= list[pointer + 1]) break;
      let aux = list[pointer];
      list[pointer] = list[pointer + 1];
      list[pointer + 1] = aux;
      swaps.push([pointer, pointer + 1]);
    }
  }

  return swaps;
}
