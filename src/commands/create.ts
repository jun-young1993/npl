import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { getConfigValue } from '../utils/configHandler';
import { CreateOptions } from '../index.type';


export function createProject(projectName: string, {directory, typescript}: CreateOptions): void {
  console.log(directory)
  const projectPath = path.join(directory, projectName);
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red(`프로젝트 ${projectName}이(가) 이미 존재합니다`));
    process.exit(1);
  }

  fs.mkdirSync(projectPath, { recursive: true });
  console.log(chalk.green(`프로젝트 디렉토리 생성됨: ${projectName}`));

  const author = getConfigValue('user.name','Anonymous');

  const packageJson = {
    name: projectName,
    version: '1.0.0',
    description: '',
    main: typescript ? 'dist/index.js': 'index.js',
    scripts: {
      start: typescript ? 'tsc && node dist/index.js' : 'node index.js',
      build: typescript ? 'tsc' : undefined,
      test: 'echo "Error: no test specified" && exit 1',
    },
    keywords: [],
    author,
    license: 'ISC',
  };

  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  console.log(chalk.green(`package.json 생성됨`));

  if(typescript){
    const tsConfig = {
      compilerOptions: {
        target: 'ES6',
        module: 'commonjs',
        outDir: './dist',
        rootDir: './src',
        strict: true,
        esModuleInterop: true,
      },
      include: ['src/**/*']
    };

    fs.mkdirSync(path.join(projectPath, 'src'));
    fs.writeFileSync(path.join(projectPath, 'src/index.ts'), '');
    fs.writeFileSync(
      path.join(projectPath, 'tsconfig.json'),
      JSON.stringify(tsConfig, null, 2)
    );
    console.log(chalk.green(`TypeScript 프로젝트 설정 완료! tsconfig.json 생성됨`));
  }else{
    
    fs.writeFileSync(path.join(projectPath, 'index.js'), '');
    console.log(chalk.green(`index.js 생성됨`));
  }


  fs.writeFileSync(path.join(projectPath, '.gitignore'), 'node_modules\n');
  console.log(chalk.green(`.gitignore 생성됨`));

  fs.writeFileSync(path.join(projectPath, 'README.md'), `# ${projectName}`);
  console.log(chalk.green(`README.md 생성됨`));


  console.log(chalk.green(`프로젝트 ${projectName} 설정 완료!`));
}
