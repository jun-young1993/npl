#!/usr/bin/env node

import { Command } from 'commander';
import { createProject } from './commands/create';
import { packageJson } from './utils/packageInfo';
import { ConfigOptions, CreateOptions } from 'index.type';
import { getConfig, getConfigValue, setConfig } from './utils/configHandler';
import chalk from 'chalk';

const program = new Command();

program
  .version(packageJson.version)
  .description('npm-fuse: npm 프로젝트를 생성하고 관리하는 CLI 도구');

program
  .command('create <projectName>')
  .description('새로운 npm 프로젝트 생성')
  .option('-d, --directory <directory>', '프로젝트 생성 디렉토리', getConfigValue('path'))
  .option('--typescript', 'TypeScript 프로젝트 생성')
  .action((projectName: string, options: CreateOptions) => {
    createProject(projectName, options);
  });

program
  .command('config')
  .description('설정 값을 저장하거나 조회합니다.')
  .option('-k, --key <configKey>', '설정 키')
  .option('-v, --value <configValue>', '설정 값')
  .action((options: ConfigOptions) => {
    const { key, value } = options;
    if (key && value) {
      setConfig(key, value);
      console.log(chalk.green(`설정 ${key}=${value} 저장됨`));
    } else if (key) {
      const configValue = getConfigValue(key);
      if (configValue !== undefined) {
        console.log(chalk.green(`설정 값: ${key}=${configValue}`));
      } else {
        console.log(chalk.green(`설정 ${key}이(가) 존재하지 않습니다`));
      }
    } else {
      const config = getConfig();
      console.log('현재 설정 값:', config);
    }
    process.exit();
  });



program.parse(process.argv);
