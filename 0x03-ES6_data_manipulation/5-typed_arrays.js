function createInt8TypedArray(length, position, value) {
  const newBuffer = new ArrayBuffer(length);
  const newView = new DataView(newBuffer);

  if (position < 0 || position >= length) throw new Error('Position outside range');

  newView.setInt8(position, value);

  return newView;
}
export default createInt8TypedArray;
