import * as fs from "fs/promises";

export const generateFileWithTemplate = async (path: string, name: string, template: string[]): Promise<void> => {
	for (const templateRow of template) {
		await fs.appendFile(`${path}/${name}`, templateRow);
	}
};
