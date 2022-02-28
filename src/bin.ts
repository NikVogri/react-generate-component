#!/usr/bin/env node
import yargs from "yargs";

import { generateFileWithTemplate } from "./util/generateFileWithTemplate";
import { generateComponentDir } from "./util/generateComponentDir";
import { generateFile } from "./util/generateFile";
import { fillTemplate } from "./util/fillTemplate";

import template from "./templates/default";

(async () => {
	const args = await yargs.argv;

	if (!args.name) {
		console.error('ERROR: "name" argument is required, use --name <component-name>.');
		return;
	}

	const OUTPUT_DIR = (args.output || "./components/") as string;
	const COMPONENT_NAME = args.name as string;

	const componentDirPath = `${OUTPUT_DIR}/${COMPONENT_NAME}`;
	await generateComponentDir(componentDirPath);
	await generateFile(componentDirPath, `${COMPONENT_NAME}.module.scss`);

	const filledTemplate = fillTemplate(template, COMPONENT_NAME);
	await generateFileWithTemplate(componentDirPath, `${COMPONENT_NAME}.tsx`, filledTemplate);
})();
