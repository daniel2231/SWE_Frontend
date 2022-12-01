async function main(code, returnValueContext) {
  const result = [];
  let error = [];
  const pyodide = await window.loadPyodide({
    stdin: window.prompt,
    stdout: (text) => {
      if (text !== 'Python initialization complete') result.push(text);
    },
    stderr: (text) => {
      error += text;
    }
  });

  try {
    pyodide.runPython(code);
    returnValueContext.setReturnValue(result);
  } catch (e) {
    e.toString()
      .split('File')
      .map((item) => error.push(item));
    error.splice(1, 2);
  }

  if (error) return error;
  return result;
}

export default function Pyodide(codeString, returnValueContext) {
  // const promise1 = main(codeString, returnValueContext);
  main(codeString, returnValueContext);
  // promise1.then((value) => {
  //   console.log(value);
  //   returnValueContext.setReturnValue(value);
  // });
}
