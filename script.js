// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 
// 1 modelo de como fazer um código Assincrono
// 
// var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')   // Busquei a api de consultar cep no site e salvei na variável de consultaCep
// .then(resposta => resposta.json()) // then serve para pegar uma informação
// .then(r => {
    // if (r.erro){
        // throw Error("Cep não encontrado")
// 
    // }
    // else{
        // console.log(r)
        //  }
// }) // fetch é para usar API's externas via link
// 
// .catch(error => console.log(error))  // 
// .finally(mensagem => console.log('Processo Concluído'))
// 
// 
// console.log(consultaCep)


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2 modelo de como fazer um código Assincrono e usando o try catch               
//O await só serve para funções assincronas ( ele espera algo acontecer, mas isso é tao rapido que parece assyncrono)

// async function buscaEndereco() {
    // try{
    // var consultaCep = await fetch('https://viacep.com.br/ws/01001250/json/')
    // var consultaCepConvertida = await consultaCep.json()
    // if(consultaCepConvertida.erro){
        // throw Error('Esse CEP não existe!')
    // }
    // console.log(consultaCepConvertida)}
    // catch(erro){
        // console.log(erro)
    // }
// }
// 
// buscaEndereco()
// 


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 
// 3 modelo de como fazer um código Assincrono e usando o try catch + buscando variáveis setáveis pelo usuário

// ESSE PASSO É PARA FAZER CONSULTAS DINÂMICAS

async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro')    //Colocando dentro do HTML uma mensagem vazia... Se nao tem erro ela nao deve ter nada
    mensagemErro.innerHTML = " "

    try{
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)  // \PROMISE PONTUAL
    var consultaCepConvertida = await consultaCep.json()
    if(consultaCepConvertida.erro){
        throw Error('Esse CEP não existe!')
    }

    var cidade = document.getElementById('cidade')
    var logradouro = document.getElementById  ('endereco')                             //Esses itens estão sendo pegos dentro do HTML (Cada campo do questionário)
    var estado = document.getElementById('estado')

    cidade.value = consultaCepConvertida.cidade
    logradouro.value = consultaCepConvertida.logradouro
    estado.value = consultaCepConvertida.uf

    console.log(consultaCepConvertida)
    return consultaCepConvertida}

    catch(erro){
        console.log(erro)
        mensagemErro.innerHTML = '<p>CEP inválido. Tente novamente!</p>'
    }
}


var cep = document.querySelector('#cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))