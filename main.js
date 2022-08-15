const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    
    //quando ele receber 'ping' como requisição, vai devolver 'pong'
    ipcMain.handle('ping', () => 'pong')

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    // no IOS, a aplicação continua rodando mesmo sem janelas abertas.
    // caso o usuário ative o app (clique no ícone) nessa situação,
    // uma nova janela deve ser criada.
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

//encera o app caso todas as janelas sejam fechadas.
// (apenas se o sistema operacional não foi IOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})