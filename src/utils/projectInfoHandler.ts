import fs from 'fs-extra';
import path from 'path';

const projectInfoFilePath = path.join(__dirname, '../../projects.json');

interface ProjectInfo {
  name: string;
  version: string;
  directory: string;
  typescript: boolean;
}

export function getProjectInfos(): ProjectInfo[] {
  if (fs.existsSync(projectInfoFilePath)) {
    return fs.readJsonSync(projectInfoFilePath);
  }
  return [];
}

export function addProjectInfo(projectInfo: ProjectInfo): void {
  const projectInfos = getProjectInfos();
  projectInfos.push(projectInfo);
  fs.writeJsonSync(projectInfoFilePath, projectInfos, { spaces: 2 });
}
