// Generated from expressionDefinition.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0016\u0082\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0006\u000fL\n\u000f\r\u000f\u000e\u000fM\u0003",
    "\u0010\u0005\u0010Q\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0006",
    "\u0011V\n\u0011\r\u0011\u000e\u0011W\u0003\u0011\u0007\u0011[\n\u0011",
    "\f\u0011\u000e\u0011^\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0005\u0012c\n\u0012\u0003\u0012\u0005\u0012f\n\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0006",
    "\u0016u\n\u0016\r\u0016\u000e\u0016v\u0003\u0016\u0003\u0016\u0006\u0016",
    "{\n\u0016\r\u0016\u000e\u0016|\u0005\u0016\u007f\n\u0016\u0003\u0017",
    "\u0003\u0017\u0002\u0002\u0018\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015",
    ")\u0016+\u0002-\u0002\u0003\u0002\u0007\u0003\u00022;\u0004\u0002C\\",
    "c|\u0006\u00022;C\\aac|\u0004\u0002GGgg\u0004\u0002--//\u0002\u0088",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002",
    "\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002",
    "\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0003/\u0003",
    "\u0002\u0002\u0002\u00051\u0003\u0002\u0002\u0002\u00073\u0003\u0002",
    "\u0002\u0002\t5\u0003\u0002\u0002\u0002\u000b7\u0003\u0002\u0002\u0002",
    "\r9\u0003\u0002\u0002\u0002\u000f;\u0003\u0002\u0002\u0002\u0011=\u0003",
    "\u0002\u0002\u0002\u0013?\u0003\u0002\u0002\u0002\u0015A\u0003\u0002",
    "\u0002\u0002\u0017C\u0003\u0002\u0002\u0002\u0019E\u0003\u0002\u0002",
    "\u0002\u001bG\u0003\u0002\u0002\u0002\u001dK\u0003\u0002\u0002\u0002",
    "\u001fP\u0003\u0002\u0002\u0002!U\u0003\u0002\u0002\u0002#_\u0003\u0002",
    "\u0002\u0002%g\u0003\u0002\u0002\u0002\'i\u0003\u0002\u0002\u0002)n",
    "\u0003\u0002\u0002\u0002+t\u0003\u0002\u0002\u0002-\u0080\u0003\u0002",
    "\u0002\u0002/0\u0007*\u0002\u00020\u0004\u0003\u0002\u0002\u000212\u0007",
    "+\u0002\u00022\u0006\u0003\u0002\u0002\u000234\u0007-\u0002\u00024\b",
    "\u0003\u0002\u0002\u000256\u0007/\u0002\u00026\n\u0003\u0002\u0002\u0002",
    "78\u0007,\u0002\u00028\f\u0003\u0002\u0002\u00029:\u00071\u0002\u0002",
    ":\u000e\u0003\u0002\u0002\u0002;<\u0007@\u0002\u0002<\u0010\u0003\u0002",
    "\u0002\u0002=>\u0007>\u0002\u0002>\u0012\u0003\u0002\u0002\u0002?@\u0007",
    "?\u0002\u0002@\u0014\u0003\u0002\u0002\u0002AB\u0007.\u0002\u0002B\u0016",
    "\u0003\u0002\u0002\u0002CD\u00070\u0002\u0002D\u0018\u0003\u0002\u0002",
    "\u0002EF\u0007`\u0002\u0002F\u001a\u0003\u0002\u0002\u0002GH\u0007r",
    "\u0002\u0002HI\u0007k\u0002\u0002I\u001c\u0003\u0002\u0002\u0002JL\t",
    "\u0002\u0002\u0002KJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002",
    "MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002N\u001e\u0003\u0002",
    "\u0002\u0002OQ\u0007\u000f\u0002\u0002PO\u0003\u0002\u0002\u0002PQ\u0003",
    "\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\u0007\f\u0002\u0002S",
    " \u0003\u0002\u0002\u0002TV\t\u0003\u0002\u0002UT\u0003\u0002\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002",
    "\u0002\u0002X\\\u0003\u0002\u0002\u0002Y[\t\u0004\u0002\u0002ZY\u0003",
    "\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002",
    "\\]\u0003\u0002\u0002\u0002]\"\u0003\u0002\u0002\u0002^\\\u0003\u0002",
    "\u0002\u0002_e\u0005+\u0016\u0002`b\t\u0005\u0002\u0002ac\u0005-\u0017",
    "\u0002ba\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cd\u0003\u0002",
    "\u0002\u0002df\u0005+\u0016\u0002e`\u0003\u0002\u0002\u0002ef\u0003",
    "\u0002\u0002\u0002f$\u0003\u0002\u0002\u0002gh\u0007g\u0002\u0002h&",
    "\u0003\u0002\u0002\u0002ij\u0007&\u0002\u0002jk\u0007u\u0002\u0002k",
    "l\u0007w\u0002\u0002lm\u0007o\u0002\u0002m(\u0003\u0002\u0002\u0002",
    "no\u0007&\u0002\u0002op\u0007c\u0002\u0002pq\u0007x\u0002\u0002qr\u0007",
    "i\u0002\u0002r*\u0003\u0002\u0002\u0002su\u00042;\u0002ts\u0003\u0002",
    "\u0002\u0002uv\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003",
    "\u0002\u0002\u0002w~\u0003\u0002\u0002\u0002xz\u00070\u0002\u0002y{",
    "\u00042;\u0002zy\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|",
    "z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\u007f\u0003\u0002",
    "\u0002\u0002~x\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002",
    "\u007f,\u0003\u0002\u0002\u0002\u0080\u0081\t\u0006\u0002\u0002\u0081",
    ".\u0003\u0002\u0002\u0002\f\u0002MPW\\bev|~\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function expressionDefinitionLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

