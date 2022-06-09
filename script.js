const req1 = document.querySelector(' #requisito1 '); //NÃO ALTERAR!
const req2 = document.querySelector(' #requisito2 '); //NÃO ALTERAR!
const req3 = document.querySelector(' #requisito3 '); //NÃO ALTERAR!
const req4Crescente = document.querySelector(' #crescente4 ');//NÃO ALTERAR!
const req4Decrescente = document.querySelector(' #decrescente4 '); //NÃO ALTERAR!
const req5 = document.querySelector(' #requisito5 '); //NÃO ALTERAR!
const req6 = document.querySelector(' #requisito6 '); //NÃO ALTERAR!
const req7 = document.querySelector(' #requisito7 '); //NÃO ALTERAR!
const date = new Date();//NÃO ALTERAR!
const anoAtual = date.getFullYear();//NÃO ALTERAR!

let historicoDeResultado = [];//NÃO ALTERAR!
let requisito1 = 0;//NÃO ALTERAR!
let requisito2 = [];//NÃO ALTERAR!
let requisito3 = [];//NÃO ALTERAR!
let req4crescente = [];//NÃO ALTERAR!
let req4decrscente = [];//NÃO ALTERAR!
let requisito6 = '';//NÃO ALTERAR!
let requisito7 = [];//NÃO ALTERAR!



// Requisito 1
function quantity() {
  // Faça seu codigo aqui! 
  // #Dica o metodo length é seu aliado neste caso.
  requisito1 =  historicoDeResultado.length //Seu código aqui
  req1.innerHTML = `Quantidade de posições ${requisito1}`; //NÃO ALTERAR!
};


// Requisito 2
function firstLastPosition() {
  for (let index = 0; index < historicoDeResultado.length; index++) {
    requisito2 = [];
    requisito2 = [historicoDeResultado[0], historicoDeResultado[historicoDeResultado.length - 1]]; //Seu código aqui
  }
  req2.innerHTML = `Primeiro e ultimo item [ ${requisito2} ]`; //NÃO ALTERAR!
}


// Requisito 3
function pushMethod() {
  requisito3.push(anoAtual) //Seu código aqui
  req3.innerHTML = `push [ ${requisito3} ]`; //NÃO ALTERAR!
}


// Requisito 4
function sortMethod() {
  let sortCrescente = req4crescente.sort((a, b) => a - b); //Seu código aqui
  let sortDecrescente = req4decrscente.sort((a, b) => b - a); //Seu código aqui
  req4Crescente.innerHTML = `Sort Crescente[ ${sortCrescente} ]`;//NÃO ALTERAR!
  req4Decrescente.innerHTML = `Sort decresencete [ ${sortDecrescente} ]`;//NÃO ALTERAR!
}


// Requisito 5
function arrayPrint() {
  //Seu código aqui
  for (let index = 0; index < historicoDeResultado.length; index += 1) {
    console.log(historicoDeResultado);
  }
  req5.innerHTML = `Todas os valores ${historicoDeResultado}`//NÃO ALTERAR!
}


// Requisito 6
function conditionCase() {
  //Seu código aqui
  if (historicoDeResultado[historicoDeResultado.length - 1] >= 20) {
    console.log(`o numero é maior ou igual a 20`);//Seu código aqui
    
    requisito6 = 'maior ou igual a 20';//NÃO ALTERAR!
    req6.innerHTML = `Condicional if else: ${requisito6}`;//NÃO ALTERAR!  
  } else {
    console.log(`o numero é menor que 20`);//Seu código aqui
    
    requisito6 = 'menor que 20';//NÃO ALTERAR!
    req6.innerHTML = `Condicional if else: ${requisito6}`;//NÃO ALTERAR!
  }
}


// Requisito 7
function intermediateNumbers() {
  let numeros = [];//NÃO ALTERAR!
  //Seu código aqui
  for (let index = 0; index < historicoDeResultado.length; index++) { //Seu código aqui
    if (historicoDeResultado[index] > 10 && historicoDeResultado[index] < 20) {//Seu código aqui
      numeros.push(historicoDeResultado[index]) //Seu código aqui
    }
  }
  return req7.innerHTML = `Numeros entre 10 e 20: ${numeros}`;//NÃO ALTERAR!
};
































































































































































































































































































































































































































const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .igual ');
const arrayHistorico = document.querySelector(' #arrayHistorico ');

function insert(valor) {
  resultado.innerHTML += valor;
};

function clean() {
  resultado.innerHTML = ' ';
  arrayHistorico.innerHTML = 'Histórico = [ ];';
  historicoDeResultado = [];
  req1.innerHTML = 'Quantidade de Itens:';
  req2.innerHTML = 'Primeiro e ultimo item: [ ];';
  req3.innerHTML = 'Metodo PUSH():';
  req4Crescente.innerHTML = 'SORT() crescente:';
  req4Decrescente.innerHTML = 'SORT() decrescente:';
  req5.innerHTML = 'Imprimindo Array:';
  req6.innerHTML = 'Condicional if else:';
  req7.innerHTML = 'Numeros entre 10 e 20:'
};

function backspace() {
  if (resultado.textContent) {
    let result = document.getElementById('resultado').innerHTML
    resultado.innerHTML = result.substring(0, result.length - 1);
  };
};

function confirma() {
  if (resultado.textContent != 'Erro') {
    let resposta = document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    historicoDeResultado.push(resposta);
    requisito3 = [...historicoDeResultado];
    req4crescente = [...historicoDeResultado];
    req4decrscente = [...historicoDeResultado];
    arrayHistorico.innerHTML = `Histórico = [ ${historicoDeResultado} ];`;
    quantity();
    firstLastPosition();
    pushMethod();
    sortMethod();
    arrayPrint();
    conditionCase();
    intermediateNumbers();
    return resposta
  };
};
