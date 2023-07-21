// Escreva uma função chamada 'calcularDesconto' que recebe o preço de um produto e o percentual de desconto como parâmetros.
// Complete a função para calcular e retornar o valor do desconto a ser subtraído do preço original.

function calcularDesconto(preco, percentualDesconto) {
  const porcentual = percentualDesconto / 100
  const desconto = preco * porcentual
  const pagar = preco - desconto
  console.log(
    `Você ira pagar ${pagar} reais sendo que o desconto será de ${desconto} reais`
  )
}

// Exemplo de uso:
const precoProduto = 100
const desconto = 20 // 20% de desconto
console.log(calcularDesconto(precoProduto, desconto)) // Deve imprimir o valor do desconto
