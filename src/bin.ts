#!/usr/bin/env node
import yargs from "yargs";

import { generateComponentDir } from "./util/generateComponentDir";
import { checkIfExists } from "./util/checkIfExists";
import { buildDirPath } from "./util/buildDirPath";
import { generateComponent } from "./util/generateComponent";
import { generateComponentModule } from "./util/generateComponentModule";

import template from "./templates/default";

(async () => {
	const args = await yargs.argv;

	if (!args.name) {
		console.error('ERROR: "name" argument is required, use --name <component-name>.');
		return;
	}

	const OUTPUT_DIR = (args.path || "./components/") as string;
	const COMPONENT_NAME = args.name as string;
	const componentDirPath = buildDirPath(process.cwd(), OUTPUT_DIR, COMPONENT_NAME);

	const directoryExists = checkIfExists(componentDirPath);
	if (!directoryExists) {
		await generateComponentDir(componentDirPath);
	}

	await generateComponent(COMPONENT_NAME, componentDirPath, template);
	await generateComponentModule(COMPONENT_NAME, componentDirPath);
})();
