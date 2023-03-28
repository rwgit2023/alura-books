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


async function buscaEndereco(cep) {
    try{
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)  // \PROMISE PONTUAL
    var consultaCepConvertida = await consultaCep.json()
    if(consultaCepConvertida.erro){
        throw Error('Esse CEP não existe!')
    }
    console.log(consultaCepConvertida)
    return (consultaCepConvertida)}

    catch(erro){
        console.log(erro)
    }
}

// let ceps = ['01001000','01001001'] // Foi criado 2 arrays contendo os ceps
// let conjuntoCeps = ceps.forEach(valores => buscaEndereco(valores))
// console.log(conjuntoCeps)
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas))
// buscaEndereco()


