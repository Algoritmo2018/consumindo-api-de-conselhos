//Traz um conselho aleatorio
var txtconselho_aleatorio = document.querySelector("#conselho_aleatorio") 
var btnnovo_conselho_aleatorio = document.querySelector("#novo_conselho_aleatorio") 


btnnovo_conselho_aleatorio.addEventListener('click', async() =>{
    var url = `https://api.adviceslip.com/advice`
    var resposta = await fetch(url)
    var dados = await resposta.json()

    console.log(dados)
 
  txtconselho_aleatorio.innerHTML = dados.slip.advice
   
})
// fim

// busca conselhos por id
var txtsearch_conselho_id = document.querySelector("#search_conselho_id") 
var txtresposta_conselho_id = document.querySelector("#resposta_conselho_id")  
txtsearch_conselho_id.addEventListener('input', async() =>{
    var url = `https://api.adviceslip.com/advice/${txtsearch_conselho_id.value}`
    var resposta = await fetch(url)
    var dados = await resposta.json()

    console.log(dados.slip.advice)
 
   txtresposta_conselho_id.innerHTML = dados.slip.advice  
 
   
})
