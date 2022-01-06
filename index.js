let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('buttons'));

let buttonsb = Array.from(document.getElementsByClassName('buttonsb'));

// console.log(buttons);
buttons.map(button => {
    button.addEventListener('click', (e) => {
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'Del':
                display.innerText = display.innerText.slice(0, -1);
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

buttonsb.map(buttond => {
    buttond.addEventListener('click', (e) => {
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'Reset':
                display.innerText = '';
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;    
            default:
                display.innerText += e.target.innerText;
        }
    });
});