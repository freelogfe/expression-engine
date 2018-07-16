// Generated from expressionDefinition.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by expressionDefinitionParser.

function expressionDefinitionVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

expressionDefinitionVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
expressionDefinitionVisitor.prototype.constructor = expressionDefinitionVisitor;

// Visit a parse tree produced by expressionDefinitionParser#prog.
expressionDefinitionVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#printExpr.
expressionDefinitionVisitor.prototype.visitPrintExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#blank.
expressionDefinitionVisitor.prototype.visitBlank = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#expression.
expressionDefinitionVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#multiplyingExpression.
expressionDefinitionVisitor.prototype.visitMultiplyingExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#powExpression.
expressionDefinitionVisitor.prototype.visitPowExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#signedAtom.
expressionDefinitionVisitor.prototype.visitSignedAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#built_in_function.
expressionDefinitionVisitor.prototype.visitBuilt_in_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#funcname.
expressionDefinitionVisitor.prototype.visitFuncname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#atom.
expressionDefinitionVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#scientific.
expressionDefinitionVisitor.prototype.visitScientific = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#constant.
expressionDefinitionVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionDefinitionParser#variable.
expressionDefinitionVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};



exports.expressionDefinitionVisitor = expressionDefinitionVisitor;