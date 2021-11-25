const escola = "Cod3r"

console.log(escola.charAt(4)) //Retorna o caracter da posição 4
console.log(escola.charAt(5)) //Retorna o caracter da posição 5
console.log(escola.charCodeAt(3)) //Retorna o código do caracter da posição 3
console.log(escola.indexOf('3')) //Retorna a posição do caracter 3

console.log(escola.substring(1)) //Retorna a partir da posição 1
console.log(escola.substring(0, 3)) //Retorna a partir da posição 0 até a posição 3

console.log('Escola '.concat(escola).concat("!")) //Retorna a concatenação de duas strings
console.log(escola.replace(3, 'e')) //Retorna a substituição do caracter 3 por 'e'

console.log('Ana,Maria,Pedro'.split(',')) //Retorna um array com os elementos separados por ','
