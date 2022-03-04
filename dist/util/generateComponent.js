"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateComponent = void 0;
const buildDirPath_1 = require("./buildDirPath");
const checkIfExists_1 = require("./checkIfExists");
const fillTemplate_1 = require("./fillTemplate");
const generateFileWithTemplate_1 = require("./generateFileWithTemplate");
const generateComponent = (name, path, template) => __awaiter(void 0, void 0, void 0, function* () {
    const componentFileExists = (0, checkIfExists_1.checkIfExists)((0, buildDirPath_1.buildDirPath)(path, `${name}.tsx`));
    if (componentFileExists) {
        console.log("❌ Component with that name already exists, skipping...");
        return;
    }
    const filledTemplate = (0, fillTemplate_1.fillTemplate)(template, name);
    yield (0, generateFileWithTemplate_1.generateFileWithTemplate)(path, `${name}.tsx`, filledTemplate);
    console.log("✅ Component generated");
});
exports.generateComponent = generateComponent;
