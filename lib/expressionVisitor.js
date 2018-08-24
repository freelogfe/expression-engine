'use strict'

const paramMap = Symbol('expression#paramMap')
const {TerminalNodeImpl} = require('antlr4/tree/Tree')
const {expressionDefinitionVisitor} = require('../antlr4-gen/expressionDefinitionVisitor')


module.exports = class MyExpressionVisitor extends expressionDefinitionVisitor {

    constructor() {
        super()
        this.result = null
        this.errorMsg = null
        this[paramMap] = new Map()
    }

    /**
     * 变量赋值
     * @param variableName
     * @param variableValue
     */
    setVariable(variableName, variableValue) {
        if (!/^[a-z]+[a-zA-Z0-9_]*$/.test(variableName)) {
            throw new Error('variableName is error format')
        }
        if (!/^[0-9]+(\.[0-9]+)?$/.test(variableValue)) {
            throw new Error('variableValue is error format')
        }
        this[paramMap].set(variableName, variableValue)
    }


    /**
     * 主入口
     * @param ctx
     */
    visitProg(ctx) {
        try {
            if (ctx.children.length !== 1) {
                throw new Error('表达式格式错误')
            }
            this.result = this.visit(ctx.stat(0))
        } catch (e) {
            this.errorMsg = e
        }
    }


    visitPrintExpr(ctx) {
        return this.visit(ctx.expression())
    }


    /**
     * 加法减法操作
     * @param ctx
     * @returns {*}
     */
    visitExpression(ctx) {

        var multiplyingExpressions = ctx.multiplyingExpression()
        var result = this.visit(multiplyingExpressions[0])

        if (multiplyingExpressions.length === 1) {
            return result
        }

        const symbolicNames = ctx.parser.symbolicNames
        const options = ctx.children.filter(x => x instanceof TerminalNodeImpl)

        multiplyingExpressions.splice(1).forEach((item, index) => {
            const op = symbolicNames[options[index].symbol.type]
            if (op === 'PLUS') {
                result = result + this.visit(item)
            }
            else {
                result = result - this.visit(item)
            }
        })

        return result
    }


    /**
     * 乘法除法操作
     * @param ctx
     * @returns {*}
     */
    visitMultiplyingExpression(ctx) {

        var powExpressions = ctx.powExpression()
        var result = this.visit(powExpressions[0])

        if (powExpressions.length === 1) {
            return result
        }

        const symbolicNames = ctx.parser.symbolicNames
        const options = ctx.children.filter(x => x instanceof TerminalNodeImpl)

        powExpressions.splice(1).forEach((item, index) => {
            const op = symbolicNames[options[index].symbol.type]
            if (op === 'TIMES') {
                result = result * this.visit(item)
            }
            else {
                result = result / this.visit(item)
            }
        })

        return result
    }


    /**
     * 次幂计算
     * @param ctx
     * @returns {*}
     */
    visitPowExpression(ctx) {

        var signedAtoms = ctx.signedAtom()
        var result = this.visit(signedAtoms[0])

        if (signedAtoms.length === 1) {
            return result
        }

        signedAtoms.splice(1).forEach(item => {
            const power = this.visit(item)
            result = Math.pow(result, power)
        })

        return result
    }


    /**
     * 处理带有符号(正负以及内置函数)
     * @param ctx
     * @returns {*}
     */
    visitSignedAtom(ctx) {
        if (ctx.atom()) {
            return this.visit(ctx.atom())
        }
        if (ctx.built_in_function()) {
            return this.visit(ctx.built_in_function())
        }

        return this.visit(ctx.signedAtom(0)) * (ctx.PLUS() ? 1 : -1)
    }


    /**
     * 处理内置函数(sum)
     * @param ctx
     */
    visitBuilt_in_function(ctx) {

        const funcName = this.visit(ctx.funcname())
        const expressions = ctx.expression()
        switch (funcName) {
            case 'SUM':
                return expressions.reduce((acc, expression) => acc + this.visit(expression), 0)
            case 'AVG':
                return expressions.reduce((acc, expression) => acc + this.visit(expression), 0) / expressions.length
            default:
                throw new Error(`Unsupported Function:${funcName}`)
        }
    }


    /**
     * 处理内置函数操作符(目前支持sum,avg)
     * @param ctx
     * @returns {string|*}
     */
    visitFuncname(ctx) {
        return ctx.parser.symbolicNames[ctx.start.type]
    }


    /**
     * 处理单一因数(或表达式)
     * @param ctx
     * @returns {*}
     */
    visitAtom(ctx) {
        if (ctx.expression()) {
            return this.visit(ctx.expression(0))
        }
        //int是系统内置
        if (ctx.INT()) {
            return parseInt(ctx.INT().getText())
        }
        return this.visitChildren(ctx)[0];
    }


    /**
     * 科学计数e转换
     * @param ctx
     * @returns {number}
     */
    visitScientific(ctx) {
        const scientificNumberStr = ctx.SCIENTIFIC_NUMBER().getText()
        return parseFloat(scientificNumberStr)
    }


    /**
     * 常量(PI和EULER)
     * @param ctx
     * @returns {number}
     */
    visitConstant(ctx) {
        return ctx.PI() ? Math.PI : Math.E
    }


    /**
     * 变量处理(需要与函数定义一起实现)
     * @param ctx
     * @returns {number}
     */
    visitVariable(ctx) {

        const variableName = ctx.VARIABLE().getText()

        if (this[paramMap].has(variableName)) {
            return this[paramMap].get(variableName)
        }

        throw new Error(`Undeclared variable :${variableName}`)
    }
}

