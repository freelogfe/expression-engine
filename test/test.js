"use strict"

const path = require('path');
const fs = require("fs");
const antlr4 = require("antlr4");
const gen_dir = "../gen";
const ExpressionDefinitionLexer = require(`${gen_dir}/ExpressionDefinitionLexer`).ExpressionDefinitionLexer;
const ExpressionDefinitionParser = require(`${gen_dir}/ExpressionDefinitionParser`).ExpressionDefinitionParser;
const ExpressionDefinitionCustomListener = require("../ExpressionDefinitionCustomListener").ExpressionDefinitionCustomListener;

main();

function main() {
    let input = fs.readFileSync("./resources/zhaojn.sc", "utf-8");
    let chars = new antlr4.InputStream(input);

    let lexer = new ExpressionDefinitionLexer(chars);
    let stream = new antlr4.CommonTokenStream(lexer);
    let parser = new ExpressionDefinitionParser(stream);
    let listener = new ExpressionDefinitionCustomListener();
    parser.addParseListener(listener);
    // 关闭恢复机制
    parser._errHandler = new antlr4.error.BailErrorStrategy();

    let tree = parser.prog();

    console.log(listener.expressions);
}