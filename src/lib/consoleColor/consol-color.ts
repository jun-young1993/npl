const reset = "\x1b[0m";
const bright = "\x1b[1m";
const dim = "\x1b[2m";
const underscore = "\x1b[4m";
const blink = "\x1b[5m";
const reverse = "\x1b[7m";
const hidden = "\x1b[8m";

const fgBlack = "\x1b[30m";
const fgRed = "\x1b[31m";
const fgGreen = "\x1b[32m";
const fgYellow = "\x1b[33m";
const fgBlue = "\x1b[34m";
const fgMagenta = "\x1b[35m";
const fgCyan = "\x1b[36m";
const fgWhite = "\x1b[37m";

const bgBlack = "\x1b[40m";
const bgRed = "\x1b[41m";
const bgGreen = "\x1b[42m";
const bgYellow = "\x1b[43m";
const bgBlue = "\x1b[44m";
const bgMagenta = "\x1b[45m";
const bgCyan = "\x1b[46m";
const bgWhite = "\x1b[47m";

// console.log(fgBlue + '이것은 정보 메시지입니다.' + reset);
// console.log(fgYellow + '주의: 이것은 경고 메시지입니다.' + reset);
// console.log(fgRed + '에러: 이것은 오류 메시지입니다.' + reset);

const Console = {
    info: (...args: string[]) => {
        args.forEach((message) => {
            console.log(fgBlue + message + reset);
        });
    },
    warn: (...args: string[]) => {
        args.forEach((message) => {
            console.log(fgYellow + message + reset);
        });
    },
    error: (...args: string[]) => {
        args.forEach((message) => {
            console.log(fgRed + message + reset);
        });
    },
    keyAndValue: (...args: string[]) => {
        console.log(fgCyan + args[0]+': '+fgMagenta+args[1] + reset);
    },
    key: (...args: string[]) => {
        args.forEach((message) => {
            console.log(fgCyan + message + reset);
        });
    },
    value: (...args: string[]) => {
        args.forEach((message) => {
            console.log(fgMagenta + message + reset);
        });
    },

}
export default Console;