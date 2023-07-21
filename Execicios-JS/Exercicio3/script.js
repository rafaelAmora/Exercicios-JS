// Escreva uma função chamada 'converterHorasEmSegundos' que recebe um número de horas como parâmetro.
// Complete a função para converter o número de horas em segundos (1 hora = 3600 segundos) e retornar o valor convertido.
function converterHorasEmSegundos(horas) {
  let sg = horas * 3600
  let hora = sg / 1
  console.log(`${horas} horas são exatamente ${hora} segundos`)
}

// Exemplo de uso:
console.log(converterHorasEmSegundos(2)) // Deve imprimir: 7200
