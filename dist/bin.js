#!/usr/bin/env node
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const generateFileWithTemplate_1 = require("./util/generateFileWithTemplate");
const generateComponentDir_1 = require("./util/generateComponentDir");
const generateFile_1 = require("./util/generateFile");
const fillTemplate_1 = require("./util/fillTemplate");
const default_1 = __importDefault(require("./templates/default"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const args = yield yargs_1.default.argv;
    if (!args.name) {
        console.error('ERROR: "name" argument is required, use --name <component-name>.');
        return;
    }
    const OUTPUT_DIR = (args.output || "./components/");
    const COMPONENT_NAME = args.name;
    const componentDirPath = `${OUTPUT_DIR}/${COMPONENT_NAME}`;
    yield (0, generateComponentDir_1.generateComponentDir)(componentDirPath);
    yield (0, generateFile_1.generateFile)(componentDirPath, `${COMPONENT_NAME}.module.scss`);
    const filledTemplate = (0, fillTemplate_1.fillTemplate)(default_1.default, COMPONENT_NAME);
    yield (0, generateFileWithTemplate_1.generateFileWithTemplate)(componentDirPath, `${COMPONENT_NAME}.tsx`, filledTemplate);
}))();
