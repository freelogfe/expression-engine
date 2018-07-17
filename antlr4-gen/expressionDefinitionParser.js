// Generated from expressionDefinition.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var expressionDefinitionVisitor = require('./expressionDefinitionVisitor').expressionDefinitionVisitor;

var grammarFileName = "expressionDefinition.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016h\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0006\u0002\u001c\n\u0002\r\u0002\u000e\u0002\u001d",
    "\u0003\u0003\u0003\u0003\u0005\u0003\"\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004\'\n\u0004\f\u0004\u000e\u0004*\u000b\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005/\n\u0005\f\u0005\u000e",
    "\u00052\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "7\n\u0006\f\u0006\u000e\u0006:\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007B\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bI\n\b\f\b\u000e\bL\u000b\b",
    "\u0003\b\u0003\b\u0003\t\u0005\tQ\n\t\u0003\t\u0005\tT\n\t\u0005\tV",
    "\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0005\n`\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0002\u0002\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u0002\u0005\u0003\u0002\u0005\u0006\u0003\u0002\u0007",
    "\b\u0004\u0002\u000f\u000f\u0016\u0016\u0002k\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u0004!\u0003\u0002\u0002\u0002\u0006#\u0003\u0002\u0002",
    "\u0002\b+\u0003\u0002\u0002\u0002\n3\u0003\u0002\u0002\u0002\fA\u0003",
    "\u0002\u0002\u0002\u000eC\u0003\u0002\u0002\u0002\u0010U\u0003\u0002",
    "\u0002\u0002\u0012_\u0003\u0002\u0002\u0002\u0014a\u0003\u0002\u0002",
    "\u0002\u0016c\u0003\u0002\u0002\u0002\u0018e\u0003\u0002\u0002\u0002",
    "\u001a\u001c\u0005\u0004\u0003\u0002\u001b\u001a\u0003\u0002\u0002\u0002",
    "\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u0003\u0003\u0002\u0002\u0002",
    "\u001f\"\u0005\u0006\u0004\u0002 \"\u0007\u0011\u0002\u0002!\u001f\u0003",
    "\u0002\u0002\u0002! \u0003\u0002\u0002\u0002\"\u0005\u0003\u0002\u0002",
    "\u0002#(\u0005\b\u0005\u0002$%\t\u0002\u0002\u0002%\'\u0005\b\u0005",
    "\u0002&$\u0003\u0002\u0002\u0002\'*\u0003\u0002\u0002\u0002(&\u0003",
    "\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)\u0007\u0003\u0002\u0002",
    "\u0002*(\u0003\u0002\u0002\u0002+0\u0005\n\u0006\u0002,-\t\u0003\u0002",
    "\u0002-/\u0005\n\u0006\u0002.,\u0003\u0002\u0002\u0002/2\u0003\u0002",
    "\u0002\u00020.\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u00021\t",
    "\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000238\u0005\f\u0007\u0002",
    "45\u0007\u000e\u0002\u000257\u0005\f\u0007\u000264\u0003\u0002\u0002",
    "\u00027:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002",
    "\u0002\u00029\u000b\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002",
    ";<\u0007\u0005\u0002\u0002<B\u0005\f\u0007\u0002=>\u0007\u0006\u0002",
    "\u0002>B\u0005\f\u0007\u0002?B\u0005\u000e\b\u0002@B\u0005\u0012\n\u0002",
    "A;\u0003\u0002\u0002\u0002A=\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002",
    "\u0002A@\u0003\u0002\u0002\u0002B\r\u0003\u0002\u0002\u0002CD\u0005",
    "\u0010\t\u0002DE\u0007\u0003\u0002\u0002EJ\u0005\u0006\u0004\u0002F",
    "G\u0007\f\u0002\u0002GI\u0005\u0006\u0004\u0002HF\u0003\u0002\u0002",
    "\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002",
    "\u0002\u0002KM\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MN\u0007",
    "\u0004\u0002\u0002N\u000f\u0003\u0002\u0002\u0002OQ\u0007\u0012\u0002",
    "\u0002PO\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QV\u0003\u0002",
    "\u0002\u0002RT\u0007\u0013\u0002\u0002SR\u0003\u0002\u0002\u0002ST\u0003",
    "\u0002\u0002\u0002TV\u0003\u0002\u0002\u0002UP\u0003\u0002\u0002\u0002",
    "US\u0003\u0002\u0002\u0002V\u0011\u0003\u0002\u0002\u0002W`\u0005\u0014",
    "\u000b\u0002X`\u0005\u0016\f\u0002YZ\u0007\u0003\u0002\u0002Z[\u0005",
    "\u0006\u0004\u0002[\\\u0007\u0004\u0002\u0002\\`\u0003\u0002\u0002\u0002",
    "]`\u0007\u0010\u0002\u0002^`\u0005\u0018\r\u0002_W\u0003\u0002\u0002",
    "\u0002_X\u0003\u0002\u0002\u0002_Y\u0003\u0002\u0002\u0002_]\u0003\u0002",
    "\u0002\u0002_^\u0003\u0002\u0002\u0002`\u0013\u0003\u0002\u0002\u0002",
    "ab\u0007\u0015\u0002\u0002b\u0015\u0003\u0002\u0002\u0002cd\t\u0004",
    "\u0002\u0002d\u0017\u0003\u0002\u0002\u0002ef\u0007\u0014\u0002\u0002",
    "f\u0019\u0003\u0002\u0002\u0002\r\u001d!(08AJPSU_"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'+'", "'-'", "'*'", "'/'", "'>'", 
                     "'<'", "'='", "','", "'.'", "'^'", "'pi'", null, null, 
                     null, null, null, null, "'e'" ];

