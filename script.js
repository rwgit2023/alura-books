var consultaCep = fetch('https://viacep.com.br/ws/0100100/json/')
.then(resposta => resposta.json())
.then(r => {
    if (r.erro){
        throw erro("Cep não encontrado")

    }else{
        console.log(r)
         }
}   
    
    


) // fetch é para usar API's externas via link
.catch(error => console.log(error))


console.log(consultaCep)