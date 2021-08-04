const electron = require('electron')

const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    // 窗口需要展示的内容
    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, './dist', 'index.html'),
    //     protocol: 'file',
    //     slashes: true
    // }))
    mainWindow.loadURL('http://localhost:8080/')
    // 自动打开调试台
    mainWindow.webContents.openDevTools(); 
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})