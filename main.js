const display = document.querySelector('main');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const par = document.createElement('p');
    par.innerText = 'nowy paragraf';
    display.append(par);
})