const strToInt = value => {
  if (Number.isInteger(value) === true) {
    return value;
  } else if (Number.isInteger(value) === false) {
    return value.replace(/,/g, '');
  }
};

export default strToInt;