var symbolicNames = [ null, "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", 
                      "DIV", "GT", "LT", "EQ", "COMMA", "POINT", "POW", 
                      "PI", "INT", "NEWLINE", "SUM", "AVG", "VARIABLE", 
                      "SCIENTIFIC_NUMBER", "EULER" ];

var ruleNames =  [ "prog", "stat", "expression", "multiplyingExpression", 
                   "powExpression", "signedAtom", "built_in_function", "funcname", 
                   "atom", "scientific", "constant", "variable" ];

function expressionDefinitionParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

expressionDefinitionParser.prototype = Object.create(antlr4.Parser.prototype);
expressionDefinitionParser.prototype.constructor = expressionDefinitionParser;

Object.defineProperty(expressionDefinitionParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

expressionDefinitionParser.EOF = antlr4.Token.EOF;
expressionDefinitionParser.LPAREN = 1;
expressionDefinitionParser.RPAREN = 2;
expressionDefinitionParser.PLUS = 3;
expressionDefinitionParser.MINUS = 4;
expressionDefinitionParser.TIMES = 5;
expressionDefinitionParser.DIV = 6;
expressionDefinitionParser.GT = 7;
expressionDefinitionParser.LT = 8;
expressionDefinitionParser.EQ = 9;
expressionDefinitionParser.COMMA = 10;
expressionDefinitionParser.POINT = 11;
expressionDefinitionParser.POW = 12;
expressionDefinitionParser.PI = 13;
expressionDefinitionParser.INT = 14;
expressionDefinitionParser.NEWLINE = 15;
expressionDefinitionParser.SUM = 16;
expressionDefinitionParser.AVG = 17;
expressionDefinitionParser.VARIABLE = 18;
expressionDefinitionParser.SCIENTIFIC_NUMBER = 19;
expressionDefinitionParser.EULER = 20;

expressionDefinitionParser.RULE_prog = 0;
expressionDefinitionParser.RULE_stat = 1;
expressionDefinitionParser.RULE_expression = 2;
expressionDefinitionParser.RULE_multiplyingExpression = 3;
expressionDefinitionParser.RULE_powExpression = 4;
expressionDefinitionParser.RULE_signedAtom = 5;
expressionDefinitionParser.RULE_built_in_function = 6;
expressionDefinitionParser.RULE_funcname = 7;
expressionDefinitionParser.RULE_atom = 8;
expressionDefinitionParser.RULE_scientific = 9;
expressionDefinitionParser.RULE_constant = 10;
expressionDefinitionParser.RULE_variable = 11;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.ProgContext = ProgContext;

expressionDefinitionParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, expressionDefinitionParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 24;
            this.stat();
            this.state = 27; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << expressionDefinitionParser.LPAREN) | (1 << expressionDefinitionParser.PLUS) | (1 << expressionDefinitionParser.MINUS) | (1 << expressionDefinitionParser.PI) | (1 << expressionDefinitionParser.INT) | (1 << expressionDefinitionParser.NEWLINE) | (1 << expressionDefinitionParser.SUM) | (1 << expressionDefinitionParser.AVG) | (1 << expressionDefinitionParser.VARIABLE) | (1 << expressionDefinitionParser.SCIENTIFIC_NUMBER) | (1 << expressionDefinitionParser.EULER))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;


 
StatContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BlankContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlankContext.prototype = Object.create(StatContext.prototype);
BlankContext.prototype.constructor = BlankContext;

expressionDefinitionParser.BlankContext = BlankContext;

BlankContext.prototype.NEWLINE = function() {
    return this.getToken(expressionDefinitionParser.NEWLINE, 0);
};
BlankContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitBlank(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrintExprContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintExprContext.prototype = Object.create(StatContext.prototype);
PrintExprContext.prototype.constructor = PrintExprContext;

expressionDefinitionParser.PrintExprContext = PrintExprContext;

PrintExprContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PrintExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitPrintExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



expressionDefinitionParser.StatContext = StatContext;

expressionDefinitionParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, expressionDefinitionParser.RULE_stat);
    try {
        this.state = 31;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expressionDefinitionParser.LPAREN:
        case expressionDefinitionParser.PLUS:
        case expressionDefinitionParser.MINUS:
        case expressionDefinitionParser.PI:
        case expressionDefinitionParser.INT:
        case expressionDefinitionParser.SUM:
        case expressionDefinitionParser.AVG:
        case expressionDefinitionParser.VARIABLE:
        case expressionDefinitionParser.SCIENTIFIC_NUMBER:
        case expressionDefinitionParser.EULER:
            localctx = new PrintExprContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 29;
            this.expression();
            break;
        case expressionDefinitionParser.NEWLINE:
            localctx = new BlankContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 30;
            this.match(expressionDefinitionParser.NEWLINE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.multiplyingExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultiplyingExpressionContext);
    } else {
        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
    }
};

ExpressionContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expressionDefinitionParser.PLUS);
    } else {
        return this.getToken(expressionDefinitionParser.PLUS, i);
    }
};


ExpressionContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expressionDefinitionParser.MINUS);
    } else {
        return this.getToken(expressionDefinitionParser.MINUS, i);
    }
};


ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.ExpressionContext = ExpressionContext;

expressionDefinitionParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, expressionDefinitionParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.multiplyingExpression();
        this.state = 38;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 34;
                _la = this._input.LA(1);
                if(!(_la===expressionDefinitionParser.PLUS || _la===expressionDefinitionParser.MINUS)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 35;
                this.multiplyingExpression(); 
            }
            this.state = 40;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultiplyingExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_multiplyingExpression;
    return this;
}

MultiplyingExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyingExpressionContext.prototype.constructor = MultiplyingExpressionContext;

MultiplyingExpressionContext.prototype.powExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PowExpressionContext);
    } else {
        return this.getTypedRuleContext(PowExpressionContext,i);
    }
};

MultiplyingExpressionContext.prototype.TIMES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expressionDefinitionParser.TIMES);
    } else {
        return this.getToken(expressionDefinitionParser.TIMES, i);
    }
};


