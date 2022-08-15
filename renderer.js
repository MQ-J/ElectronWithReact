// é assim que se puxa informações do processo principal para a página
const sys = document.getElementById('system')
sys.innerHTML = versions.system().map(function (item) {
    return `<li class="list-group-item">${item.nome}: ${item.version}</li>`;
}).join('')

//fazendo requisição para o processo principal
const func = async () => {
    const response = await window.versions.ping()
    console.log(response)
}
func()