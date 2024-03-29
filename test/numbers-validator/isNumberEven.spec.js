import {expect} from 'chai';

import {NumbersValidator} from '../../app/numbers_validator.js';

describe('isNumberEven', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return true if number is even', function() {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
  it('should return false if number is not even', function() {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
  it('should throw an error when provided a string', function() {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});
