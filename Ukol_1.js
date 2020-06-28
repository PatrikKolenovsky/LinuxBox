// Implementujte funkci
// Deklarace funkce: string print(string)(string)
//
// Code:  print('Hello')('World')
// Output: Hello World
//
// Code:  print('Good')('Luck')
// Output: Good Luck

function print(param) {
    function printAgain(printableParam){
        return param + ' ' + printableParam
    }
    return printAgain;
}

console.log(print("Hello")("World"));
