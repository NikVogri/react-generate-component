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
exports.generateComponentModule = void 0;
const buildDirPath_1 = require("./buildDirPath");
const checkIfExists_1 = require("./checkIfExists");
const generateFile_1 = require("./generateFile");
const generateComponentModule = (name, path) => __awaiter(void 0, void 0, void 0, function* () {
    const moduleExists = (0, checkIfExists_1.checkIfExists)((0, buildDirPath_1.buildDirPath)(path, `${name}.module.scss`));
    if (moduleExists) {
        console.log("❌ Component module with that name already exists, skipping...");
        return;
    }
    yield (0, generateFile_1.generateFile)(path, `${name}.module.scss`);
    console.log("✅ Component module generated");
});
exports.generateComponentModule = generateComponentModule;
