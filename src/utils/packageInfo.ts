import fs from 'fs-extra';
import path from 'path';

const packageJsonPath = path.join(__dirname, '../../package.json');
export const packageJson = fs.readJsonSync(packageJsonPath);
