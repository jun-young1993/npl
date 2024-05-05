import { parseArgs } from "util";
import { Options } from "./index.type";
import Create from "./command/create";
import Config from "./command/config";
import {PackageJsonValues, TsconfigBaseJsonValue, TsconfigCjsJsonValue, TsconfigJsonValue} from "./app.config";
import Help from "./command/help";
import Console from "./lib/consoleColor/consol-color";
import ProjectVersion from "./command/common/projectVersion";

(async () => {
    const options: {[key: string]:Options} = {
        "version": {
            type: 'boolean',
            short: 'v',
            default: false
        },
        "help": {
            type: 'boolean',
            default: false
        },
        "config" : {
            type: 'boolean',
            default: false
        },
        "set" : {
            type: "string",
        },
        "create": {
            type: 'boolean',
            default: false
        }
    }

    const {values} = parseArgs({options});

    if(values.help){
        await Help();
    }
    if(values.version){
        Console.caption("   "+ProjectVersion());
    }
    if(values.config){
        await Config(values.set as string | undefined);
    }

    if(values.create){
        await Create();
    }


    PackageJsonValues.deleteFile();
    TsconfigJsonValue.deleteFile();
    TsconfigBaseJsonValue.deleteFile();
    TsconfigCjsJsonValue.deleteFile();
    process.exit(0);
})();




