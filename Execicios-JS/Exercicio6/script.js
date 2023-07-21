// Escreva uma função chamada 'calcularMedia' que recebe três notas como parâmetros (nota1, nota2, nota3).
// Complete a função para calcular e retornar a média das três notas.

function calcularMedia(nota1, nota2, nota3) {
  const total = nota1 + nota2 + nota3
  const media = total / 3
  console.log(`Sua média é ${media}`)
}

// Exemplo de uso:
const nota1 = 8
const nota2 = 7
const nota3 = 6
console.log(calcularMedia(nota1, nota2, nota3)) // Deve imprimir a média das notas
