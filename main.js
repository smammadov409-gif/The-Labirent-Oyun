const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    webPreferences: { nodeIntegration: false }
  });

  win.loadURL('https://extraordinary-cat-843413.netlify.app/');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
