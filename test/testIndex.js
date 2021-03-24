const fs = require("fs");
const expression_engine = require("../index");

compute();

function compute() {
    let result = expression_engine.compute(fs.readFileSync("./resources/zhaojn.sc", "utf-8"));
}