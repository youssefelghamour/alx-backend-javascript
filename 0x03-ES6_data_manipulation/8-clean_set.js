export default function cleanSet(set, startString) {
  let str = '';

  for (const element of set) {
    if (startString && element.startsWith(startString)) {
      const newStr = element.slice(startString.length);
      str = `${str}-${newStr}`;
    }
  }

  return str.slice(1) || '';
}
