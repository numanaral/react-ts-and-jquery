// inferred generics

const inferred = <T>(arr: Array<T>) => {
  return arr;
}

const a = inferred([1, 2, 3]); // Knows it's a number array.
const b = inferred(['1', '2', '3']); // Knows it's a string array.
