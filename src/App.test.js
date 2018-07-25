// @flow
/**
 * Test-Driven Development Rules
 * You are not allowed to:
 * 1. Write any production code unless it is to make a failing unit test pass
 * 2. Write any more of a unit test than is sufficient to fail; and compilation failures are failures
 * 3. Write any more production code than is sufficient to pass the one failing unit test.
 */
import { hello, add, removeSNames } from './App';

describe('Hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello');
  });
})

describe('add function', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 2)).toBe(4);
    expect(add(-2, 2)).toBe(0);
    expect(add(-2, -2)).toBe(-4);
  });
});

describe('remove S names', () => {
  it('should remove all S names', () => {
    const names: string[] = ['Scott', 'Josie', 'Serious Black'];
    expect(removeSNames(names)).not.toContain('Scott');
    expect(removeSNames(names)).not.toContain('Serious Black');
    expect(removeSNames(names)).toContain('Josie');
  });
});
