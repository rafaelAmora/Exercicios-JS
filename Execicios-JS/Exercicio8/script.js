// Escreva uma função chamada 'conceituarAluno' que recebe a nota de um aluno como parâmetro.
// Complete a função para retornar a seguinte mensagem de acordo com a nota:
// Nota de 0 a 4.9: "Insuficiente"
// Nota de 5 a 6.9: "Suficiente"
// Nota de 7 a 8.9: "Bom"
// Nota de 9 a 10: "Excelente"

const number = prompt("Qual nota você tirou?")

const nota = number

let Insuficiente = nota >= 0 && nota <= 4.9
let Suficiente = nota >= 5 && nota <= 6.9
let Boa = nota >= 7 && nota <= 8.9
let Excelente = nota > 9 && nota <= 10

function conceituarAluno(nota) {
  if (Excelente) {
    alert("Nota Excelente")
  } else if (Boa) {
    alert("Nota Boa")
  } else if (Suficiente) {
    alert("Nota Suficiente ")
  } else if (Insuficiente) {
    alert("Nota Insuficiente ")
  } else {
    alert("Nota invalida")
  }
}

// Exemplo de uso:
const notaAluno = 7.5
console.log(conceituarAluno(notaAluno)) // Deve imprimir a conceituação do aluno
