export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  for (const element of set) {
    if (typeof element === 'string' && element.startsWith(startString)) {
      const newStr = element.substring(startString.length);
      if (newStr && newStr !== element) {
        result.push(newStr);
      }
    }
  }

  return result.join('-');
}
