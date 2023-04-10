describe('validate two numbers', () => {
  it('should return true for valid numbers', () => {
    expect(validateNumbers(1, 2)).toBe(true);
    expect(validateNumbers(-1, 0)).toBe(true);
    expect(validateNumbers(0.5, 3.14)).toBe(true);
  });

  it('should return false if either value is not a number', () => {
    expect(validateNumbers('1', 2)).toBe(false);
    expect(validateNumbers(1, '2')).toBe(false);
    expect(validateNumbers('1', '2')).toBe(false);
    expect(validateNumbers(undefined, 2)).toBe(false);
    expect(validateNumbers(1, null)).toBe(false);
    expect(validateNumbers(NaN, 2)).toBe(false);
    expect(validateNumbers(1, NaN)).toBe(false);
  });
});

// Assuming validateNumbers function is available in the same scope as the add function
describe('test add function', () => {
  it('should return the sum of two valid numbers with the specified format', function () {
    const result = add(3, 4);
    expect(result).toEqual('Сума: 7');
  });

  it('should return undefined when validateNumbers returns false', function () {
    const result = add(3, 'four');
    expect(result).toBeUndefined();
  });
});

describe('test subtract function', () => {
  it('should return the difference of two valid numbers with the specified format', function () {
    const result = subtract(7, 4);
    expect(result).toEqual('Різниця: 3');
  });

  it('should return undefined when validateNumbers returns false', function () {
    const result = subtract(7, 'four');
    expect(result).toBeUndefined();
  });
});

describe('test multiply function', () => {
  it('should return the product of two valid numbers with the specified format', function () {
    const result = multiply(3, 4);
    expect(result).toEqual('Добуток: 12');
  });

  it('should return undefined when validateNumbers returns false', function () {
    const result = multiply(3, 'four');
    expect(result).toBeUndefined();
  });
});

describe('test divide function', () => {
  it('should return "Частка: {result}" for valid numbers and non-zero divisor', () => {
    expect(divide(10, 5)).toEqual('Частка: 2');
    expect(divide(15, 3)).toEqual('Частка: 5');
    expect(divide(-6, 2)).toEqual('Частка: -3');
  });

  it('should return "Ділення на нуль неможливе" for a divisor of zero', () => {
    expect(divide(10, 0)).toEqual('Ділення на нуль неможливе');
  });

  it('should return undefined for non-number inputs', () => {
    expect(divide('10', 5)).toBeUndefined();
    expect(divide(10, '5')).toBeUndefined();
    expect(divide('10', '5')).toBeUndefined();
    expect(divide(1, null)).toBeUndefined();
  });
});

describe('test findMinMax function', () => {
  it('should return the correct min and max values for an array of numbers', () => {
    const numbers = [4, 8, 15, 16, 23, 42, 1, 99, 7, 11];
    const result = findMinMax(numbers);
    expect(result.min).toEqual(1);
    expect(result.max).toEqual(99);
  });

  it('should ignore non-number elements in the array', () => {
    const numbers = [4, '8', 15, '16', 23, 42, 1, 99, 7, '11'];
    const result = findMinMax(numbers);
    expect(result.min).toEqual(1);
    expect(result.max).toEqual(99);
  });

  it('should return {min: undefined, max: undefined} for an empty array', () => {
    const numbers = [];
    const result = findMinMax(numbers);
    expect(result.min).toBeUndefined();
    expect(result.max).toBeUndefined();
  });
});

describe('test calculateSum function', () => {
  it('should return the correct sum for an array of numbers', () => {
    const numbers = [4, 8, 15, 16, 23, 42, 1, 99, 7, 11];
    const result = calculateSum(numbers);
    expect(result).toEqual(226);
  });

  it('should ignore non-number elements in the array', () => {
    const numbers = [4, '8', 15, '16', 23, 42, 1, 99, 7, '11'];
    const result = calculateSum(numbers);
    expect(result).toEqual(191);
  });

  it('should return 0 for an empty array', () => {
    const numbers = [];
    const result = calculateSum(numbers);
    expect(result).toEqual(0);
  });
});

describe('test Accumulator function', () => {
  let accumulator;

  beforeEach(() => {
    accumulator = new Accumulator(5);
  });

  it('should initialize with the provided starting value', () => {
    expect(accumulator.value).toEqual(5);
  });

  it('should increment the value by 1', () => {
    accumulator.increment();
    expect(accumulator.value).toEqual(6);
  });

  it('should decrement the value by 1', () => {
    accumulator.decrement();
    expect(accumulator.value).toEqual(4);
  });

  it('should correctly increment and decrement the value multiple times', () => {
    accumulator.increment();
    accumulator.increment();
    accumulator.decrement();
    accumulator.increment();
    expect(accumulator.value).toEqual(7);
  });
});

describe('test CancelableAccumulator function', () => {
  let cancelableAccumulator;

  beforeEach(() => {
    cancelableAccumulator = new CancelableAccumulator(20);
  });

  it('should initialize with the provided starting value', () => {
    expect(cancelableAccumulator.value).toEqual(20);
  });

  it('should increment the value by 1', () => {
    cancelableAccumulator.increment();
    expect(cancelableAccumulator.value).toEqual(21);
  });

  it('should decrement the value by 1', () => {
    cancelableAccumulator.decrement();
    expect(cancelableAccumulator.value).toEqual(19);
  });

  it('should clear the value and reset it to the starting value', () => {
    cancelableAccumulator.increment();
    cancelableAccumulator.increment();
    cancelableAccumulator.decrement();
    cancelableAccumulator.clear();
    expect(cancelableAccumulator.value).toEqual(20);
  });
});

describe('test createPyramid function', () => {
  it('should return the correct triangle rows for the given number of rows', () => {
    const result = createPyramid(5);
    const expected = ['#', '##', '###', '####', '#####'];
    expect(result).toEqual(expected);
  });

  it('should return an empty array for 0 rows', () => {
    const result = createPyramid(0);
    expect(result).toEqual([]);
  });

  it('should return an array with a single row for 1 row', () => {
    const result = createPyramid(1);
    expect(result).toEqual(['#']);
  });
});

describe('test isEmpty function', () => {
  it('should return true for an empty object', () => {
    const emptyObject = {};
    expect(isEmpty(emptyObject)).toBe(true);
  });

  it('should return false for an object with properties', () => {
    const nonEmptyObject = { prop1: 'value1', prop2: 'value2' };
    expect(isEmpty(nonEmptyObject)).toBe(false);
  });

  it('should return false for an object with inherited properties', () => {
    function Parent() {
      this.parentProp = 'parentValue';
    }

    function Child() {
      this.childProp = 'childValue';
    }

    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

    const childObject = new Child();
    expect(isEmpty(childObject)).toBe(false);
  });

  it('should return true for an object with only inherited properties', () => {
    function Parent() {
      this.parentProp = 'parentValue';
    }

    function Child() {}

    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

    const childObject = new Child();
    expect(isEmpty(childObject)).toBe(true);
  });
});

describe('test user object', () => {
  it('should have the correct name and age properties', () => {
    expect(user.name).toEqual('Іван');
    expect(user.age).toEqual(25);
  });

  it('should return the correct greeting from the sayHello method', () => {
    const greeting = user.sayHello();
    expect(greeting).toEqual('Привіт, я Іван, мені 25 років');
  });
});
