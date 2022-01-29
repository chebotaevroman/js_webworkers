const bigFn = (counter) => {
  let result = 0;

  for (let i = 0; i < counter; i++) {
    result += counter;
  }

  return result;
};

export default bigFn;
