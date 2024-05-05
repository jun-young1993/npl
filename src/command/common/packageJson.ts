import {existsSync, readFileSync} from "fs";
const packageJsonPath = `${process.env.PWD}/package.json`;

const PackageJson = () => {
    if(existsSync(packageJsonPath)){
        const data = readFileSync(packageJsonPath,'utf8');
        return JSON.parse(data);
    }
    return {};
}
export default PackageJson();

