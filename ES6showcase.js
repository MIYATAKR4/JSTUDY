// 1. var, let e const
// todas as variáveis que forem declaradas entre chaves terão um escopo de bloco entre as chaves

// VAR = MANCHA O ESCOPO GLOBAL
var x = 10
var y = 15

if(y>10){
    var x = 5
    console.log(x); // usado para exibir informações ou mensagens no console
}
console.log(x);

// LET = NÃO MANCHA O GLOBAL, APENAS MUDA OS VALORES DAS CHAVES ENTRE OS BLOCOS
let a = 10
let b = 15

//exemplo 01 let
if (b>10){
    // as chaves dos blocos ficam aqui, entre os colchetes
    let a = 5
    console.log(a);
}
console.log(a);

// exemplo 02 let
// o i do FOR não alterou em nada o i que existe fora dele
i= 100
for (let i = 0; i<5; i++){ 
    console.log(i);
}
console.log(i);

//CONST = o mesmo que o let mas esta ATRIBUI VARIAVEIS DE VALORES CONSTANTES
const name = "miyatakra"

function logname(){
    const name = "miya"
    console.log(name);
}

// ================================================================================

// 2. arrow functions =>
const sum = function sum(a, b){
    return a + b;
}
// as arrow funcitons não têm nome, uma maneira de nomear elas é as colocar em uma variável.
const arrowSum = (a,b) => a + b;
    console.log(sum(5,5));
    console.log(arrowSum(5,5));

// arrow funciotn com bloco:
const greeting = name => {
    if (name){
        return "olá"+ " " + name + "!"
    } else {
        return "olá!"
    }
}
console.log(greeting("marinalva"));
console.log(greeting());

// quando não tem argumento na arrow function, pode usar como função tbm só que sem parâmetros
const testeArrow = () => console.log("testou");
testeArrow();

// THIS em arrow functions
const user = { //esse aqui é o objeto pai
    name: "Ka",
    sayUserName(){
         //precisamos fazer isso para dizer que o valor do objeto pai é o mesmo para os dois escopos de bloco.
        var self = this
        //nessa função aqui, se não tivermos colocado o comando acima, o objeto perderia o seu valor, já que o escopo de bloco é outro.
        //e o this na função anônima seria uma "window" pois não tem um objeto de contexto. Assume um valor global.
        setTimeout(function(){ 
            console.log(self) //aqui, a variável self tem o mesmo valor de this (que referencia o objeto pai 'user')
            console.log("Username:" + self.name) 
            /* o self guarda a referencia do objeto pai onde o parâmetro NAME existe, 
            e como a função anônima não está no escopo de bloco desse objeto, 
            colocamos self ao invés de user para podermos acessar o parâmetro nome. */
        }, 500);
    },

    /* AF: Nesse caso, não precisaríamos usar SELF ou THIS para acessar a propriedade NAME do objeto USER,
    porque a arrow function herda o valor de THIS do escopo em que foi definida, que é o objeto USER */
    sayUserNameArrow() {
        setTimeout(() => { 
            console.log(this)
            console.log("Username:" + this.name) 
        }, 700);
    }
}
/* user.sayUserName();
user.sayUserNameArrow();
 */

// ================================================================================
//3. filter(): é um método de array usado para filtrar os elementos que satisfaçam uma condição. Não muda os valores.
//passa por todos os elementos do array

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = array.filter((item) =>{
    let par = item % 2 == 0;
    return par;
});
console.log(pares);

//filter com condições booleanas
meses = [
    { mes: 'Janeiro', lucro: true },
    { mes: 'Fevereiro', lucro: false },
    { mes: 'Março', lucro: true },
    { mes: 'Abril', lucro: true },
    { mes: 'Maio', lucro: true },
    { mes: 'Junho', lucro: false },
    { mes: 'Julho', lucro: false },
    { mes: 'Agosto', lucro: true },
    { mes: 'Setembro', lucro: true },
    { mes: 'Outubro', lucro: false },
    { mes: 'Novembro', lucro: true },
    { mes: 'Dezembro', lucro: true }
];

const positivos = meses.filter((positivo) => positivo.lucro);
const negativos = meses.filter((negativos) => !negativos.lucro); // aqui ele pega os valores falsos por conta da !

console.log(positivos);
console.log(negativos);

