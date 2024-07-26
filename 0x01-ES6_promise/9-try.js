function guardrail(mathFunction) {
  const newArray = [];
  try {
    const result = mathFunction();
    newArray.push(result);
  } catch (error) {
    const firstLine = error.toString().split('\n')[0];
    newArray.push(firstLine);
  } finally {
    newArray.push('Guardrail was processed');
  }

  return newArray;
}

export default guardrail;
