document.getElementById('checkFizzbuzz').addEventListener('click', fizzBuzz)

function fizzBuzz() {
    let num = document.getElementById('userInput').value
    if ((num % 3 === 0) && (num % 5 === 0)) {
        document.getElementById('result').innerHTML = `fizzbuzz 😎`
    } else if (num % 3 === 0) {
        document.getElementById('result').innerHTML = `fizz 🙂`
    } else if (num % 5 === 0) {
        document.getElementById('result').innerHTML = `buzz 😮`
    } else document.getElementById('result').innerHTML = `${num}`
}