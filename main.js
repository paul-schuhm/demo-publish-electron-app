const { app, BrowserWindow } = require('electron')

//Pour distribution avec Squirrel.Windows
//@See : https://www.electronforge.io/import-existing-project#adding-squirrel.windows-boilerplate
if (require('electron-squirrel-startup')) app.quit();

const { updateElectronApp, UpdateSourceType } = require('update-electron-app')
updateElectronApp()

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
