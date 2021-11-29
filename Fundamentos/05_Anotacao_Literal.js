// Um objeto é basicamente uma coleção (Chave & Valor)

const prod1 = {} // Criando um objeto vazio
prod1.nome = 'Celular Ultra Mega' // Adicionando um novo atributo ao objeto
prod1.preco = 4998.90 // Adicionando um novo atributo ao objeto
prod1['Desconto Legal'] = 0.40 // Adicionando um atributo ao objeto com colchetes e espaços.. Evite espaços no nome do atributo

console.log(prod1)

const prod2 = { // Criando um objeto de outra forma
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)