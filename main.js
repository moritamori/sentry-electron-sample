const { app, BrowserWindow } = require("electron")
const Sentry = require('@sentry/electron');

Sentry.init({dsn: 'https://0d888243b2004ce5b89b5815b6d44169@o410344.ingest.sentry.io/5284198'});

let win;
function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600})
  myUndefinedFunction();
  win.loadURL(`file://${__dirname}/index.html`)
  win.on("closed", () => { win = null; })
}
app.on("ready", createWindow)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
})
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
})
