const display = document.querySelector('main');
const btn = document.querySelector('button');
const t1 = document.querySelector('#t1');
const t2 = document.querySelector('#t2');

let i = 1;

btn.addEventListener('click', function(){
    const par = document.createElement(t1.value);
    par.innerText = `${t2.value}`;
    par.addEventListener('click', function(){
        this.remove()
    })
    display.append(par);
    i = i + 1;
})