async function main(code, returnValueContext, returnErrorContext) {
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
    returnValueContext.setReturnValue('');
    returnErrorContext.setReturnError('');
    pyodide.runPython(code);
    returnValueContext.setReturnValue(result);
  } catch (e) {
    e.toString()
      .split('File')
      .map((item) => error.push(item));
    error.splice(1, 2);
  }

  if (error) return error;
  return 0;
}

export default function Pyodide(codeString, returnValueContext, returnErrorContext) {
  const promise1 = main(codeString, returnValueContext, returnErrorContext);
  // console.log(returnErrorContext);
  // main(codeString, returnValueContext, returnErrorContext);
  // console.log(returnErrorContext.returnError);
  promise1.then((value) => {
    if (typeof value === 'object') returnErrorContext.setReturnError(value);
  });
}
