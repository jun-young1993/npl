import { questionSync } from "../lib/cli/readlineInterface";
import Console from "../lib/consoleColor/consol-color";
import {copyFileSync, existsSync, mkdirSync, rmSync, symlinkSync, writeFileSync} from "fs";
import {
	DefaultNpmIgnore,
	JsonConfig,
	MODULE_FOLDER_NAME,
	PackageJsonValues,
	TsconfigBaseJsonValue, TsconfigCjsJsonValue,
	TsconfigJsonValue
} from "../app.config";
import * as os from "os";
import {exec, execSync} from "child_process";
import { infoFolderPath, infoFolderProjectPath } from "fuse.info";

const Create = async () => {

	Console.info("++++++++++++++++++++");
	Console.info("[CREATE NPM PROJECT]");
	Console.info("++++++++++++++++++++");

	const projectName = await questionSync(`project name(${PackageJsonValues.read("name")}): `,PackageJsonValues.read("name"));
	PackageJsonValues.update("name",projectName);


	const projectVersion = await questionSync(`project version(${PackageJsonValues.read("version")}): `,PackageJsonValues.read("version"));
	PackageJsonValues.update("version",projectVersion)

	const projectFullPath = `${infoFolderProjectPath}/${projectName}`;

	const existsProjectFolder = existsSync(projectFullPath);
	if(existsProjectFolder){
		Console.error(`[Exists Project Folder]: ${projectFullPath}`);
		process.exit(0);

	}
	
	const createProjectFolder = mkdirSync(projectFullPath,{
		recursive: true
	});
	if(createProjectFolder === undefined){
		Console.error(`[Fail Create Folder]: ${projectFullPath}`);
		process.exit(1);
	}
	Console.info(`[Create Project Folder] ${projectFullPath}`);

	const moduleSymLinkFolderPath = `${process.cwd()}/${MODULE_FOLDER_NAME}`;
	mkdirSync(moduleSymLinkFolderPath,{
		recursive: true
	});
	const moduleSymLinkProjectPath = `${moduleSymLinkFolderPath}/${projectName}`;

	symlinkSync(projectFullPath,moduleSymLinkProjectPath,"dir");
	Console.info(`[Create Project Symlink] ${moduleSymLinkProjectPath}`);

	const projectPackageJsonPath = `${moduleSymLinkProjectPath}/package.json`;
	copyFileSync(PackageJsonValues.getPath(),projectPackageJsonPath);
	PackageJsonValues.deleteFile();
	Console.info(`[Create Project Package Json] ${projectPackageJsonPath}`);

	const projectTsconfig = `${moduleSymLinkProjectPath}/tsconfig.json`;
	copyFileSync(TsconfigJsonValue.getPath(),projectTsconfig);
	TsconfigJsonValue.deleteFile();
	Console.info(`[Create Project tsconfig Json] ${projectTsconfig}`);

	const projectTsconfigBase = `${moduleSymLinkProjectPath}/tsconfig-base.json`;
	copyFileSync(TsconfigBaseJsonValue.getPath(),projectTsconfigBase);
	TsconfigBaseJsonValue.deleteFile();
	Console.info(`[Create Project tsconfig base Json] ${projectTsconfigBase}`);

	const projectTsconfigCjs = `${moduleSymLinkProjectPath}/tsconfig-cjs.json`;
	copyFileSync(TsconfigCjsJsonValue.getPath(),projectTsconfigCjs);
	TsconfigCjsJsonValue.deleteFile();
	Console.info(`[Create Project tsconfig Json] ${projectTsconfigCjs}`);

	const projectNpmIgnore = `${moduleSymLinkProjectPath}/.npmignore`;
	writeFileSync(projectNpmIgnore,DefaultNpmIgnore);
	Console.info(`[Create Project npmignore] ${projectNpmIgnore}`);

	const projectSrcFolder = `${moduleSymLinkProjectPath}/src`;
	mkdirSync(projectSrcFolder,{
		recursive: true
	});
	Console.info(`[Create Project src Folder] ${projectSrcFolder}`);

	const projectBaseIndex = `${projectSrcFolder}/index.ts`;
	writeFileSync(projectBaseIndex,`
	function Base(){
		console.log('Base Function');
	}
	
	export {
		Base
	}
	`,)
	Console.info(`[Create Project src index] ${projectBaseIndex}`);

	Console.info(`[npm install && npm run build && npm link]...`);
	const npmInstallResult = execSync("npm install",{
		cwd: moduleSymLinkProjectPath
	})
	Console.info(`[Result Npm Install]...`,npmInstallResult.toString());
	const npmRunBuildResult = execSync("npm run build",{
		cwd: moduleSymLinkProjectPath
	})
	Console.info(`[Result Build]...`,npmRunBuildResult.toString());
	const npmLinkResult = execSync("npm link",{
		cwd: moduleSymLinkProjectPath
	})
	Console.info(`[Result Link]...`,npmLinkResult.toString());


}

export default Create;