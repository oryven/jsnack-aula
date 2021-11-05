const container = document.getElementById("container");

var bici = [

    {
        "brand" : "bianchi",
        "nome" : "Mountain bike 1",
        "peso" : "30 chili"
    },

    {
        "brand" : "Brinke Bike",
        "nome" : "Trail Bike",
        "peso" : "35 chili"
    },

    {
        "brand" : "Carrera",
        "nome" : "Mountain bike 2",
        "peso" : "40 chili"
    },

    {
        "brand" : "Cinelli",
        "nome" : "Trail Bike 2",
        "peso" : "30 chili"
    },

    {
        "brand" : "BH",
        "nome" : "Trail Bike 3",
        "peso" : "35 chili"
    },

    {
        "brand" : "Cipollini",
        "nome" : "Mountain bike 3",
        "peso" : "32 chili"
    },

    {
        "brand" : "Colnago",
        "nome" : "Mountain bike 3",
        "peso" : "30 chili"
    }

];

console.log(bici);


const nuovaBici = {

    "brand" : "Bmx",
    "nome" : "freestyle",
    "peso" : "20 chili"
};

const copiaNuovaBici = {...nuovaBici, "marce": 18};
console.log(nuovaBici);

bici.push(copiaNuovaBici);


let schedeBici = "";

for (let i = 0; i < bici.length; i++) {

    // let brands = bici[i].brand;
    // let nome = bici[i].nome;
    // let pesoBici = bici[i].peso;

    // destructuring

    const {brand, peso, nome} = bici[i];

    schedeBici +=`
        <div>${brand}</div>
        <div>${nome}</div>
        <div>${peso}</div>`;

container.innerHTML += schedeBici;

}