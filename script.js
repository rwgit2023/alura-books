var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then(r => console.log(r)) // fetch é para usar API's externas via link


console.log(consultaCep)