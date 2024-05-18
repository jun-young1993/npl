import { existsSync, mkdirSync } from 'fs';
import * as os from 'os';
const homedir = os.tmpdir();
export const localPackageFolder = "npm-fuse-modules";
export const infoFolderPath = `${homedir}/npm-fuse`;
export const infoFolderProjectPath = `${infoFolderPath}/projects`
export const PackageJsonFileName = 'package.json';
export const infoFolderProjectPackageJson = (projectPath: string) => {
	return `${projectPath}/${PackageJsonFileName}`;
}
export const createInfoFolder = function(){
	if(!existsSync(infoFolderProjectPath)){
		mkdirSync(infoFolderProjectPath,{
			recursive: true
		});
	}
	
}