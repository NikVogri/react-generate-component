import { buildDirPath } from "./buildDirPath";
import { checkIfExists } from "./checkIfExists";
import { generateFile } from "./generateFile";

export const generateComponentModule = async (name: string, path: string): Promise<void> => {
	const moduleExists = checkIfExists(buildDirPath(path, `${name}.module.scss`));

	if (moduleExists) {
		console.log("❌ Component module with that name already exists, skipping...");
		return;
	}

	await generateFile(path, `${name}.module.scss`);
	console.log("✅ Component module generated");
};
