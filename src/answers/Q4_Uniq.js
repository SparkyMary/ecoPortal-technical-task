export const uniqWithSet = (list) => {
  return [...new Set(list)]
}

export const uniqWithIndexOf = (list) => {
  const uniqArr = []
  for (var i = 0; i < list.length; i++) {
    if (uniqArr.indexOf(list[i]) === -1) {
      uniqArr.push(list[i])
    }
  }

  return uniqArr
}

export const uniqWQuadratic = (list) => {
  const uniqArr = [list[0]]

  for (var i = 1; i < list.length; i++) {
    let alreadyExists = false

    for (var j = 0; j < uniqArr.length; j++) {
      if (list[i] === uniqArr[j]) {
        alreadyExists = true
        break
      }
    }

    if (!alreadyExists) {
      uniqArr.push(list[i])
    }
  }

  return uniqArr
}

// quick sort (recursive sort in smaller portions)

const swapItemsAtIndex = (list, leftInd, rightInd) => {
  const temp = list[leftInd]
  list[leftInd] = list[rightInd]
  list[rightInd] = temp
}

const sortPortion = (list, left, right) => {
  const initialElement = list[Math.floor((right + left) / 2)]

  let i = left,
    j = right

  while (i <= j) {
    while (list[i] < initialElement) {
      i++
    }
    while (list[j] > initialElement) {
      j--
    }
    if (i <= j) {
      swapItemsAtIndex(list, i, j)
      i++
      j--
    }
  }
  return i
}

export const quickSort = (list, left, right) => {
  let index
  if (list.length > 1) {
    index = sortPortion(list, left, right)

    if (left < index - 1) {
      //sorting portion of the list to the left of initialElement
      quickSort(list, left, index - 1)
    }
    if (index < right) {
      //sorting portion of the list to the right of initialElement
      quickSort(list, index, right)
    }
  }
  return list
}

// end of sorting helper section

export const uniqWithQuickSort = (list) => {
  const sortedList = quickSort(list, 0, list.length - 1)
  const uniqArr = [sortedList[0]]

  for (var i = 0; i < sortedList.length - 1; i++) {
    let alreadyExists = false

    if (sortedList[i] === sortedList[i + 1]) {
      alreadyExists = true
    }

    if (!alreadyExists) {
      uniqArr.push(sortedList[i + 1])
    }
  }

  return uniqArr
}
