const {app, BrowserWindow} = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 1400,
    height: 770,
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.loadURL(`file://${__dirname}/app/index.html`)

  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }

})

app.on('activate', () => {

  if (win === null) {
    createWindow()
  }

})
