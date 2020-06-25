// Implementujte funkci
// Deklarace funkce: string print(string)(string)
//
// Code:  print('Hello')('World')
// Output: Hello World
//
// Code:  print('Good')('Luck')
// Output: Good Luck

function print(first, second) {
    var result = "";
    return result.concat(first, " ", second);
}


console.log(print("Hello","World"));