expressionDefinitionLexer.prototype = Object.create(antlr4.Lexer.prototype);
expressionDefinitionLexer.prototype.constructor = expressionDefinitionLexer;

Object.defineProperty(expressionDefinitionLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

expressionDefinitionLexer.EOF = antlr4.Token.EOF;
expressionDefinitionLexer.LPAREN = 1;
expressionDefinitionLexer.RPAREN = 2;
expressionDefinitionLexer.PLUS = 3;
expressionDefinitionLexer.MINUS = 4;
expressionDefinitionLexer.TIMES = 5;
expressionDefinitionLexer.DIV = 6;
expressionDefinitionLexer.GT = 7;
expressionDefinitionLexer.LT = 8;
expressionDefinitionLexer.EQ = 9;
expressionDefinitionLexer.COMMA = 10;
expressionDefinitionLexer.POINT = 11;
expressionDefinitionLexer.POW = 12;
expressionDefinitionLexer.PI = 13;
expressionDefinitionLexer.INT = 14;
expressionDefinitionLexer.NEWLINE = 15;
expressionDefinitionLexer.VARIABLE = 16;
expressionDefinitionLexer.SCIENTIFIC_NUMBER = 17;
expressionDefinitionLexer.EULER = 18;
expressionDefinitionLexer.SUM = 19;
expressionDefinitionLexer.AVG = 20;

expressionDefinitionLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

expressionDefinitionLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

expressionDefinitionLexer.prototype.literalNames = [ null, "'('", "')'", 
                                                     "'+'", "'-'", "'*'", 
                                                     "'/'", "'>'", "'<'", 
                                                     "'='", "','", "'.'", 
                                                     "'^'", "'pi'", null, 
                                                     null, null, null, "'e'", 
                                                     "'$sum'", "'$avg'" ];

expressionDefinitionLexer.prototype.symbolicNames = [ null, "LPAREN", "RPAREN", 
                                                      "PLUS", "MINUS", "TIMES", 
                                                      "DIV", "GT", "LT", 
                                                      "EQ", "COMMA", "POINT", 
                                                      "POW", "PI", "INT", 
                                                      "NEWLINE", "VARIABLE", 
                                                      "SCIENTIFIC_NUMBER", 
                                                      "EULER", "SUM", "AVG" ];

expressionDefinitionLexer.prototype.ruleNames = [ "LPAREN", "RPAREN", "PLUS", 
                                                  "MINUS", "TIMES", "DIV", 
                                                  "GT", "LT", "EQ", "COMMA", 
                                                  "POINT", "POW", "PI", 
                                                  "INT", "NEWLINE", "VARIABLE", 
                                                  "SCIENTIFIC_NUMBER", "EULER", 
                                                  "SUM", "AVG", "NUMBER", 
                                                  "SIGN" ];

expressionDefinitionLexer.prototype.grammarFileName = "expressionDefinition.g4";



exports.expressionDefinitionLexer = expressionDefinitionLexer;

