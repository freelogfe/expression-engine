'use strict'

const antlr4 = require("antlr4");
const gen_dir = "./gen";
const ExpressionDefinitionLexer = require(`${gen_dir}/ExpressionDefinitionLexer`).ExpressionDefinitionLexer;
const ExpressionDefinitionParser = require(`${gen_dir}/ExpressionDefinitionParser`).ExpressionDefinitionParser;
const ExpressionDefinitionCustomListener = require("./ExpressionDefinitionCustomListener").ExpressionDefinitionCustomListener;

exports.compute =function (content) {

    let chars = new antlr4.InputStream(content);

    let lexer = new ExpressionDefinitionLexer(chars);
    let stream = new antlr4.CommonTokenStream(lexer);
    let parser = new ExpressionDefinitionParser(stream);
    let listener = new ExpressionDefinitionCustomListener();
    parser.addParseListener(listener);
    // 关闭恢复机制
    parser._errHandler = new antlr4.error.BailErrorStrategy();

    let tree = parser.prog();
}