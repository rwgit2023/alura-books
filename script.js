var consultaCep = fetch('https://viacep.com.br/ws/0100100/json/')   // Busquei a api de consultar cep no site e salvei na variável de consultaCep
.then(resposta => resposta.json()) // then serve para pegar uma informação
.then(r => {
    if (r.erro){
        throw Error("Cep não encontrado")

    }
    else{
        console.log(r)
         }
}) // fetch é para usar API's externas via link

.catch(error => console.log(error))  // 
.finally(mensagem => console.log('Processo Concluído'))


console.log(consultaCep)