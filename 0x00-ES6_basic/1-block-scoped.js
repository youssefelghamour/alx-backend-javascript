export default function taskBlock(trueOrFalse) {
  // eslint-disable-next-line no-var
  var task = false; // Block-scoped variable
  // eslint-disable-next-line no-var
  var task2 = true; // Block-scoped variable

  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
