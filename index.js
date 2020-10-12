const execFile = require('child_process').execFile;
const bin = require('path').normalize(`${__dirname}/bin/tts.exe`);

module.exports = say = (text='')=>{
	text = `${text}`;
	if(text.trim() === '')return false;
	
	const child = execFile(bin, [text]);
	
	return new Promise((resolve, reject)=>{
		child.addListener('error', ()=>reject(false));
		child.addListener('exit', ()=>resolve(true));
	});
};

