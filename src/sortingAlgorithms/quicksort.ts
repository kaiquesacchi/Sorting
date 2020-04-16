export default function quicksort(
  list: number[],
  start = 0,
  end: number | null = null
): number[][] {
  let i: number;
  let swaps: number[][] = [];
  if (end === null) end = list.length - 1;
  if (start < end) {
    const result = partition(list, start, end);
    i = result.i;
    swaps = result.swaps;
    quicksort(list, start, i - 1).forEach(swap => {
      swaps.push(swap);
    });
    quicksort(list, i + 1, end).forEach(swap => {
      swaps.push(swap);
    });
  }
  return swaps;
}

interface IPartition {
  i: number;
  swaps: number[][];
}

function partition(list: number[], start: number, end: number): IPartition {
  let swaps: number[][] = [];
  const pivot = list[end];
  let i = start;
  let j;
  for (j = start; j <= end; j++) {
    if (list[j] < pivot) {
      if (i != j) {
        let aux = list[i];
        list[i] = list[j];
        list[j] = aux;
        swaps.push([i, j]);
      }
      i++;
    }
  }
  if (i != end) {
    let aux = list[i];
    list[i] = list[end];
    list[end] = aux;
    swaps.push([i, end]);
  }
  return {
    i: i,
    swaps: swaps
  };
}
