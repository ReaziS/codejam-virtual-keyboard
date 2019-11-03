const keyRow1 = [
    ['Backquote', 'ё', 'Ё','`','~'],
    ['Digit1','1','!','1','!'],
    ['Digit2','2','"','2','@'],
    ['Digit3','3','№','3','#'],
    ['Digit4','4',';','4','$'],
    ['Digit5','5','%','5','%'],
    ['Digit6','6',':','6','^'],
    ['Digit7','7','?','7','&'],
    ['Digit8','8','','8',''],
    ['Digit9','9','(','9','('],
    ['Digit0','0',')','0',')'],
    ['Minus','-','+','=','+'],
    ['Equal=','=','+','=','+'],
    ['Backspace','Backspace','Backspace','Backspace','Backspace'],

];
const keyRow2 = [
    ['Tab', 'Tab', 'Tab', 'Tab' , 'Tab'],
    ['KeyQ', 'й', 'Й', 'q' , 'Q'],
    ['KeyW', 'ц', 'Ц', 'e' , 'e'],
    ['KeyE', 'у', 'У', 'e' , 'E'],
    ['KeyR', 'к', 'К', 'r' , 'R'],
    ['KeyT', 'е', 'Е', 't' , 'T'],
    ['KeyY', 'н', 'Н', 'y' , 'Y'],
    ['KeyU', 'г', 'Г', 'u' , 'U'],
    ['KeyI', 'ш', 'Ш', 'i' , 'I'],
    ['KeyO', 'щ', 'Щ', 'o' , 'O'],
    ['KeyP', 'з', 'З', 'p' , 'P'],
    ['BracketLeft', 'х', 'Х', '[' , '{'],
    ['BracketRight', 'ъ', 'Ъ', ']' , '}'],
    ['Backslash',' U+2216', '|', '/' , 'Q'],
]
const keyRow3 = [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock' , 'CapsLock'],
    ['KeyA', 'ф', 'Ф', 'a' , 'A'],
    ['KeyS', 'ы', 'Ы', 's' , 'S'],
    ['KeyD', 'в', 'В', 'd' , 'D'],
    ['KeyF', 'а', 'А', 'f' , 'F'],
    ['KeyG', 'п', 'П', 'g' , 'G'],
    ['KeyH', 'р', 'Р', 'h' , 'H'],
    ['KeyJ', 'о', 'О', 'j' , 'J'],
    ['KeyK', 'л', 'Л', 'k' , 'K'],
    ['KeyL', 'д', 'Д', 'l' , 'L'],
    ['Semicolon', 'ж', 'Ж', ';' , ':'],
    ['Quote', 'э', 'Э', '' , '"'],
    ['Enter', 'Enter', 'Enter', 'Enter' , 'Enter'],
]
const keyRow4 = [
    ['ShiftLeft', 'ShiftLeft', 'ShiftLeft', 'ShiftLeft' , 'ShiftLeft'],
    ['KeyZ', 'я', 'Я', 'z' , 'Z'],
    ['KeyX', 'ч', 'Ч', 'x' , 'X'],
    ['KeyC', 'с', 'С', 'с' , 'С'],
    ['KeyV', 'м', 'М', 'v' , 'V'],
    ['KeyB', 'и', 'И', 'b' , 'B'],
    ['KeyN', 'т', 'Т', 'n' , 'N'],
    ['KeyM', 'ь', 'Ь', 'm' , 'M'],
    ['Comma', 'б', 'Б', ',' , '<'],
    ['Period', 'ю', 'Ю', '.' , '>'],
    ['Slash', ',', '.', '/' , '?'],
    ['ShiftRight', 'ShiftRight', 'ShiftRight', 'ShiftRight' , 'ShiftRight'],
]


let localization = true;
let firstStr = [];
let keyRow1Space = document.getElementById('keyRow1');
let keyRow2Space = document.getElementById('keyRow2');
let keyRow3Space = document.getElementById('keyRow3');
let keyRow4Space = document.getElementById('keyRow4');
let textInput = document.getElementById('text');
let isShift = false;
document.addEventListener('keydown', (e) => {
    if(e.key == 'Shift') {isShift = true;}
    if(localization) {
        console.log(e.code);
            let currenButton;
            currenButton = findButton(e.code);
            currenButton.classList.add('pressed');
            textInput.value += e.key;
    }        
});
document.addEventListener('keypress', (e) => {
    e.preventDefault();
})
function findButton(button) {
    return document.getElementById(button);
    
}
document.addEventListener('keyup', (e) => {
    isShift == false;
    let currenButton;
    currenButton = findButton(e.code);
    currenButton.classList.remove('pressed');
})
function generateButtons() {
    generateRowOne();
    generateRowTwo();
}
generateButtons();

function generateRowOne() {
    keyRow1.forEach(button => {
        let z = document.createElement('div'); 
        firstStr.push(z)
        z.innerHTML = button[1];
        z.setAttribute('id', button[0]);
        z.addEventListener('mousedown', () => {
            z.classList.add('pressed');
            textInput.value += button[1];
        });
        z.addEventListener('mouseup', () => {
            z.classList.remove('pressed');
        });
        keyRow1Space.appendChild(z);
        
    })
}
function generateRowTwo() {
    keyRow2.forEach(button => {
        let z = document.createElement('div'); 
        firstStr.push(z)
        z.innerHTML = button[1];
        z.setAttribute('id', button[0]);
        z.addEventListener('mousedown', () => {
            z.classList.add('pressed');
            textInput.value += button[1];
        });
        z.addEventListener('mouseup', () => {
            z.classList.remove('pressed');
        });
        keyRow2Space.appendChild(z);
        
    })
}