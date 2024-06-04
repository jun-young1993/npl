import { Command } from 'commander';
import { setConfig } from '../utils/configHandler';

const configCommand = new Command('config');

configCommand
  .arguments('<key> <value>')
  .description('설정 값을 저장합니다.')
  .action((key: string, value: string) => {
    setConfig(key, value);
    console.log(`설정 ${key}=${value} 저장됨`);
  });

export { configCommand };
