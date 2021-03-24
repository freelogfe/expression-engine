const gen_dir = "./gen";
const ExpressionDefinitionParser = require(`${gen_dir}/ExpressionDefinitionParser`).ExpressionDefinitionParser;
const ExpressionDefinitionListener = require('./gen/ExpressionDefinitionListener').ExpressionDefinitionListener;
const Decimal = require('decimal.js').Decimal;

class ExpressionDefinitionCustomListener extends ExpressionDefinitionListener {

    constructor() {
        super();

        this.values = new Map();
        this.expressions = new Map();
    }

    exitPrintExpr(ctx) {
        this.expressions.set(ctx.getText(), this.getValue(ctx.expression()).toFixed(2));
    }

    exitCalculatePow(ctx) {
        let ctxA = ctx.expression(0);
        let ctxB = ctx.expression(1);
        let a = this.getValue(ctxA);
        let b = this.getValue(ctxB);
        if (a != null && b != null) {
            this.setValue(ctx, a.pow(b));
        }
    }

    exitCalculatePlu(ctx) {
        let ctxA = ctx.expression(0);
        let ctxB = ctx.expression(1);
        let a = this.getValue(ctxA);
        let b = this.getValue(ctxB);
        if (a != null && b != null) {
            this.setValue(ctx, ctx.op.type === ExpressionDefinitionParser.PLUS ? a.add(b) : a.sub(b));
        }
    }

    exitCalculateTim(ctx) {
        let ctxA = ctx.expression(0);
        let ctxB = ctx.expression(1);
        let a = this.getValue(ctxA);
        let b = this.getValue(ctxB);
        if (a != null && b != null) {
            this.setValue(ctx, ctx.op.type === ExpressionDefinitionParser.TIMES ? a.mul(b) : a.div(b));
        }
    }

    exitCalculateSign(ctx) {
        this.setValue(ctx, this.getValue(ctx.signedAtom()));
    }

    exitSigned4Self(ctx) {
        this.setValue(ctx, ctx.op.type === ExpressionDefinitionParser.PLUS ? this.getValue(ctx.signedAtom()) : new Decimal(0).sub(this.getValue(ctx.signedAtom())));
    }

    exitSigned4Function(ctx) {
        this.setValue(ctx, this.getValue(ctx.built_in_function()));
    }

    exitSigned4Atom(ctx) {
        this.setValue(ctx, this.getValue(ctx.atom()));
    }

    exitBuilt_in_function(ctx) {
        let args = ctx.expression().map(node => {
            return this.getValue(node);
        });
        let name = ctx.funcname().getText();
        switch (name) {
            case "sum":
                this.setValue(ctx, this.sum(args));
                break;
            case "avg":
                this.setValue(ctx, this.avg(args));
                break;
        }
    }

    exitAtom4Scientific(ctx) {
        this.setValue(ctx, this.getValue(ctx.scientific()));
    }

    exitAtom4Constant(ctx) {
        this.setValue(ctx, this.getValue(ctx.constant()));
    }

    exitAtom4Expression(ctx) {
        this.setValue(ctx, this.getValue(ctx.expression()));
    }

    exitScientific(ctx) {
        this.setValue(ctx, new Decimal(ctx.getText()));
    }

    exitConstant(ctx) {
        let value = null;
        if (ctx.PI() != null) {
            value = new Decimal(Math.PI);
        } else if (ctx.EULER() != null) {
            value = new Decimal(Math.E);
        }
        if (value == null) {
            throw new Error("违法的参数异常");
        } else {
            this.setValue(ctx, value);
        }
    }

    setValue(node, value) {
        this.values.set(node, value);
    }

    getValue(node) {
        return this.values.get(node);
    }

    sum(args) {
        return args.reduce((a, b) => a.add(b));
    }

    avg(args) {
        return this.sum(args).div(new Decimal(args.length));
    }
}

exports.ExpressionDefinitionCustomListener = ExpressionDefinitionCustomListener;