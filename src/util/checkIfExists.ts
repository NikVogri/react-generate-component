import * as fs from "fs";

export const checkIfExists = (path: string): boolean => {
	return fs.existsSync(path);
};
