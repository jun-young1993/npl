import { infoFolderPath } from "fuse.info";
import {JsonConfig} from "../app.config";
import Console from "../lib/consoleColor/consol-color";

const getConfigList = () => {
    const jsonData = JsonConfig.all();

    Console.info('[Config List]');
    for(const key in jsonData){
        console.log(`\x1b[36m${key}: \x1b[35m${jsonData[key]}\x1b[0m`);
    }
    console.log(`\x1b[36mfuse folder path: \x1b[35m${infoFolderPath}\x1b[0m`)
}
const Config = (
    isSet?: string | undefined
) => {
    if(isSet === undefined){
        getConfigList();
    }else{
        const [key, value]: string[] = isSet.split("=");
        if(key && value){
            JsonConfig.update(key, value);
        }else{
            Console.warn('[Config Set Example]',"nf --config --set path=/projectPath/source");
        }
        getConfigList();
        //
        // jsonData.has()
        // jsonData.update()
    }
}

export default Config;