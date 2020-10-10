import {
  uniqWithSet,
  uniqWithIndexOf,
  uniqQuadratic,
  quickSort,
  uniqWithQuickSort,
} from './Q4_Uniq'

const listOfNumbers = [1, 1, 2, 3, 2, 1]
const uniqNumbers = [1, 2, 3]

const listOfStrings = ['a', 'ab', 'a', 'ba', 'ab', 'bab']
const uniqStrings = ['a', 'ab', 'ba', 'bab']

const listOfNumbersAndStrings = listOfNumbers.concat(listOfStrings)
const uniqNumbersAndStrings = [1, 2, 3, 'a', 'ab', 'ba', 'bab']
const listOfObjects = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 1, name: 'a' },
]

test('it tests uniqWithSet', () => {
  expect(uniqWithSet(listOfNumbers)).toStrictEqual(uniqNumbers)
  expect(uniqWithSet(listOfStrings)).toStrictEqual(uniqStrings)
  expect(uniqWithSet(listOfNumbersAndStrings)).toStrictEqual(
    uniqNumbersAndStrings
  )
  expect(uniqWithSet(listOfObjects)).toStrictEqual(listOfObjects)
})

test('it tests uniqWithIndexOf', () => {
  expect(uniqWithIndexOf(listOfNumbers)).toStrictEqual(uniqNumbers)
  expect(uniqWithIndexOf(listOfStrings)).toStrictEqual(uniqStrings)
  expect(uniqWithIndexOf(listOfNumbersAndStrings)).toStrictEqual(
    uniqNumbersAndStrings
  )
  expect(uniqWithIndexOf(listOfObjects)).toStrictEqual(listOfObjects)
})

test('it tests uniqQuadratic', () => {
  expect(uniqQuadratic(listOfNumbers)).toStrictEqual(uniqNumbers)
  expect(uniqQuadratic(listOfStrings)).toStrictEqual(uniqStrings)
  expect(uniqQuadratic(listOfNumbersAndStrings)).toStrictEqual(
    uniqNumbersAndStrings
  )
  expect(uniqQuadratic(listOfObjects)).toStrictEqual(listOfObjects)
})

// NOTE Sorting makes sense for the values of the same type, ot at least if we
// want to mix numbers and strings, strings must be numerical, like '2'
test('it tests quickSort', () => {
  const sortedNumbers = [1, 1, 1, 2, 2, 3]
  const sortedStrings = ['a', 'a', 'ab', 'ab', 'ba', 'bab']

  expect(quickSort(listOfNumbers)).toStrictEqual(sortedNumbers)
  expect(quickSort(listOfStrings)).toStrictEqual(sortedStrings)
  expect(quickSort(listOfObjects)).toStrictEqual(listOfObjects)
})

test('it tests uniqWithQuickSort', () => {
  const uniqStringsAndNumbers = ['a', 'ab', 'ba', 'bab', 1, 2, 3]

  expect(uniqWithQuickSort(listOfNumbers)).toStrictEqual(uniqNumbers)
  expect(uniqWithQuickSort(listOfStrings)).toStrictEqual(uniqStrings)
  expect(uniqWithQuickSort(listOfObjects)).toStrictEqual(listOfObjects)
})
