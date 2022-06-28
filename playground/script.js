const button_changeColor = document.getElementById('change_color');
const button_changeText = document.getElementById('change_text');
const button_changeBG = document.getElementById('change_BG');


let changeText_index = 0;
let changeColor_index = 0;
let changeBG_index = 0;


button_changeColor.addEventListener('click', color);
button_changeText.addEventListener('click', text);
button_changeBG.addEventListener('click', bg);
function color() {


    if (changeColor_index % 2 == 0) {
        button_changeColor.style.backgroundColor = "red";
        changeColor_index++;
    }
    else {
        button_changeColor.style.backgroundColor = "blue";
        changeColor_index++;

    }
}

function text() {
    if (changeText_index % 2 == 0) {
        button_changeText.innerHTML = 'texto trocado';
        changeText_index++;
    }
    else {
        button_changeText.innerHTML = ' trocar texto';
        changeText_index++;
    }


}

function bg() {
    if (changeBG_index % 2 == 0) {
        document.body.style.backgroundImage = "url(./images/background2.jpg)";
        changeBG_index++;
    }
    else {
        document.body.style.backgroundImage = "url(./images/background1.jpg)";
        changeBG_index++;
    }
}

function music() {
    document.getElementById('song').play();

}