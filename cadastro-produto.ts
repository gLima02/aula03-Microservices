let cores = ["vermelho", "azul", "verde"]
let produtos:{id:string, nome:string, cor:string, tamanho:string, preco:string}[] = []
let corSelect = document.getElementById('cor') as HTMLSelectElement
cores.forEach(cor => {
    let option = document.createElement("option");
    option.text = cor;
    option.value = cor;
    corSelect.appendChild(option);
})

let tamanhos = ["P", "M", "G", "GG"]
let tamanhosSelect = document.getElementById('tamanho') as HTMLSelectElement
tamanhos.forEach(tamanho => {
    let option = document.createElement("option");
    option.text = tamanho;
    option.value = tamanho;
    tamanhosSelect.appendChild(option);
})

function save(){
    const produtoInput = document.getElementById("produto") as HTMLInputElement
    const corInput = document.getElementById("cor") as HTMLSelectElement
    const tamanhoInput = document.getElementById("preco") as HTMLSelectElement
    const precoInput = document.getElementById("preco") as HTMLInputElement

    const produto = {
        id: crypto.randomUUID(),
        nome: produtoInput.value,
        cor: corInput.value,
        tamanho: tamanhoInput.value,
        preco: precoInput.value
    }

    produtos.push(produto)
    localStorage.setItem('produtos', JSON.stringify(produtos))
}