export const arrayToString = (arr: any[]) => arr.map((item) => item.name).join(', ');
export const numberToMoney = (number: number) => (number ? `${Number(number).toLocaleString()} $` : 0);
