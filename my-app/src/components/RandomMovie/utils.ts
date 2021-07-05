export const getRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPage = (totalPages: number) => {
  return getRandomNumber(1, totalPages);
};

export const getRandomMovie = (array: []) => {
  return array.length ? array[getRandomNumber(0, array.length - 1)] : array;
};
