
import * as readline from "readline";
import Console from "../../consoleColor/consol-color";



const stdin = process.stdin;
const stdout = process.stdout;

// stdin 설정
stdin.setRawMode(true);
// stdin.resume();
stdin.setEncoding('utf8');

// const readlineInterface = readline.createInterface({
// 	input: stdin,
// 	output: stdout
// });

readline.emitKeypressEvents(stdin);

const options = [
	'Option 1',
	'Option 2',
	'Option 3'
];
let currentIndex = 0;

stdin.on('keypress',(key,data) => {
	// console.log(key,data);
	if(data.name === 'up'){
		currentIndex = (currentIndex - 1 + options.length) % options.length;
		renderMenu()
	}
	if(data.name === 'down'){
		currentIndex = (currentIndex + 1) % options.length;
		renderMenu()
	}
	if(data.name === 'c' && data.ctrl){

		Console.info('[Good Bye ~]');

		process.exit(0); 
	}
})

stdin.setRawMode(true);
// stdin.resume();
stdin.setEncoding('utf8');

// 화면을 지우고 메뉴를 다시 출력하는 함수
function renderMenu() {
	process.stdout.write('\x1B[2J\x1B[0f'); // 화면 지우기
	options.forEach((option, index) => {
		if (index === currentIndex) {
			stdout.write(`* ${option}`+'\r\n'); 
		// console.log(`* ${option}`); // 현재 선택된 항목에 '*' 표시
		} else {
			stdout.write(`  ${option}`+'\r\n'); 
		// console.log(`  ${option}`);
		}
	});
}


renderMenu();