import {Pager} from '.';

describe('Current test', () => {
  const pager = new Pager([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  test('page 1', () => {
    expect(pager.current(1).join(', ')).toBe('6, 7, 8, 9, 10');
  });

  test('page 0', () => {
    expect(pager.current(0).join(', ')).toBe('1, 2, 3, 4, 5');
  });

  test('lastIndex', () => {
    expect(pager.current(pager.lastIndex).join(', ')).toBe('6, 7, 8, 9, 10');
  });

  test('page 1000', () => {
    expect(pager.current(1000).join(', ')).toBe('6, 7, 8, 9, 10');
  });

  test('page -1 (No supported)', () => {
    expect(pager.current(-1).join(', ')).toBe('1, 2, 3, 4, 5');
  });
});


describe('Page feed test', () => {
  const pager = new Pager([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

  test('next 1', () => {
    expect(pager.next().join(', ')).toBe('4, 5, 6');
  });

  test('next 2', () => {
    expect(pager.next().join(', ')).toBe('7, 8, 9');
  });

  test('next 3', () => {
    expect(pager.next().join(', ')).toBe('10');
  });

  test('prev 1', () => {
    expect(pager.prev().join(', ')).toBe('7, 8, 9');
  });

  test('prev 2', () => {
    expect(pager.prev().join(', ')).toBe('4, 5, 6');
  });

  test('prev 3', () => {
    expect(pager.prev().join(', ')).toBe('1, 2, 3');
  });
});


describe('Test throw', () => {
  expect(() => {
    // @ts-ignore
    new Pager({});
  }).toThrowError('The first argument must be an iterable.');
});


describe('Test others', () => {
  const pager = new Pager([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  test('iterator', () => {
    expect([...pager].join(', ')).toBe('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
  });
});
