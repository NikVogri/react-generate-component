import * as fs from "fs/promises";

export const generateFile = async (path: string, filename: string, content?: string): Promise<void> => {
	await fs.writeFile(`${path}/${filename}`, content || "");
};
