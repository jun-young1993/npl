import Console from "../lib/consoleColor/consol-color";
import fs from 'fs';
const Init = async () => {
    const runPath = process.cwd();
    const packageJsonPath = `${runPath}/package.json`;
    Console.info('[Starting initialize..]');
    // fs.exists()
    // fs.readFileSync();
    console.log("=>(init.ts:9) rootPath", runPath);
    const isPackageJson = fs.existsSync(packageJsonPath);
    if(!isPackageJson){
        Console.error('[Not Found "package.json"] run script "npm init"');
        process.exit();
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath,{
        encoding: 'utf8'
    }));
    console.log("=>(init.ts:20) packageJson", packageJson);
    // console.log(JSON.parse(packageJson))
}

export default Init;