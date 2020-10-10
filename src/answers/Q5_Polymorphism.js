// Number

class Number {
  constructor(value) {
    this.value = value
  }
  add(val) {
    return this.value + val
  }
}

class Integer extends Number {
  constructor(value) {
    super(parseInt(value))
  }
  add(val) {
    return this.value + parseInt(val)
  }
}

class Double extends Number {
  constructor(value) {
    super(value)
  }
}

const int = new Integer(4.7)
const double = new Double(4.7)

int.add(2.3) // ==> 6
double.add(2.3) // ==> 7.0000000008

// Example of polymorphism of adding operator

// Adding numbers
const sum = 1 + 1 //  sum === 2

// Adding strings
const sum = 'Hello' + ' ' + 'World' // sum === 'Hello World'

// Adding array to Array in Ruby but not in JS
const sum = [2, 3] + [4, 5] // sum === [2,3,4,5]

// Adding number or string to Array in JS
const sum = [2, 3] + 1 + 'me' // sum === '2,31me'
