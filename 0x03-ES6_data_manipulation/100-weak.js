export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint already has a count in the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the WeakMap with the new count
  weakMap.set(endpoint, count);

  // If the count is 5 or more, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
