const limitFunctionCallCount = (cb, n) => {
 
  let count = 0;

  return (...args) => {
    if (n === count) {
      return null;
    }

    count++;
    return cb(...args);
  };
};

export {
  limitFunctionCallCount,
};