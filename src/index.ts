import { parseArgs } from "util";
import { Options } from "./index.type";
import Create from "./command/create";
import Config from "./command/config";
import {PackageJsonValues, TsconfigBaseJsonValue, TsconfigCjsJsonValue, TsconfigJsonValue} from "./app.config";


(async () => {
    const options: {[key: string]:Options} = {
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

    if(values.config){
        console.log("=>(index.ts:25) values.config,values.set", values.config,values.set);
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




