import fs from 'fs-extra';
import path from 'path';
import os from 'os';
const configFilePath = path.join(__dirname, '../../config.json');
interface ConfigValueInterface {
  path: string
}
interface Config extends ConfigValueInterface{
  [key: string]: string;
}
const defaultConfig: Config = {
	path: process.cwd()
};


export function getConfig(): Config {
  const config: Config = fs.existsSync(configFilePath) ? fs.readJsonSync(configFilePath) : {};
  return { ...defaultConfig, ...config };
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
