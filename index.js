const execFile = require('child_process').execFile;
const sep = require('path').sep;
const bin = __dirname+sep+'tts.exe';

function say(text, cb) {
    
    execFile(bin, [text], cb)

}

module.exports=say;