// // const carros = new Array("Fiat", "Ford", "Honda");

// // carros[22] = "Ferrari";

// // const paises = ["Brasil", "Estados Unidos", "Africa", "Portugal"];

// // paises[1] = "EUA";

// // const obj = {
// //   0: "Kevyn",
// //   1: "Lopes",
// //   2: "Teste",
// //   length: 3,
// // };

// // const objArray = Array.from(obj);

// // console.log(obj);

// // function Pessoas(nome, idade, cidade) {
// //   this.nome = nome;
// //   this.idade = idade;
// //   this.cidade = cidade;
// // }

// // const kevyn = new Pessoas("Kevym", 21, "Araraquara");
// // const leticia = new Pessoas("Leticia", 21, "Araraquara");

// // const novaArray = Array.of("Banana", "Maca", "Uva", "Pera", "Melancia");

// // console.log(novaArray);

// // const instrumentos = ["Guitarra", "Baixo", "Violao", "Meia Lua"];
// // instrumentos.sort();

// // console.log(instrumentos);

// // const numericos = [30, 20, 10, 23, 13];
// // numericos.sort();

// // console.log(numericos);

// const carros = ["Gol", "Palio", "i30", "VW", "Parati", "Ferrari", "Camaro"];

// carros.push("Vectra");

// console.log(carros);

// const transporte1 = ["Carro", "Moto"];
// const transacoes2 = ["Avião", "Barco"];

// const transportes = transporte1.concat(transacoes2);

// console.log(transportes);

// let htmlString = "<h2>Titulo Principal</h2>";

// htmlString = htmlString.split("h2");
// htmlString = htmlString.join("h1");

// console.log(htmlString);

// const linguagens = ["html", "css", "js", "php", "python"];

// linguagens.pop(1);
// const cloneLinguagens = linguagens.slice();

// console.log(linguagens);
// console.log(cloneLinguagens);

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável

const comidaRemovida = comidas.splice(0, 1);

console.log(comidas);
console.log(comidaRemovida);

// Remova o último valor de comidas e coloque em uma variável
const comidass = ["Pizza", "Frango", "Carne", "Macarrão"];
const comidaUltima = comidass.splice(3, 1);

console.log(comidaUltima);

// Adicione 'Arroz' ao final da array

const comidas1 = ["Pizza", "Frango", "Carne", "Macarrão"];

comidas1.unshift("Peixe", "Batata");
comidas1.push("Arroz");

console.log(comidas1);

// Adicione 'Peixe' e 'Batata' ao início da array

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes

console.log(estudantes.includes("Joana"));

// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split("section");
html = html.join("ul");
html = html.split("div");
html = html.join("li");

console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carroRemovido = carros.splice(3, 1);

console.log(carros);
console.log(carroRemovido);
