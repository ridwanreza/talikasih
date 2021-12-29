// /**
//  * @format
//  */

// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

const formatNumber = x => {
  if (x) {
    let num = x.toString().replace(/,/g, '');
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return '';
  }
};

const strToInt = value => {
  if (Number.isInteger(value) === true) {
    return value;
  } else if (Number.isInteger(value) === false) {
    return Number(value.replace(/,/g, ''));
  }
};

test('format number with commas', () => {
  expect(formatNumber(50000)).toBe('50,000');
});

test('format string to integer', () => {
  expect(strToInt('100,000')).toBe(100000);
});
