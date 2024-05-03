import * as readline from 'readline';
const stdin = process.stdin;
const stdout = process.stdout;
const readlineInterface = readline.createInterface({
	input: stdin,
	output: stdout
});


export const questionSync = (query: string, defaultValue?: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		try{
			readlineInterface.question(query, (answer) => {
				resolve(answer === '' ? (defaultValue ?? '') : answer);
			});
		}catch(e){
			reject(e);
		}
	})
	
}
export default readlineInterface;