import PackageJson from "./common/packageJson";
import Console from "../lib/consoleColor/consol-color";
import ProjectVersion from "./common/projectVersion";

const Help = () => {
    console.log("[Usage]");
    Console.caption("   "+ProjectVersion())
    console.log("");
    console.log("   $ npm-fuse <option>")
    console.log("   $ nf <option>")
    console.log("");


    console.log("[Options]");
    Console.keyAndValue("   --create","create new project ","                      ");
    Console.info("                                 $ nf --create");
    Console.keyAndValue("   --config","get npm-fuse config list","                      ");
    Console.info("                                 $ nf --config");
    Console.keyAndValue("   --config --set <key=value>","update npm-fuse config list","    ");
    Console.info("                                 $ nf --config --set path=/myProjects/source");
    Console.keyAndValue("   --list","created project list","                        ");
    Console.info("                                 $ nf --list");
    Console.keyAndValue("   --delete --name <projectName>","delete project"," ");
    Console.info("                                  - unlink");
    Console.info("                                  - delete project folder");
    Console.info("                                 $ nf --delete --name testProject");

}

export default Help;