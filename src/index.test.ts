import { Pager } from ".";

describe('Test current', () => {
  const pager = new Pager([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  test('page 1', () => {
    expect(pager.current(1).join(', ')).toBe('6, 7, 8, 9, 10');
  })

  test('page 0', () => {
    expect(pager.current(0).join(', ')).toBe('1, 2, 3, 4, 5');
  })

  test('lastIndex', () => {
    expect(pager.current(pager.lastIndex).join(', ')).toBe('6, 7, 8, 9, 10');
  })

  test('page 1000', () => {
    expect(pager.current(1000).join(', ')).toBe('6, 7, 8, 9, 10');
  })

  test('page -1 (No supported)', () => {
    expect(pager.current(-1).join(', ')).toBe('1, 2, 3, 4, 5');
  })
});


describe('Test others', () => {
  const pager = new Pager([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  test('iterator', () => {
    expect([...pager].join(', ')).toBe('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
  });
});
