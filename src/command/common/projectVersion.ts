import getPackageJson from "./packageJson";
import PackageJson from "./packageJson";

const ProjectVersion = (): string => {
    let version = getPackageJson('version');
    if(!version){
        version = "0.0.0";
    }
    let name = getPackageJson('version');
    if(!name)  {
        name = 'no name';
    }

    return `${name} ${version}`;
}
export default ProjectVersion;