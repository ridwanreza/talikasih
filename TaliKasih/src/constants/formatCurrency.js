const numberWithCommas = x => {
  if (x) {
    let num = x.toString().replace(/,/g, '');
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return '';
  }
};

export default numberWithCommas;