// ================================================================================
//4. Map(): o map pode mudar o valor dos elementos do array mas não pode filtrar, então até os elementos não modificados retornam.

//colocando os produtos em promoção caso satisfazerem uma categoria.
produtos = [
    {name: 'Camisa', price: 40.00, category: 'Roupa'},
    {name: 'Fone', price: 25.00, category: 'Eletronico'},
    {name: 'Caneta', price: 10.00, category: 'Papelaria'},
    {name: 'Tênis', price: 60.00, category: 'Roupa'},
    {name: 'Jaqueta', price: 100.00, category: 'Roupa'}
];
produtos.map((item) => {
    if (item.category === 'Roupa'){
        item.onSale = true;
    }
})
console.log(produtos);

//aplicando desconto aos produtos
// spread operator '...' = copiar todas as propriedades e métodos desse objeto para um novo objeto
const sale30 = produtos.map((item) => {
    if (item.price >= 40.00) {
        let mod = item.price * 0.3
        let final = item.price - mod 
        return {...item, price: final};
    }
});
produtos = sale30;
console.log(produtos);

// ================================================================================
//5. Desestruction: consegue remover parte do objeto/array e armazena em uma var a parte 
// obtem a info do endereço das propriedades/elementos do array dentro da var

const frutas = ['limão', 'laranja', 'morango', 'uva'];
const [a1, a2, a3, a4] = frutas

console.log(a1);
console.log(a2, a3);

const produto = {
    nameProduct: 'mouse',
    price: 40.00,
    productCategory: 'periféricos',
    cor: 'roxo'
} 
// o desestruturador renomeia as propriedades e precisa ser atribuido ao objeto
const {nameProduct: nome, price: valor, productCategory: categoria, cor } = produto;

console.log(`O nome do produto é ${nome}, custa R$${valor} e está na categoria ${categoria}, tendo a cor ${cor}.`);


// ================================================================================
//6. Spread operator: constitui novos valores destes dados em outros arrays e objetos
// codigo pq da preguiça fazer tudo manualmente

const f1 = [1, 2, 3];
const f2 = [4, 5, 6];

const f3 = [...f1,...f2];
console.log(f3);

// objetos:
const carName = {name: 'Gol'};
const carBrand = {brand: 'VW'};
const carINFO = {km: 1000000, price: 50000};

const car = {...carName, ...carBrand, ...carINFO}
console.log(car);

// ==============================================================================
//7. CLASSES: Crucial para se trabalhar com orientação a objetos.
// constructor: inicia propriedadaes.
// propriedades: elementos que compõem um objeto.
// métodos: funções que os objetos utilizam.

class Product {
    constructor(name, price) {
        // nome obj criado = nome passado pelo constructor
        this.name = name
        this.price = price
    }
       // método:
    discount (tax){
        return this.price * ((100 - tax) / 100);
    }
}

const shirt = new Product('camisa', 60);
console.log(shirt.name);
console.log(shirt.discount(5));

// ==============================================================================
//7. Heranças:quando se extende uma classe para outra. Usa uma base p/ criar uma outra classe com um propósito diferente.
// extends: se refere à classe herdada
// super:  é usado dentro da classe filha pra chamar os métodos da classe pai.
// **lembrete: o this referencia o objeto que está sendo criado a partir dos parâmetros da classe em que está inserido. 
//   Os parâmetros são espaços para receber o valor de quando a função for chamada. 
//   O atributo é uma variável que pode armazenar diferentes valores dependendo da instância, tb chamado de o objeto.
//   quando quando chamamos(instanciamos) a classe e definimos seus próprios atributos e métodos. 

class ProductsWithAtt extends Product {
    constructor(name, price, colors){
        super(name, price); //herda os atributos da classe pai
        this.colors = colors // cria um atributo a partir dos parametros da classe
    }
    showColor(){ //método da classe, lista todas as cores do array
        console.log('as cores são:'); 
        this.colors.forEach(color => { //percorre todos os atributos dentro do array 'colors' da classe e retorna no console.
            console.log(color)
        });
    }
}

// new = usado para criar uma nova instância de classe
const hat = new ProductsWithAtt('chapéu', 30.00, ['azul', 'preto', 'vermelho', 'marrom', 'bege', 'branco']);
console.log(hat.name);
console.log(hat.discount(10));
hat.showColor();
