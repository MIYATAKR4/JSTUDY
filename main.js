// sintaxe do que saber em javascript
// ----------------------------------------------------------
const escrevenapagina = (texto) => {
    document.body.innerHTML += texto + "<br>";
  };

const quebralinha = () => {
    document.body.innerHTML +=  "<br>";
}

 escrevenapagina("<h4>NULLISH COALESING OPERATOR</h4>");
//1. retorna null pra quando n tem valores significativos

// operador OU
 // 0, '', [], false, undefined => falsy, valores não válidos para o operador OU
 const idade0 = 0; 
 escrevenapagina('sua idade é:' + " " + (idade0 || 'não informado'));


// nullish coalesing operator
// null, undefined... sem um valor significativo.
const idade1 = 0; 
escrevenapagina('sua idade é:' + " " +(idade1 ?? 'não informado'));



// ============================================================

escrevenapagina("<h4>OBJETOS</h4>");
//2. estruturas de dados onde conseguimos armazenar conjunto de chave e valor
const user = { 
    name: 'Catarina',
    nickname: 'Miya',
    idade: 20,
    endereco: {
        street: 'Rua Limão',
        number: 345,

    },
};

escrevenapagina(('nome' in user));
escrevenapagina((Object.keys(user)));
escrevenapagina((Object.values(user))); // não entende como printa os valores dentro de um outro obj na tela

// JSON: é usado para converter um objeto JavaScript em uma string JSON que pode ser armazenada ou enviada para outro lugar.
//arquivo, banco de dados, servidor, etc.
escrevenapagina(JSON.stringify(Object.values(user)));
escrevenapagina(JSON.stringify(Object.entries(user))); // retorna um vetor com vários vetores dentro, e cada um deles tem duas info dentro (chave e valor)

// ==========================================================

escrevenapagina("<h4>DESESTRUTURÇÃO</h4>");
//3. consegue remover parte do objeto para uma var a parte (obter info do endereço dentro da var). 

// const adress = user.adress 
// nome da var igual, pode colocar assim: (isso é desestruturação)
// const {endereco, idade} = user

// dá para renomear as variáveis, é só declarar x: y
const { endereco: adress, idade: age } = user;
// dá pra setar valores default para variáveis que não tem valor válido dentro do objeto
const {nickname = "Kosh"} = user;
// mas se tem, ele mostra o valor dentro do objeto, a declaração acima é inválida.

escrevenapagina(JSON.stringify({adress, age, nickname}));

// a desestruturação também pode ser usada em funções: Pode ser utilizada em todo lugar que tenhamos referencia para um objeto

function showAge(user) {
    return user.idade;
}

// pode colocar chaves no lugar do objeto e desestruturar o usuário.

//function showAge({idade}) {
//    return idade
// }

;
escrevenapagina(showAge(user));

// ================================================================================
escrevenapagina("<h4>REST OPERATOR</h4>");
// 4. o restante das info do usuário sem ser o nome que não foi buscada... tem um jeito de buscar elas?
// ao desestruturar uma variável, para pegar o resto, utiliza-se "...rest"

const { name, ...rest } = user;

// aqui, vai imprimir todo o "resto" menos o nome

escrevenapagina(JSON.stringify(rest));

// o rest é um operador que pode ser utilizado também em arrays, junto com a desestruturação
const array = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest2] = array;

// sem desestruturação: const first = [1];
// escrevenapagina(JSON.stringify(first));

;
escrevenapagina(JSON.stringify({ first, second, ...rest2 }));

//como pular itens do array?
// const [first, , ...rest2] = array; -> deixa o espaço em vírgula sem nada

// ========================================================================

escrevenapagina("<h4>SHORT SYNTAX</h4>");

const nome = "Catarina";
const idade = 20;
// o nome da propriedade é o mesmo nome da variável que armazena o valor da propriedade
// não precisa atribuir com os dois pontos, basta colocar o nome da var ali

const user_ex = {
    nome,
    idade,
};

escrevenapagina(JSON.stringify(user_ex));


// ========================================================================
escrevenapagina("<h4>OPTIONAL CHANGING</h4>");
//5. quando tem que lidar com possiveis valores de um obj for nulo ou inexistente

// observe a func abaixo
 const user_2 = { 
    name: 'Catarina',
    age: 20,
    adress: {
        street: 'Rua Limão',
        number: 123,
        zip: {
            code: 93874982374,
            city: 'Laranja',
         },
    },
};
// escrevenapagina(JSON.stringify(user_2.adress.number)); -----> dá erro de sintaxe pq n existe 
// quando tenta acessar uma propriedade de um obj que pode n existir, é bom saber trabalhar com erros.

// usamos a seguinte sintaxe: escrevenapagina(JSON.stringify(user_2.adress ? user_2.adress.street)) : 'não informado'
// a interrogação = if (true)
// os dois pontos = else (if falso) e mostra a mensagem 'não informado'
// essa sintaxe é boa se for simples, mas se tiver muitos elementos é trabalhoso demais.

