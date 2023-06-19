// Exercício Rocketseat

function calculator() {
  alert('Bem vindo a calculadora.')

  const firstNumber = Number(prompt('Digite o primeiro número:'))
  const secondNumber = Number(prompt('Digite o segundo número:'))

  const sum = firstNumber + secondNumber
  const subtraction = firstNumber - secondNumber
  const multiplication = firstNumber * secondNumber
  const division = (firstNumber / secondNumber).toFixed(2)
  const restOfDiv = firstNumber % secondNumber

  function evenOrOdd() {
    if (sum % 2 === 0) {
      return 'par'
    } else {
      return 'ímpar'
    }
  }

  function areEqual() {
    if (firstNumber === secondNumber) {
      return 'iguais'
    } else {
      return 'diferentes'
    }
  }

  function printResults() {
    alert(`A soma dos dois números é ${evenOrOdd()} e é: ${sum}`)
    alert(`A subtração dos dois números é: ${subtraction}`)
    alert(`A multiplicação dos dois número é: ${multiplication}`)
    alert(`A divisão dos dois números é: ${division}`)
    alert(`O resto de divisão dos dois números é: ${restOfDiv}`)
    alert(`Os dois números são ${areEqual()}.`)
  }

  printResults()

}



