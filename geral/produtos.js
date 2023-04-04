//colocando os produtos em promoção caso satisfazerem uma categoria. Usando o método map()
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
const sale30 = produtos.map((item) => {
    if (item.price >= 40.00) {
        let mod = item.price * 0.3
        let final = item.price - mod 
        return {...item, price: final};
    }
});
produtos = sale30;
console.log(produtos);