// com o OPTIONAL CHANGING fica muito mais fácil de trabalhar:

escrevenapagina(JSON.stringify(user_2.adress?.zip?.code ?? 'Não informado'));
// coloca um ponto de interrogação antes do ponto que acessa a propriedade interna do obj em cada prop que pode n existir.
// melhor dizendo: vai tentar acessar o adress do user_2 e se não existir nem continua lendo as outras condições e já mostra a msg
// também acrescenta o operador NULLISH COALESING para caso a tal da propriedade for inexistente, mostrando uma msg.

// também dá para atribuir uma propriedade a uma variável
const key = 'name';

;
// o valor da key é name, então qual é o objeto da propriedade name? User_2:
escrevenapagina(JSON.stringify(user_2[key]));
// se o nome não existir, não vai dar erro... porque não é um objeto aninhado (obj dentro do obj)
// se colocar uma info que não tem, retorna 'undefined' 

//===============================================================================================
escrevenapagina("<h4>MÉTODOS DE ARRAY</h4>");

const seq = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

//6. métodos para percorrer array:

escrevenapagina("<h4>for...of</h4>");
//for... of = o loop percorre o array e a cada iteração atribui o valor do elemento a var i
// A partir disso, dá pra utilizar o valor dessa variável da forma que quiser dentro do loop.
for (const i of array) {
    document.body.innerText += i ;
}

escrevenapagina(" ")
escrevenapagina("<h4>forEach()</h4>");
//forEach() = faz a chamada da função para cada elemento do array e passa o valor dos elementos como parâmetro para a função callback.
//no caso, a função callback é 'item' então todos os elementos receberão esse parâmetro. 
//Dentro da função de callback, está sendo executada a operação de adicionar o 'item' ao conteúdo da página usando a propriedade innerText.
array.forEach(item => {
    document.body.innerText += item ;
})

escrevenapagina("<h4>map()</h4>");
// map() = útil para quando se quer manipular os itens desse array, por exemplo, retornar os itens multiplicados por 2 (criando um novo array)
// aqui, a função callback (item) recebe cada elemento do array original como parâmetro, e realiza a operação
// retornando os itens do array modificados em um novo array. (sempre do mesmo tamanho que o original. Não dá pra filtrar.)
const dobro = array.map(item => {
    return item * 2;
});
escrevenapagina(dobro);

//também dá para criar condicionais dentro do map()
const par = array.map(item =>{
    // módulo do numero/2 = se for 0, é par
    if (item % 2 == 0) {
    return item * 10;
    } else {
    return item;
    }
})
escrevenapagina(par);

escrevenapagina("<h4>filter()</h4>");
// filter() =  filtra um array, busca uma seleção de campos do array. Não pode mudar os valores.
// ele simplesmente retorna um pedaço do array caso a condição especificada for verdadeira (ou falsa, se tiver)
const filtrapar = array.filter(item => { 
    let pares = item % 2 == 0;
    return pares;
})
escrevenapagina(filtrapar);
const filtraimpar = array.filter(item => { 
    let impares = item % 2 != 0;
    return impares;
})
escrevenapagina(filtraimpar);

// também pode concatenar os métodos, por exxemplo, filtrar o array e depois multiplicar os valores filtrados.
const valores = array
    .filter (item => item % 2 == 0)
    .map(item => item * 10)
escrevenapagina(valores);

escrevenapagina("<h4>every()</h4>");
// every() = retorna um valor booleano. Retorna true se TODOS os itens satisfazem alguma condição, se ao menos um não satisfaz, false.
const numeros = array.every(item => typeof item == 'number');
escrevenapagina(numeros);

escrevenapagina("<h4>some()</h4>");
//some() =  verifica se pelo menos um item satisfaz a condição
const umitem = array.some(item => typeof item != 'number');
escrevenapagina(umitem);

escrevenapagina("<h4>find()</h4>");
// find() = encontra um item dentro desse array. Encontra o PRIMEIRO item que satisfaça essa condição. 
// se não tiver algo que satisfaça, retorna undefined.
const itempar = array.find(item =>  item % 2 == 0);
escrevenapagina(itempar);

escrevenapagina("<h4>findIndex()</h4>");
//findindex() =  retorna o índice daquele valor no array
const indicepar = array.findIndex(item =>  item % 2 == 0);
escrevenapagina(indicepar);

escrevenapagina("<h4>reduce()</h4>");
// reduce() = usado quando pegar o array e criar uma nova estrutura de dados baseado nesse array.
// reduz o array a algo, pode ser qualquer coisa.
// deve retornar um novo valor para o parâmetro que constrói o novo array (acc)
const soma = array.reduce((acc, item) => {
    escrevenapagina(acc + ',' + item );
    return acc + item; // aqui, o acumulador vai pegar o valor inicial (0) e ir se somando com o valor de cada item do array (1, 2, 3...)
},0 ) // aqui passa o valor que o novo array deve começar (o tal do acumulator)

escrevenapagina("<h4>TEMPLATE LITERALS</h4>");
//7. 