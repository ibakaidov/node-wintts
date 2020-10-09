# node-wintts
TTS module for windows

## Usage
```javascript
const wintts = require('wintts');

(async()=>{
	const a = await wintts('Hello, world!');
	console.log(a);
})();
```
