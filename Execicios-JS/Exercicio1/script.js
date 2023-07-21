// Exercício 1: Verificação de números pares
// Escreva uma função em JavaScript que receba um número como entrada e verifique se ele é par ou ímpar. A função deve retornar "Par" se o número for par e "Ímpar" se o número for ímpar.

const number = prompt("digite seu numero aqui:")

function fun() {
  if (number % 2 === 0) {
    console.log("O numero é Par")
    alert("O numero é Par")
  } else {
    console.log("O numero é Ímpar")
    alert("O numero é Ímpar")
  }
}

fun()
