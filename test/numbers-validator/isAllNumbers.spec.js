import {expect} from 'chai';

import {NumbersValidator} from '../../app/numbers_validator.js';

describe('getEvenNumbersFromArray', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return an array of even numbers', function() {
    const arrNum = [10, 5, 6, 9, 2];
    const evenNumbersArr = validator.isAllNumbers(arrNum);
    expect(evenNumbersArr).to.be.eql(true);
  });

  it('should throw an error if array is not full of numbers', function() {
    const arrVal = 10;
    expect(() => {
      validator.isAllNumbers(arrVal);
    }).to.throw('[10] is not an array');
  });
});
