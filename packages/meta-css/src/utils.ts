// thing:no-export
import { isString } from "@thi.ng/checks";
import { writeText } from "@thi.ng/file-io";
import type { ILogger } from "@thi.ng/logger";
import { resolve } from "path";
import type { CompiledSpecs } from "./api";

export const maybeWriteText = (
	out: string | undefined,
	body: string | string[],
	logger: ILogger
) => {
	body = isString(body) ? body : body.join("\n");
	out ? writeText(resolve(out), body, logger) : console.log(body);
};

export const generateHeader = ({ info: { name, version } }: CompiledSpecs) =>
	`/*! ${name} v${version} - generated by thi.ng/meta-css @ ${new Date().toISOString()} */`;
