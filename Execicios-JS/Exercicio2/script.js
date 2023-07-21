// Escreva uma função chamada calcularIdade, que receba o ano atual e o ano de nascimento como argumentos e retorne a idade da pessoa.

const year = prompt("Qual ano Você nasceu?")

const current_year = prompt("Qual é o ano atual")

function calcularIdade() {
  let age = current_year - year
  let ag = console.log(`Você tem exatamente ou ira fazer ${age} anos de idade`)
  alert(`Você tem exatamente ou ira fazer ${age} anos de idade`)
}

calcularIdade()
