const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
        if(e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
});







/*
let gray = document.querySelector('#gray');
let white = document.querySelector('#white');
let blue = document.querySelector('#blue');
let yellow = document.querySelector('#yellow');
*/

/*
gray.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'grey';
})

white.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'white';
})

blue.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'blue';
})

yellow.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'yellow';
})
*/

