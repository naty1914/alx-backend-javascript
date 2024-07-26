export default function iterateThroughObject(reportWithIterator) {
  const arr = [];
  for (const e of reportWithIterator) {
    arr.push(e);
  }

  return arr.join(' | ');
}
