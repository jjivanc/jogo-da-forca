//Botões
const comecar = document.querySelector('#comecar');
const adicionar = document.querySelector('#adicionar');
const novo = document.querySelector('#novo');
const desistir = document.querySelector('#desistir');
const cancelar = document.querySelector('#cancelar');
const salvar = document.querySelector('#salvar');
//--------------------------
const page01 = document.querySelector('#page01');
const page02 = document.querySelector('#page02');
const page03 = document.querySelector('#page03');
//--------------------------
const words = [
    {palavra: 'mundo'},
    {palavra: 'macarrao'}
]

comecar.addEventListener('click', ()=> {
    console.log('comecar');
    page01.classList.add('hide');
    page02.classList.remove('hide');
});
adicionar.addEventListener('click', ()=> {
    console.log('adicionar');
    page01.classList.add('hide');
    page03.classList.remove('hide');
});
novo.addEventListener('click', ()=> {
    console.log('novo');
});
desistir.addEventListener('click', ()=> {
    console.log('desistir');
});
cancelar.addEventListener('click', ()=> {
    console.log('cancelar');
    page03.classList.add('hide');
    page01.classList.remove('hide');
});
salvar.addEventListener('click', ()=> {
    console.log('salvar');
});


console.log('ativo');