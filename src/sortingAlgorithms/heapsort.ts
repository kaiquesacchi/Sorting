export default function heapsort(list: number[]): number[][] {
  let swaps: number[][] = [];
  let end = list.length - 1;

  // Orders list as a heap.
  let start = parent(end);
  while (start >= 0) {
    shift_down(list, start, end, swaps);
    start--;
  }

  // Remove the root by swapping with the end of the heap, reduces the heap and repairs it
  while (end > 0) {
    swaps.push(swap(list, 0, end));
    end--;
    shift_down(list, 0, end, swaps);
  }

  return swaps;
}

function shift_down(list: number[], start: number, end: number, swaps: number[][]) {
  // Moves the invalid root to its correct position
  let root = start;

  while (leftChild(root) <= end) {
    let max = root;
    let child = leftChild(root);
    if (list[child] > list[max]) max = child;
    if (child + 1 <= end && list[child + 1] > list[max]) max = child + 1;
    if (max === root) break;
    swaps.push(swap(list, root, max));
    root = max;
  }
}

function parent(nodeIndex: number): number {
  return Math.floor((nodeIndex - 1) / 2);
}

function leftChild(nodeIndex: number): number {
  return nodeIndex * 2 + 1;
}

function swap(list: number[], firstIndex: number, secondIndex: number): number[] {
  const aux = list[firstIndex];
  list[firstIndex] = list[secondIndex];
  list[secondIndex] = aux;
  return [firstIndex, secondIndex];
}
