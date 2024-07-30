export default function cleanSet(set, startString) {
  const sets = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const val of set) {
    if (val.startsWith(startString)) {
      const remainder = val.slice(startString.length);
      sets.push(remainder);
    }
  }
  return sets.join('-');
}
