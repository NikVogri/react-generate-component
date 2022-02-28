import { replaceString } from "./replaceString";

export const fillTemplate = (template: string[], replacement: string): string[] => {
	return template.map((row) => replaceString(row, /{{ComponentName}}/g, replacement));
};
