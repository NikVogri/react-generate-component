import path from "path";

export const buildDirPath = (...args: string[]): string => {
	return path.join(...args);
};
