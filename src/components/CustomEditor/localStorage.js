function getItem(key) {
  const value = localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
}

function setItem(key, value) {
  if (!value) return;
  const jsonDatas = JSON.stringify(value);
  localStorage.setItem(key, jsonDatas);
}
export { getItem, setItem };