MultiplyingExpressionContext.prototype.DIV = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expressionDefinitionParser.DIV);
    } else {
        return this.getToken(expressionDefinitionParser.DIV, i);
    }
};


MultiplyingExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitMultiplyingExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.MultiplyingExpressionContext = MultiplyingExpressionContext;

expressionDefinitionParser.prototype.multiplyingExpression = function() {

    var localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, expressionDefinitionParser.RULE_multiplyingExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.powExpression();
        this.state = 46;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===expressionDefinitionParser.TIMES || _la===expressionDefinitionParser.DIV) {
            this.state = 42;
            _la = this._input.LA(1);
            if(!(_la===expressionDefinitionParser.TIMES || _la===expressionDefinitionParser.DIV)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 43;
            this.powExpression();
            this.state = 48;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PowExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_powExpression;
    return this;
}

PowExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowExpressionContext.prototype.constructor = PowExpressionContext;

PowExpressionContext.prototype.signedAtom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SignedAtomContext);
    } else {
        return this.getTypedRuleContext(SignedAtomContext,i);
    }
};

PowExpressionContext.prototype.POW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expressionDefinitionParser.POW);
    } else {
        return this.getToken(expressionDefinitionParser.POW, i);
    }
};


PowExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitPowExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.PowExpressionContext = PowExpressionContext;

expressionDefinitionParser.prototype.powExpression = function() {

    var localctx = new PowExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, expressionDefinitionParser.RULE_powExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.signedAtom();
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===expressionDefinitionParser.POW) {
            this.state = 50;
            this.match(expressionDefinitionParser.POW);
            this.state = 51;
            this.signedAtom();
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SignedAtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_signedAtom;
    return this;
}

SignedAtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignedAtomContext.prototype.constructor = SignedAtomContext;

SignedAtomContext.prototype.PLUS = function() {
    return this.getToken(expressionDefinitionParser.PLUS, 0);
};

SignedAtomContext.prototype.signedAtom = function() {
    return this.getTypedRuleContext(SignedAtomContext,0);
};

SignedAtomContext.prototype.MINUS = function() {
    return this.getToken(expressionDefinitionParser.MINUS, 0);
};

SignedAtomContext.prototype.built_in_function = function() {
    return this.getTypedRuleContext(Built_in_functionContext,0);
};

SignedAtomContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

SignedAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitSignedAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.SignedAtomContext = SignedAtomContext;

expressionDefinitionParser.prototype.signedAtom = function() {

    var localctx = new SignedAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, expressionDefinitionParser.RULE_signedAtom);
    try {
        this.state = 63;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.match(expressionDefinitionParser.PLUS);
            this.state = 58;
            this.signedAtom();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 59;
            this.match(expressionDefinitionParser.MINUS);
            this.state = 60;
            this.signedAtom();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 61;
            this.built_in_function();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 62;
            this.atom();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Built_in_functionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_built_in_function;
    return this;
}

Built_in_functionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Built_in_functionContext.prototype.constructor = Built_in_functionContext;

Built_in_functionContext.prototype.funcname = function() {
    return this.getTypedRuleContext(FuncnameContext,0);
};

Built_in_functionContext.prototype.LPAREN = function() {
    return this.getToken(expressionDefinitionParser.LPAREN, 0);
};

Built_in_functionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Built_in_functionContext.prototype.RPAREN = function() {
    return this.getToken(expressionDefinitionParser.RPAREN, 0);
};

Built_in_functionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expressionDefinitionParser.COMMA);
    } else {
        return this.getToken(expressionDefinitionParser.COMMA, i);
    }
};


