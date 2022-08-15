// é assim que se puxa informações do processo principal para a página
const information = document.getElementById('info')
information.innerText = `This app is using Chrome ${versions.chrome()}`

//fazendo requisição para o processo principal
const func = async () => {
    const response = await window.versions.ping()
    console.log(response)
}
func()