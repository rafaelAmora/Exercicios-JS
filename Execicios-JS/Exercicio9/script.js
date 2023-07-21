// Escreva uma função chamada 'calcularTempoViagem' que recebe a distância (em quilômetros) e a velocidade média (em km/h) como parâmetros.
// Complete a função para calcular e retornar o tempo de viagem em horas.

function calcularTempoViagem(distancia, velocidadeMedia) {
  const horas = distancia / velocidadeMedia
  // const minutos = distancia % velocidadeMedia

  console.log(`Sua viagem irá durar ${Math.trunc(horas)} horas `)
}

// Exemplo de uso:
const distanciaViagem = 300
const velocidadeMedia = 60
console.log(calcularTempoViagem(distanciaViagem, velocidadeMedia)) // Deve imprimir o tempo de viagem
