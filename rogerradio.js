const {app, BrowserWindow} = require('electron');

const urls = [
    "https://radioplayer.theholyroger.com/player2.html"
]

const createWindow = () =>{ 
    width: 800;
    height: 600 
    win = new BrowserWindow({
        center: true,
        resizable: true,
        webPreferences:{
            nodeIntegration: false,
            show: false
        }
    });
    //win.webContents.
    win.setSize(380, 380, false);
    win.loadURL(urls[0]);
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname,"index.html"),
    //     protocol: 'file',
    //     slashes: true
    // }));
    win.once('ready-to-show',()=>{
        win.show()
    });

    win.on('closed',()=>{
        win = null;
    });
}

app.on('ready', createWindow);
