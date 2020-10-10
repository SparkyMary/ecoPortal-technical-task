## ecoPortal Front End Technical Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Answers

### Question 1: MongoDB

[Please refer to the code](./src/answers/Q1_MongoDB.md).

### Question 2: OOP

[Please refer to the code](./src/answers/Q2_OOP.js). Run `npm run test` for testing those functions.

Main difference in inheritance and composition in short way might be explained as following:

- Think of `inheritance` when you can describe connection between two objects as one **IS** another one.
  Like in my example `CardWithVideo` IS a Card but with the specific method, same with `CardWithDocument`
- Think of `composition` when one object one is **PART** of another one. As in my example, CardWithVideo and CardWithDocument
  are parts of `PairOfCards`

### Question 3: Cloud Services

As a pure Front End Dev I haven't had too much exposure to use of cloud services in day-to-day activities.
For personal needs I used AWS Amplify, EC2 and S3.
At my current work some of our applications deployed to Google's App Engine.

### Question 4: Unique

[Please refer to the code](./src/answers/Q4_Uniq.js). Run `npm run test` for testing those functions.

### Question 5: Polymorphism

### Question 6: Reviewing/refactoring

```
require 'set'
class PQ
  def initialize
    @x = SortedSet.new
  end
  class El
    attr_reader :p, :x
    def initialize(p,x)
      @p = p
      @x = x
    end
    def <=>(y)
      @p <=> y.p
    end
  end
  def add(item, priority)
    @x.add(El.new(priority,item))
  end
  def deQ
    return unless item = @x.first
    @x.delete(item)
    item.x
  end
end
```

1. The very first thing that makes this piece of code less readable is the naming. It's quite difficult to get the purpose of the class by it's name PQ.
   Same with class El, that probably refers to the element.

2. Regarding the styling I would mention:

- the inconsistency in the order of arguments of `add` method,
- assumed that the priority (`p`) is a number, but there is no validation for this. Ruby returns `nil` if values are not comparable
- the code looks a little bit untidy, for example, commas and spaces are incosistent. Non consistent formatting might become a nightmare for code reviews.

### Question 7: Chains

[Please refer to the code](./src/answers/Q7_Chains.js). Run `npm run test` for testing this function.

### Question 8: JS Framework

[Live demo:](https://master.d29mejgv1hlv83.amplifyapp.com/ 'Maria Chibel Technical Task')

`npm start` to run application on localhost:3000
in integration_tests/ui/testcafe run `npm run test:develop` to run integration tests
