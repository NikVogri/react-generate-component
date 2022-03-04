import { buildDirPath } from "./buildDirPath";
import { checkIfExists } from "./checkIfExists";
import { fillTemplate } from "./fillTemplate";
import { generateFileWithTemplate } from "./generateFileWithTemplate";

export const generateComponent = async (name: string, path: string, template: string[]): Promise<void> => {
	const componentFileExists = checkIfExists(buildDirPath(path, `${name}.tsx`));

	if (componentFileExists) {
		console.log("❌ Component with that name already exists, skipping...");
		return;
	}

	const filledTemplate = fillTemplate(template, name);
	await generateFileWithTemplate(path, `${name}.tsx`, filledTemplate);
	console.log("✅ Component generated");
};
