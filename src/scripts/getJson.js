/* eslint-disable */
const fs = require('fs');

var proc = require('child_process').spawn('pbcopy', {
    env: { LC_CTYPE: 'UTF-8' },
});

const main = async () => {
    const language = process.argv[2];
    let string = '';
    if (language === 'en') {
        const enFileContent = fs.readFileSync(`${__dirname}/../en.ts`, 'utf8');
        string = JSON.stringify(en);
    } else if (language === 'tr') {
        string = JSON.stringify(tr);
    } else {
        throw new Error('Language is not valid');
    }

    proc.stdin.write(JSON.parse(string));
};

main();
