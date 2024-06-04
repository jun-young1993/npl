import fs from 'fs-extra';
import path from 'path';
import os from 'os';
const configFilePath = path.join(__dirname, '../../config.json');
const defaultConfig: Config = {
	path: process.cwd()
};
interface Config {
  [key: string]: string;
}

export function getConfig(): Config {
  if (fs.existsSync(configFilePath)) {
    return fs.readJsonSync(configFilePath);
  }
  return {};
}

export function setConfig(key: string, value: string): void {
  const config = getConfig();
  config[key] = value;
  fs.writeJsonSync(configFilePath, config, { spaces: 2 });
}

export function getConfigValue(key: string, defaultValue?: string): string | undefined {
  const config = getConfig();
  if(defaultValue !== null && config[key] === undefined){
	return defaultValue;
  }
  if(defaultConfig[key] !== undefined && config[key] === undefined){
	return defaultConfig[key];
  }
  return config[key];
}
