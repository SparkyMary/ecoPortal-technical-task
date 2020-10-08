import Chain from './Q7_Chains'

test('it tests chaining', () => {
  const foo = Chain('h')
  const bar = foo('e')('l')('l')('o')

  expect(foo.toString()).toBe('h')
  expect(bar.toString()).toBe('hello')
  expect(bar.ancestor.toString()).toBe('hell')
})
