import { spawnSync, execSync } from "child_process";
import readlineInterface, { questionSync } from "../lib/cli/readlineInterface";
import Console from "../lib/consoleColor/consol-color";
import { existsSync, mkdirSync } from "fs";
import { APP_NAME } from "../config";
const Create = async () => {
	console.log(process.pid);
	console.log(process.platform);
	console.log(process.title)
	console.log(process.execPath);
	Console.info("++++++++++++++++++++++");
	Console.info("+[CREATE NPM PROJECT]+");
	Console.info("++++++++++++++++++++++");

	const packageJson = {
		"name": "no name",
		"version": "1.0.0",
		"engines": {},
		"files": [
			"dist"
		],
		"keywords": [],
		"author": "",
		"license": "",
		"bugs": {
			"url": ""
		},
		"devDependencies": {
			"@types/node": "^20.12.7",
			"typescript": "^5.4.5"
		}
	}

	const projectName = await questionSync(`project name(${packageJson.name}): `,packageJson.name);
	packageJson.name = projectName;

	const projectVersion = await questionSync(`project version(${packageJson.version}): `,packageJson.version);
	packageJson.version = projectVersion;

	const projectFullPath = `${process.env.TEMP}/${APP_NAME}/${projectName}`;
	console.log(process.env)
	const existsProjectFoler = existsSync(projectFullPath);
	if(existsProjectFoler){
		Console.error(`[Exists Project Folder]: ${projectFullPath}`);
		process.exit(1);
	}
	
	const createProjectFolder = mkdirSync(projectFullPath,{
		recursive: true
	});
	if(createProjectFolder === undefined){
		Console.error(`[Fail Create Folder]: ${projectFullPath}`);
		process.exit(1);
	}
	Console.info(`[Create Project Folder] ${projectFullPath}`);

	execSync("npm link ")

	console.log(createProjectFolder);
	console.log(process.pid);
	console.log(process.platform);
	const ls = execSync("ls -al").toString();
	
	console.log('ls',ls);



	

}

export default Create;