import {existsSync, readFileSync, rmSync, unlinkSync} from "fs";
import {infoFolderProjectPath, localPackageFolder} from "../fuse.info";
import Console from "../lib/consoleColor/consol-color";

const Delete = async (projectName: string) => {
    const deleteProjectFolderPath = `${infoFolderProjectPath}/${projectName}`;
    const localProjectFolderPath = `./${localPackageFolder}/${projectName}`
    if(existsSync(localProjectFolderPath)){
        unlinkSync(localProjectFolderPath);
        Console.info("[Unlink npm-fuse modules]")
        Console.value(localProjectFolderPath)
    }

    if(existsSync(deleteProjectFolderPath)){

        rmSync(deleteProjectFolderPath,{
            recursive: true,
            force: true
        });
        Console.info("[deleted project folder]")
        Console.value(deleteProjectFolderPath)
    }else{
        // 아닌경우 packageJson 다 돌아보자
    }

}
export default Delete;