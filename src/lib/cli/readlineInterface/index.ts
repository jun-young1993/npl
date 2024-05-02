import * as readline from 'readline';
const stdin = process.stdin;
const stdout = process.stdout;
const readlineInterface = readline.createInterface({
	input: stdin,
	output: stdout
});

export default readlineInterface;