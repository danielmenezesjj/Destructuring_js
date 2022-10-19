const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]


const numeros = [...numerosPares, ...numerosImpares]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]


const [nome1 = "Juliana"] = [];


// console.log(nome1);
// console.log(num1, num2, outrosNumeros);

const pessoa = {
    nome: 'Daniel',
    idade: 21
}

const pessoaComTelefone ={
...pessoa, telefone: 11111111
}
const { nome } = pessoa;

// console.log(nome)

function imprimeDados({nome, idade}){
    console.log(nome, idade)
    
}
imprimeDados(pessoa)