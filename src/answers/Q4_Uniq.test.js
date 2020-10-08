import {
  uniqWithSet,
  uniqWithIndexOf,
  uniqWQuadratic,
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

test('it tests uniqWQuadratic', () => {
  expect(uniqWQuadratic(listOfNumbers)).toStrictEqual(uniqNumbers)
  expect(uniqWQuadratic(listOfStrings)).toStrictEqual(uniqStrings)
  expect(uniqWQuadratic(listOfNumbersAndStrings)).toStrictEqual(
    uniqNumbersAndStrings
  )
  expect(uniqWQuadratic(listOfObjects)).toStrictEqual(listOfObjects)
})

test('it tests quickSort', () => {
  const sortedNumbers = [1, 1, 1, 2, 2, 3]
  const sortedStrings = ['a', 'a', 'ab', 'ab', 'ba', 'bab']

  expect(quickSort(listOfNumbers, 0, listOfNumbers.length - 1)).toStrictEqual(
    sortedNumbers
  )
  expect(quickSort(listOfStrings, 0, listOfStrings.length - 1)).toStrictEqual(
    sortedStrings
  )
  expect(
    quickSort(listOfNumbersAndStrings, 0, listOfNumbersAndStrings.length - 1)
  ).toStrictEqual(sortedStrings.concat(sortedNumbers))
  expect(quickSort(listOfObjects, 0, listOfObjects.length - 1)).toStrictEqual(
    listOfObjects
  )
})

test('it tests uniqWithQuickSort', () => {
  const uniqStringsAndNumbers = ['a', 'ab', 'ba', 'bab', 1, 2, 3]

  expect(uniqWithQuickSort(listOfNumbers)).toStrictEqual(uniqNumbers)
  expect(uniqWithQuickSort(listOfStrings)).toStrictEqual(uniqStrings)
  expect(uniqWQuadratic(listOfNumbersAndStrings)).toStrictEqual(
    uniqStringsAndNumbers
  )
  expect(uniqWQuadratic(listOfObjects)).toStrictEqual(listOfObjects)
})
