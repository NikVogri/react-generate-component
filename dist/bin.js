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
const generateComponentDir_1 = require("./util/generateComponentDir");
const checkIfExists_1 = require("./util/checkIfExists");
const buildDirPath_1 = require("./util/buildDirPath");
const generateComponent_1 = require("./util/generateComponent");
const generateComponentModule_1 = require("./util/generateComponentModule");
const default_1 = __importDefault(require("./templates/default"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const args = yield yargs_1.default.argv;
    if (!args.name) {
        console.error('ERROR: "name" argument is required, use --name <component-name>.');
        return;
    }
    const OUTPUT_DIR = (args.path || "./components/");
    const COMPONENT_NAME = args.name;
    const componentDirPath = (0, buildDirPath_1.buildDirPath)(process.cwd(), OUTPUT_DIR, COMPONENT_NAME);
    const directoryExists = (0, checkIfExists_1.checkIfExists)(componentDirPath);
    if (!directoryExists) {
        yield (0, generateComponentDir_1.generateComponentDir)(componentDirPath);
    }
    yield (0, generateComponent_1.generateComponent)(COMPONENT_NAME, componentDirPath, default_1.default);
    yield (0, generateComponentModule_1.generateComponentModule)(COMPONENT_NAME, componentDirPath);
}))();
