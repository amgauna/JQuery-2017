import { create, all } from 'mathjs'
import * as numbers from 'numbers'

// create a mathjs instance
const math = create(all)

// define new functions and variables
math.import({
  myvalue: 42,
  hello: function (name) {
    return 'hello, ' + name + '!'
  }
})

// use the imported function and variable
math.myvalue * 2               // 84
math.hello('user')             // 'hello, user!'

// import the npm module 'numbers'
// (must be installed first with `npm install numbers`)
math.import(numbers, {wrap: true})

math.fibonacci(7) // returns 13