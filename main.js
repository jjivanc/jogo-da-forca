const btn01 = document.querySelector('#btn01');
const btn02 = document.querySelector('#btn02');
const cancelar = document.querySelector('#cancelar')

btn01.addEventListener('click', ()=> {
    console.log('BTN01')
})
btn02.addEventListener('click', ()=> {
    console.log('BTN02')
})
cancelar.addEventListener('click', ()=> {
    console.log('cancelar')
    window.location.href = '#page01'
})
console.log('ativo')