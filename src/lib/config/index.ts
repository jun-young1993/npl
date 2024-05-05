import fs, {rmSync} from 'fs';
import path from 'path';
interface Data {
    [key: string]: any;
}
interface Options {
    defaultJson?: Data
}
class JSONFileManager {
    private readonly filePath: string;

    constructor(filePath: string = "./config.json", options?: Options) {
        this.filePath = filePath;

        if(!fs.existsSync(this.filePath)){
            this.reset(options?.defaultJson);
        }
    }

    getPath(): string
    {
        return this.filePath;
    }

    deleteFile(){
        if(fs.existsSync(this.filePath)){
            rmSync(this.filePath);
        }

    }

    all(): Data{
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        }catch (error) {
            console.error(`Error writing JSON file: ${error}`);
            return {};
        }
    }

    has(key: string){
        return this.read(key) === undefined ? false : true;
    }

    read(key: string, defaultValue?: string): string | undefined{
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            const parseData = JSON.parse(data);

            return parseData[key] ?? defaultValue;
        } catch (error) {
            console.error(`Error reading JSON file: ${error}`);
            return undefined;
        }
    }

    write(data: Data): void {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
            console.log('JSON data has been written to the file successfully.');
        } catch (error) {
            console.error(`Error writing JSON file: ${error}`);
        }
    }

    update(key: string, value: any): void {
        try {
            const data = this.all();

            data[key] = value;
            this.write(data);
        } catch (error) {
            console.error(`Error updating JSON file: ${error}`);
        }
    }

    reset(defaultJson?: Data): void {
        try {
            fs.mkdirSync(path.dirname(this.filePath),{
                recursive: true
            })
            fs.writeFileSync(this.filePath, JSON.stringify(defaultJson ?? {}, null, 2));
        } catch (error) {
            console.error(`Error resetting JSON file: ${error}`);
        }
    }
}

export default JSONFileManager;
