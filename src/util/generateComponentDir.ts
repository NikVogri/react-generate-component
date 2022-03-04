import * as fs from "fs/promises";

export const generateComponentDir = async (path: string): Promise<void> => {
	await fs.mkdir(path, { recursive: true });
};
