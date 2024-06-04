import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

interface PackageJsonInterface {
    [key: string]: any;
}

const getPackageJson = <T extends PackageJsonInterface>(key?: string) => {
    try{
        const _dirname = dirname(fileURLToPath(import.meta.url));
        const packagePath = join(_dirname,'../..', 'package.json');
        if(existsSync(packagePath)){
            const packageJson = JSON.parse(readFileSync(packagePath, 'utf8')) as T;
            if(key){
                return packageJson[key];
            }
            return packageJson;
        }
    }catch(error){
        return {} as T;
    }
};

export default getPackageJson;
