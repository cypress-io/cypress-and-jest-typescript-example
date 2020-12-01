export const sum
  = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);

// uncomment to get a lint error
// const aString: string = 42;
