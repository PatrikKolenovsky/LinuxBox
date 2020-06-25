//Napište funkci, která po uplynutí stanoveného času napíše součin dvou čísel.
function count(firstNumber, secondNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = firstNumber * secondNumber;

            if (!isNaN(firstNumber) && !isNaN(secondNumber) ) resolve(result)
            else reject(`Input parameter is not a number!`)

        }, 3000)
    })
}

count(10, 2)
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.log(error))
