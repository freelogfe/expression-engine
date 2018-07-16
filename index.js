'use strict'

const antlr4 = require('antlr4/index')
const ExpressionVisitor = require('./lib/expressionVisitor')
const ExpressionLexer = require('./antlr4-gen/expressionDefinitionLexer')
const ExpressionParser = require('./antlr4-gen/expressionDefinitionParser')

module.exports = {

    /**
     * 主入口
     * @param input
     */
    main(input, variableMap) {

        const chars = new antlr4.InputStream(input);
        const lexer = new ExpressionLexer.expressionDefinitionLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ExpressionParser.expressionDefinitionParser(tokens);
        parser.buildParseTrees = true;

        const tree = parser.prog()
        const myExpressionVisitor = new ExpressionVisitor()

        if (variableMap) {
            for (let [key, value] of variableMap.entries()) {
                myExpressionVisitor.setVariable(key, value)
            }
        }

        myExpressionVisitor.visit(tree)

        return myExpressionVisitor
    }
}


//antlr4 Hello.g4
//javac Hello*.java
//grun Hello prog -gui < test/test.policy

//直接生成JS文件
//antlr4 -Dlanguage=JavaScript Hello.g4 -no-listener -visitor -o gen