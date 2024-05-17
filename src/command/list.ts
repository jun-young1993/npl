import { infoFolderProjectPath } from "fuse.info";
import Console from "../lib/consoleColor/consol-color";
import { readFileSync, readdirSync } from "fs";

const List = async () => {
	Console.info('[Config List]');
	const projectList = readdirSync(infoFolderProjectPath);
	for(let listIndex = 0; listIndex<projectList.length; listIndex++){
		const packageName = projectList[0];
		const packageJsonParse = JSON.parse(readFileSync(
			`${infoFolderProjectPath}/${packageName}/package.json`,
			'utf-8'
		));
		console.log(`├── ${packageName}@${packageJsonParse.version}`)


	}
	
}

export default List;