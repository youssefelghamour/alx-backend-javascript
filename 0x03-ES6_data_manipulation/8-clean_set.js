export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  let str = '';

  for (const element of set) {
    if (startString && element.startsWith(startString)) {
      const newStr = element.slice(startString.length);
      str = `${str}-${newStr}`;
    }
  }

  return str.slice(1);
}
