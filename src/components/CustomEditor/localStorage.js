// key: label number(1, 2, 3)
// value: json-string format
function getItem(key) {
  const value = localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
}

function setItem(key, value) {
  if (!value) return;
  if (JSON.stringify(value) === getItem(key)) {
    console.log('이전이랑 같은 내용');
    return;
  }
  const jsonDatas = JSON.stringify(value);
  localStorage.setItem(key, jsonDatas);
}

export { getItem, setItem };
