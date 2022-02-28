import * as fs from "fs/promises";

export const generateComponentDir = async (path: string): Promise<void> => {
	return await fs.mkdir(path);
};
