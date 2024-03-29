import {expect} from 'chai';

import {NumbersValidator} from '../../app/numbers_validator.js';

describe('isInteger', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return true if number is integer', function() {
    expect(validator.isInteger(4)).to.be.equal(true);
  });
  it('should return false if number is not integer', function() {
    expect(validator.isInteger(5.5)).to.be.equal(false);
  });
  it('should throw an error when provided a string', function() {
    expect(() => {
      validator.isInteger('4');
    }).to.throw('[4] is not a number');
  });
});
