
// import { Options } from "./index.type";
import { parseArgs } from "util";
import { Options } from "./index.type";
import Init from "./command/init";
import Create from "./command/create";

(async () => {
    const options: {[key: string]:Options} = {
        "init" : {
            type: 'boolean',
            default: false
        },
        "create": {
            type: 'boolean',
            default: false
        }
    }
    const {values} = parseArgs({options});
    console.log(values);
    if(values.init){
        Init();
    }
    if(values.create){
        await Create();
    }
})();




