export default function getResponseFromAPI() {
  const newPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Success'), 1000);
  });
  return newPromise;
}
