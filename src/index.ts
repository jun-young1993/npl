import {Command} from "commander";
import * as pack from "../package.json";
import {OptionValues} from "./index.type";
import Init from "./command/init";

(async () => {
    const program = new Command("[npm-fuse or nf]");

    program.version(pack.version)
        .option('--init', 'initialize npm-fuse ', false);

    program.parse(process.argv);

    const options = program.opts<OptionValues>();
    console.log("=>(index.ts:13) options", options);
    if (options.init) {
        await Init();
    }
})();




