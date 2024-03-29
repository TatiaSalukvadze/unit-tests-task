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
    const evenNumbersArr = validator.getEvenNumbersFromArray(arrNum);
    expect(evenNumbersArr).to.be.eql([10, 6, 2]);
  });

  it('should throw an error if array is not full of numbers', function() {
    const arrVal = [10, 5, '6', 9, 2];
    expect(() => {
      validator.getEvenNumbersFromArray(arrVal);
    }).to.throw('[10,5,6,9,2] is not an array of "Numbers"');
  });
});
