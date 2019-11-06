//import { rows } from './keyboardInit';

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
    ['Equal','=','+','=','+'],
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
    ['Backslash','  &#92;', '|', '/' , 'Q'],
];
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
];
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

    ['ArrowUp', '&#8593;', '&#8593;', '&#8593;' , '&#8593;'],
    ['ShiftRight', 'ShiftRight', 'ShiftRight', 'ShiftRight' , 'ShiftRight'],


];
const keyRow5 = [
    ['ControlLeft', 'ControlLeft', 'ControlLeft', 'ControlLeft' , 'ControlLeft'],
    ['MetaLeft', 'Win', 'Win', 'Win' , 'Win'],
    ['AltLeft', 'AltLeft', 'AltLeft', 'AltLeft' , 'AltLeft'],
    ['Space', 'Space', 'Space', 'Space' , 'Space'],
    ['ControlRight', 'ControlRight', 'ControlRight', 'ControlRight' , 'ControlRight'],

    ['ArrowLeft', '&#8592;', '&#8592;', '&#8592;' , '&#8592;'],
    ['ArrowDown', '&#8595;', '&#8595;', '&#8595;' , '&#8595;'],
    ['ArrowRight', '&#8594;', '&#8594;', '&#8594;' , '&#8594;'],

];

/* INIT BODY */

//main section
let bodyInit = document.getElementsByTagName('body')[0];
let mainSection = document.createElement('section');
mainSection.setAttribute('class', 'keyboard');
bodyInit.appendChild(mainSection);
//text area
let textArea = document.createElement('textarea');
textArea.setAttribute('id', 'text');
mainSection.appendChild(textArea);
//main div 
let mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'workspace');
mainDiv.setAttribute('class', 'keyboard-wrapper');
mainSection.appendChild(mainDiv);
//keyboard rows
let attributeArr = ['first-line', 'second-line', 'third-line', 'fourth-line', 'fifth-line'];
for(let i = 0; i< 5; i++) {
    let kRow = document.createElement('div');
    kRow.setAttribute('id', `keyRow${i+1}`);
    kRow.setAttribute('class', attributeArr[i]);
    mainDiv.appendChild(kRow);
}


let keyRow1Space = document.getElementById('keyRow1');
let keyRow2Space = document.getElementById('keyRow2');
let keyRow3Space = document.getElementById('keyRow3');
let keyRow4Space = document.getElementById('keyRow4');
let keyRow5Space = document.getElementById('keyRow5');
/* every row goes to array */
let keyboardStrings = [keyRow1,keyRow2,keyRow3,keyRow4,keyRow5];
let keyboardStringWrapper = [keyRow1Space, keyRow2Space, keyRow3Space, keyRow4Space, keyRow5Space];

/* Localization   true = russian false = english */
let localization = Boolean;
if(localStorage.getItem('localization')) {
    localization =  eval(localStorage.getItem('localization'));
 } else {
     localization = true;
 }
let textInput = document.getElementById('text');
//let workArea = document.getElementById('workspace');
let isShift = false;
let prevButton = '';
document.addEventListener('keydown', (e) => {
    if(e.key == 'Shift') {
        isShift = true;
        generateButtons(localization);
        addAnimation(e, false);
        e.preventDefault();
        
    } else if(e.key == 'CapsLock') {
        isShift = !isShift;
        generateButtons(localization);
        isShift ? addAnimation(e, false): removeAnimation(e, false);
        e.preventDefault();
    } else if (e.key == 'Tab') {
        textInput.value += '   ';
        addAnimation(e, false);
    } else if (e.key == 'Backspace') {
        textInput.value = textInput.value.slice(0,-1);
        addAnimation(e, false);
    } else if (e.key == 'Control') {
        addAnimation(e, false);
    } else if (e.key == 'Alt') {
        if (prevButton == 'Shift') {
            localization = !localization;
            localStorage.setItem('localization', localization);
        }
    } else if (e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
        addAnimation(e, false);
    } else if (e.key == 'Enter') {
        textInput.value += '\n';
    } else {
        addAnimation(e, true);
    }
    prevButton = e.key;
});
document.addEventListener('keyup', (e) => {
    if(e.key == 'Shift') {
        isShift = false;
        generateButtons(localization);
        removeAnimation(e);

    } else if(e.key == 'CapsLock') {
        e.preventDefault();
    } else {
        removeAnimation(e);
    } 
  
});
document.addEventListener('keypress', (e) => {
   
    e.preventDefault();
});
function addAnimation(e, isDraw) {
    let currenButton;
        currenButton = document.getElementById(e.code);
        currenButton.classList.remove('pressed-animation-back');
        currenButton.classList.add('pressed-animation');
        currenButton.addEventListener('animationend', () => {
            currenButton.classList.remove('pressed-animation');
            currenButton.classList.add('pressed');
        });
        isDraw ? textInput.value += e.key : textInput.value;  
}

function removeAnimation(e) {
    let currenButton;
        currenButton = document.getElementById(e.code);
        currenButton.classList.remove('pressed-animation');
        currenButton.classList.add('pressed-animation-back');
        currenButton.addEventListener('animationend', () => {
            currenButton.classList.remove('pressed-animation-back');
            currenButton.classList.remove('pressed');
        });
}
let btns = [];
function generateButtons(localization) {
    keyboardStrings.map((keyboardString, i) => {
    keyboardStringWrapper[i].innerHTML = '';
        keyboardString.forEach((button) => {
            let z = document.createElement('div'); 
            if (localization) {
                if (isShift) {
                    z.innerHTML = button[2];
                    mouseDown(button[2]);
                } else {
                    z.innerHTML = button[1];
                    mouseDown(button[1]);
                }
            } else {
                if (isShift) {
                    z.innerHTML = button[4];
                    mouseDown(button[4]);
                } else {
                    z.innerHTML = button[3];
                    mouseDown(button[3]);

                }
            } 

            
            z.setAttribute('id', button[0]);
            /* ADD EVENTS */
            function mouseDown(param) {
                z.addEventListener('mousedown', () => {
                    if (param == 'ShiftLeft' || param == 'CapsLock') {
                        isShift = !isShift;
                        generateButtons(localization);
                        isShift ? addAnimation({code: param}, false) : removeAnimation({code: param}, false);
                    } else if (param == 'Space') {
                        textInput.value += ' ';
                        addAnimation({code: param}, false);
                    } else if (param == 'Tab') {
                        addAnimation({code: param}, false);
                        textInput.value += '  ';
                    } else if (param == 'Enter') {
                        addAnimation({code: param}, false);
                        textInput.value += '\n';
                    } else if (param == 'Backspace') {
                        textInput.value = textInput.value.slice(0,-1);
                    } else if (param == 'ControlLeft' || param == 'ControlRight' || param == 'Win' || param == 'AltLeft' || param == 'ShiftRight' || param == '&#8593;' || param == '&#8595;' || param == '&#8592;' || param == '&#8594;') {
                        z.classList.add('pressed');
                    } else {
                        z.classList.add('pressed');
                        textInput.value += param;
                    }
                });
                z.addEventListener('mouseup', () => {
                    if (param == 'Enter') {
                        removeAnimation({code: param});
                    } else if (param == 'Space') {
                        removeAnimation({code: param});
                    }else z.classList.remove('pressed');
                });
            }
            
            /* Append node to DOM */
            btns.push(z);
            keyboardStringWrapper[i].appendChild(z);
        });
    });
}
generateButtons(localization);