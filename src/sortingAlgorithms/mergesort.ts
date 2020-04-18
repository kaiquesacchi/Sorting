export default function mergesort(
  list: number[],
  start = 0,
  end: number = list.length - 1
): number[][] {
  let swaps: number[][] = [];
  let middle = Math.ceil((end + start) / 2);
  if (end - start > 1) {
    mergesort(list, start, middle - 1).forEach(swap => {
      swaps.push(swap);
    });
    mergesort(list, middle, end).forEach(swap => {
      swaps.push(swap);
    });
  }

  for (let i = start; i < middle && middle <= end; i++) {
    if (list[i] > list[middle]) {
      for (let k = 0; k < middle - i; k++) {
        swaps.push([middle - k, middle - k - 1]);
        let aux = list[middle - k];
        list[middle - k] = list[middle - k - 1];
        list[middle - k - 1] = aux;
      }
      middle++;
    }
  }

  return swaps;
}
