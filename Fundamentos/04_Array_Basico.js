const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //Undefined

valores[4] = 10 //Adicionando um novo valor no array

console.log(valores.length) //Retorna o tamanho do array

valores.push({id: 3}, false, null, 'teste') //Adicionando um novo valor no array

valores.pop() //Remove o último elemento do array

delete valores[0] //Deleta o elemento da posição 0

typeof valores //Retorna o tipo do array