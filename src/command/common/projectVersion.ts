import PackageJson from "./packageJson";

const ProjectVersion = (): string => {
    let version = PackageJson.version;
    if(!version){
        version = "0.0.0";
    }
    let name = PackageJson.name;
    if(!name)  {
        name = 'no name';
    }

    return `${name} ${version}`;
}
export default ProjectVersion;