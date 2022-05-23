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
const letras = document.querySelector('.letras')
const palavra = document.querySelector('#palavra')
const novaPalavra = document.querySelector('#addNew')
//--------------------------
const words = ['mundo','rato']
var contador = 1
var sorteado = ''
function play(){
    sorteador()
    separador = sorteado.split('');
    console.log('comecar');
    page01.classList.add('hide');
    page02.classList.remove('hide');
    
    for (var i = 0; i < separador.length; i++ ){
        //console.log(i)
        var div = document.createElement('div');
        var img = document.createElement('img');
        var p = document.createElement('p');
        p.classList.add('visibility');
        p.setAttribute('id',`letra-${i}`)
        p.textContent = separador[i]
        img.src = './images/Letter3.png';
        letras.appendChild(div)
        div.appendChild(p)
        div.appendChild(img)
    };
    console.log(separador);
};
comecar.addEventListener('click', play);
document.addEventListener('keydown', (event) =>{
    const keyName = event.key;
    comparador(keyName);
});
function comparador(item){
    var acertou = false;
    for(var i=0;i<separador.length;i++){
        if(separador[i] == item){
            var letra = letras.querySelector('#letra-'+i);
            letra.classList.remove('visibility');
            acertou = true
            console.log('letra certa');
        }else{
            /*var stick = document.querySelector('#stick')
            stick.src = `./images/stick-man${contador}.svg`
            contador++
            console.log(contador)*/
        }
    };
    if(!acertou){
        console.log('errou')
        var stick = document.querySelector('#stick')
        stick.src = `./images/stick-man${contador}.svg`
        contador++
    }
    if(contador > 6){
        alert('perdeu Playboy')
    };
};
adicionar.addEventListener('click', ()=> {
    console.log('adicionar');
    page01.classList.add('hide');
    page03.classList.remove('hide');
});
novo.addEventListener('click', ()=> {
    console.log('novo');
    letras.innerHTML = ''
    var stick = document.querySelector('#stick')
    stick.src = `./images/stick-man0.svg`
    contador = 1
    play();
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
    var adicionarPalavra = novaPalavra.value
    words.push(adicionarPalavra)
    console.log(adicionarPalavra)
    console.log('salvar');
    play();
    page03.classList.add('hide');
});
function sorteador(){
    var numero = Math.floor(Math.random() * words.length);
    sorteado = words[numero]
    console.log(numero)
};


console.log('ativo');