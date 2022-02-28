"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillTemplate = void 0;
const replaceString_1 = require("./replaceString");
const fillTemplate = (template, replacement) => {
    return template.map((row) => (0, replaceString_1.replaceString)(row, /{{ComponentName}}/g, replacement));
};
exports.fillTemplate = fillTemplate;
