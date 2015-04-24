var fizzbuzz = require('..').fizzbuzz;
var divisibleBy = require('..').divisibleBy;

describe("divisibleBy()", function() {

  it("returns true when the second argument is divisible by the first argument", function() {
    var divisibleByOne   = divisibleBy(1);
    var divisibleByTwo   = divisibleBy(2);
    expect(divisibleByTwo(6)).toBe(true);
    expect(divisibleByOne(1)).toBe(true);
  });

  it("returns false when the second argument is not divisible by the first argument", function() {
    var divisibleByTwo   = divisibleBy(2);
    var divisibleByThree = divisibleBy(3);
    var divisibleByTen   = divisibleBy(10);
    expect(divisibleByTwo(3)).toBe(false);
    expect(divisibleByThree(2)).toBe(false);
    expect(divisibleByTen(25)).toBe(false);
  });

});

describe("fizzbuzz()", function() {

  it("returns the number as a String when it isn't divisible by 3 or 5", function() {
    expect(fizzbuzz(7)).toEqual('7');
    expect(fizzbuzz(79)).toEqual('79');
  });

  it("returns 'Fizz' for numbers divisible by 3", function() {
    expect(fizzbuzz(3)).toEqual('Fizz');
    expect(fizzbuzz(99)).toEqual('Fizz');
  });

  it("returns 'Buzz' for numbers divisible by 5", function() {
    expect(fizzbuzz(10)).toEqual('Buzz');
    expect(fizzbuzz(50)).toEqual('Buzz');
  });

  it("returns 'FizzBuzz' for numbers divisible by 3 and by 5", function() {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
    expect(fizzbuzz(90)).toEqual('FizzBuzz');
  });

  it("fails for numbers less than one", function() {
    expect(fizzbuzz.bind(null, 0)).toThrow();
  });
});