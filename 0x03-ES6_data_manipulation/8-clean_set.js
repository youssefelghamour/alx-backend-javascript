export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  for (const element of set) {
    if (startString && element.startsWith(startString)) {
      const newStr = element.slice(startString.length);
      result.push(newStr);
    }
  }

  return result.join('-');
}
