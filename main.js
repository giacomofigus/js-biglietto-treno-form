
const nomeCognomeHtml = document.getElementById('nameSurname')
const kmHtml = document.getElementById('km')
const etaHtml = document.getElementById('eta')
const generaRisultato = document.getElementById('btnRisultato')
const carrozzaHtml = document.getElementById('numeroCarrozza')
const codiceCpHtml = document.getElementById('numeroCodiceCp')

const h2Html = document.getElementById('titoloBiglietto')
const bigliettoHtml = document.getElementById('biglietto')
const risultatoNomeCognomeHtml = document.getElementById('risultatoNomeCognome')
const risultatoOffertaHtmll = document.getElementById('risultatoOfferta')

h2Html.style.display = "none"
bigliettoHtml.style.display = "none"


generaRisultato.addEventListener('click', function(){
  // document.querySelector('h2.d-none').classList.remove('d-none')
  // document.querySelector('div.d-none').classList.remove('d-none')

  h2Html.style.display = "block"
  bigliettoHtml.style.display = "block"

  let codiceCarrozza = RandomNumber (0,10)
  let codiceCp = RandomNumber (100,10000)

  carrozzaHtml.innerHtml = codiceCarrozza
  codiceCpHtml.innerHTML = codiceCp

 
 risultatonNomeCognomeHtml.innerHTML = nomeCognomeHtml.value

 if(etaHtml.value === "minorenne"){
    risultatoOffertaHtml.innerHTML = "biglietto scont 20%"


 } else if(etaHtml.value === "maggiorenne"){
  risultatoOffertaHtml.innerHTML = "biglietto "


 } else if(etaHtml.value === "over"){
  risultatoOffertaHtml.innerHTML = "biglietto scont 40%"


 }

})

function RandomNumber(min, max){

  return Math.floor(Math.random()*(max-min + 1) + min)
}
