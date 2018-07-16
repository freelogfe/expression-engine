'use strict'

const antlr4 = require('antlr4/index');

// const HelloLexer = require('../gen/HelloLexer')
// const HelloParser = require('../gen/HelloParser')
// const MyHelloVisitor = require('./MyHelloVisitor')

const ExpressionLexer = require('../gen/expressionDefinitionLexer')
const ExpressionParser = require('../gen/expressionDefinitionParser')
const MyExpressionVisitor = require('./MyExpressionVisitor')


function testHello() {

    var input = '(1+1+2+3*3)+(1+1+2+3*3)\
    +(3-3)+10/2+a\n'

    var chars = new antlr4.InputStream(input);
    var lexer = new HelloLexer.HelloLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new HelloParser.HelloParser(tokens);
    parser.buildParseTrees = true;

    var tree = parser.prog()
    var myVisitor = new MyHelloVisitor()

    myVisitor.visit(tree)

    console.log(`${input}的计算结果是:${myVisitor.value}`.replace('\n', ''))
}

function testExpression() {

    var input = '$sum(1+2,3+4)^2*pi*1'

    var chars = new antlr4.InputStream(input);
    var lexer = new ExpressionLexer.expressionDefinitionLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new ExpressionParser.expressionDefinitionParser(tokens);
    parser.buildParseTrees = true;

    var tree = parser.prog()
    var myExpressionVisitor = new MyExpressionVisitor()

    myExpressionVisitor.setVariable('a1', 12)
    myExpressionVisitor.setVariable('a3', 29)

    myExpressionVisitor.visit(tree)

    console.log(`${input}计算结果:${myExpressionVisitor.result}`)

    if (myExpressionVisitor.errorMsg) {
        console.error(myExpressionVisitor.errorMsg)
    }
}

testExpression()

//antlr4 Hello.g4
//javac Hello*.java
//grun Hello prog -gui < test/test.policy

//直接生成JS文件
//antlr4 -Dlanguage=JavaScript Hello.g4 -no-listener -visitor -o gen