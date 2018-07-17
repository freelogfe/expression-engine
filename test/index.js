'use strict'

const expressionEngine = require('../index')

const input = '1+2*3+4^2^2+10/2+3*pi+a3+sum(1+1,a1+10)+avg(a2*20,3+6)'
const variableMap = new Map([['a1', 20], ['a2', 17], ['a3', 88]])

const result = expressionEngine.main(input, variableMap)

console.log(result)
