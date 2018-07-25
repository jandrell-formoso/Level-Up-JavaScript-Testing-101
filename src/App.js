// @flow
const hello = () => 'Hello';

const add = (x: number, y: number) => {
  if (typeof(x) !== 'number' || typeof(y) !== 'number') return null;
  return x + y;
};

const removeSNames = (names: string[]): string[] => {
  return names.map((name, index, arr): any => {
    if (name.charAt(0).toLowerCase() !== 's') return name;
    return 0;
  });
};

export { hello, add, removeSNames };
