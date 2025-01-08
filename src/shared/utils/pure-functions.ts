export function findMaxValue(array: (number | null)[]): number | null {
  const filteredArray = array.filter((item): item is number => item !== null);

  if (filteredArray.length === 0) {
    return null;
  }

  return Math.max(...filteredArray);
}

export function findMinValue(array: (number | null)[]): number | null {
  const filteredArray = array.filter((item): item is number => item !== null);

  if (filteredArray.length === 0) {
    return null;
  }

  return Math.min(...filteredArray);
}
