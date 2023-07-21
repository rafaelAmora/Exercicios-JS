// Escreva uma função chamada 'calcularDesconto' que recebe o valor original de um produto e o percentual de desconto como parâmetros.
// Complete a função para calcular o valor do desconto (valorOriginal * percentualDeDesconto) e retorná-lo.
function calcularDesconto(valorOriginal, percentualDeDesconto) {
  let preco = percentualDeDesconto / 100

  let total = preco * valorOriginal
  console.log(`O desconto será de ${total} de reais`)
}

// Exemplo de uso:
console.log(calcularDesconto(100, 20)) // Deve imprimir: 20
