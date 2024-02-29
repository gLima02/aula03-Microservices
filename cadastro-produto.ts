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

function load(){
    // Ler o localstorage
 const produtosFromStorage = localStorage.getItem("produtos")
    if(produtosFromStorage)
        produtos = JSON.parse(produtosFromStorage)       

    let tabelaProduto = document.getElementById("tblProdutos") as HTMLTableElement
    produtos.forEach(p =>{
        const tbody = tabelaProduto.getElementsByTagName("tbody")[0]
        const row = tabelaProduto.insertRow()
        row.insertCell(0).innerHTML = p.id;
        row.insertCell(1).innerHTML = p.nome;
        row.insertCell(2).innerHTML = p.cor;
        row.insertCell(3).innerHTML = p.tamanho;
        row.insertCell(4).innerHTML = p.preco;
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Remover"
        deleteButton.addEventListener('click', function(){

            const idProduto = row.cells[0].textContent
            const produto = row.cells[1].textContent
            const mensagem = `Confirma a remoção do produto ${produto}`
            if(confirm(mensagem) == true){
                //filter: percorre uma lista
                produtos = produtos.filter(function(produto){
                    return produto.id !== idProduto
                })
                //remover da tabella html
                row.remove()
       
                //atualizar o localstorage
            localStorage.setItem("produtos", JSON.stringify(produtos))
            
            }
        })
        row.insertCell(5).appendChild(deleteButton)
    })    

    
}

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
    load();

}