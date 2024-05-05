import {JsonConfig} from "../app.config";
import * as Console from "console";

const Config = (
    isSet?: string | undefined
) => {
    if(isSet === undefined){
        const jsonData = JsonConfig.all();
        for(const key in jsonData){
            Console.info('=============');
            Console.info('[Config List]');
            Console.info('=============');
            console.log(`\x1b[36m${key}: \x1b[35m${jsonData[key]}\x1b[0m`);
        }
    }
}

export default Config;