Built_in_functionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitBuilt_in_function(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.Built_in_functionContext = Built_in_functionContext;

expressionDefinitionParser.prototype.built_in_function = function() {

    var localctx = new Built_in_functionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, expressionDefinitionParser.RULE_built_in_function);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.funcname();
        this.state = 66;
        this.match(expressionDefinitionParser.LPAREN);
        this.state = 67;
        this.expression();
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===expressionDefinitionParser.COMMA) {
            this.state = 68;
            this.match(expressionDefinitionParser.COMMA);
            this.state = 69;
            this.expression();
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 75;
        this.match(expressionDefinitionParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_funcname;
    return this;
}

FuncnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncnameContext.prototype.constructor = FuncnameContext;

FuncnameContext.prototype.SUM = function() {
    return this.getToken(expressionDefinitionParser.SUM, 0);
};

FuncnameContext.prototype.AVG = function() {
    return this.getToken(expressionDefinitionParser.AVG, 0);
};

FuncnameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitFuncname(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.FuncnameContext = FuncnameContext;

expressionDefinitionParser.prototype.funcname = function() {

    var localctx = new FuncnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, expressionDefinitionParser.RULE_funcname);
    var _la = 0; // Token type
    try {
        this.state = 83;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===expressionDefinitionParser.SUM) {
                this.state = 77;
                this.match(expressionDefinitionParser.SUM);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 81;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===expressionDefinitionParser.AVG) {
                this.state = 80;
                this.match(expressionDefinitionParser.AVG);
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.scientific = function() {
    return this.getTypedRuleContext(ScientificContext,0);
};

AtomContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

AtomContext.prototype.LPAREN = function() {
    return this.getToken(expressionDefinitionParser.LPAREN, 0);
};

AtomContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AtomContext.prototype.RPAREN = function() {
    return this.getToken(expressionDefinitionParser.RPAREN, 0);
};

AtomContext.prototype.INT = function() {
    return this.getToken(expressionDefinitionParser.INT, 0);
};

AtomContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.AtomContext = AtomContext;

expressionDefinitionParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, expressionDefinitionParser.RULE_atom);
    try {
        this.state = 93;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expressionDefinitionParser.SCIENTIFIC_NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            this.scientific();
            break;
        case expressionDefinitionParser.PI:
        case expressionDefinitionParser.EULER:
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.constant();
            break;
        case expressionDefinitionParser.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 87;
            this.match(expressionDefinitionParser.LPAREN);
            this.state = 88;
            this.expression();
            this.state = 89;
            this.match(expressionDefinitionParser.RPAREN);
            break;
        case expressionDefinitionParser.INT:
            this.enterOuterAlt(localctx, 4);
            this.state = 91;
            this.match(expressionDefinitionParser.INT);
            break;
        case expressionDefinitionParser.VARIABLE:
            this.enterOuterAlt(localctx, 5);
            this.state = 92;
            this.variable();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ScientificContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_scientific;
    return this;
}

ScientificContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScientificContext.prototype.constructor = ScientificContext;

ScientificContext.prototype.SCIENTIFIC_NUMBER = function() {
    return this.getToken(expressionDefinitionParser.SCIENTIFIC_NUMBER, 0);
};

ScientificContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitScientific(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.ScientificContext = ScientificContext;

expressionDefinitionParser.prototype.scientific = function() {

    var localctx = new ScientificContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, expressionDefinitionParser.RULE_scientific);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.match(expressionDefinitionParser.SCIENTIFIC_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function() {
    return this.getToken(expressionDefinitionParser.PI, 0);
};

ConstantContext.prototype.EULER = function() {
    return this.getToken(expressionDefinitionParser.EULER, 0);
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.ConstantContext = ConstantContext;

expressionDefinitionParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, expressionDefinitionParser.RULE_constant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        _la = this._input.LA(1);
        if(!(_la===expressionDefinitionParser.PI || _la===expressionDefinitionParser.EULER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionDefinitionParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.VARIABLE = function() {
    return this.getToken(expressionDefinitionParser.VARIABLE, 0);
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionDefinitionVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionDefinitionParser.VariableContext = VariableContext;

expressionDefinitionParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, expressionDefinitionParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(expressionDefinitionParser.VARIABLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.expressionDefinitionParser = expressionDefinitionParser;
