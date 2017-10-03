const {app,BrowserWindow} = require('electron');
const translate = require('google-translate-api');

/**const react = require('javascript/react.production.min.js');
const YT = require('javascript/YouTube.js');
**/
console.log(process.argv)

app.on('ready', () => {
	let win = new BrowserWindow({width:1024,height:720});
	
	win.on('closed', () => {
		win = null;
	});

	//win.loadURL(process.argv[2]);
	win.loadURL(__dirname+'/index.html?channel="'+process.argv[2]+'"');
	/**var contents = win.webContents;
	
	contents.**/
});
