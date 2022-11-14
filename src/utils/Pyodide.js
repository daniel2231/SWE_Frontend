async function main(code) {
  const result = [];
  let error = '';
  const pyodide = await window.loadPyodide({
    stdin: window.prompt,
    stdout: (text) => {
      if (text !== 'Python initialization complete') result.push(text);
    },
    stderr: (text) => {
      error += text;
    }
  });

  pyodide.runPython(code);

  if (error) return error;
  return result;
}

export default function Pyodide(codeString, returnValueContext) {
  const promise1 = main(codeString);
  promise1.then((value) => {
    returnValueContext.setReturnValue(value);
  });
}
