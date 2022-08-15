const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping'), //NUNCA mandar diretamente! isso seria uma falha de segurança.
    system: () => {
        return [
            {
                nome: "node",
                version: process.versions.node
            },
            {
                nome: "chrome",
                version: process.versions.chrome
            },
            {
                nome: "electron",
                version: process.versions.electron
            },
            {
                nome: "platform",
                version: process.platform
            },
        ]
    }
})