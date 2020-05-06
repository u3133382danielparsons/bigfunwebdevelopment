let input = document.querySelector('input');
// let labelClass = "";
// let inputState = false;
let labelCounter = 0;
let cross = document.querySelector('.cross');
let plus = document.querySelector('.plus');
let menuLabel = document.getElementById('menuLabel');
let typeslist = document.querySelector('.types-list');
let listCounter = 0;
let listitems = document.getElementsByClassName('category');

menuLabel.addEventListener('click', event => {
    if (labelCounter % 2) {
        menuLabel.classList.remove("label_active");
        inputstate = !input.checked;
        labelCounter += 1;
    } else {
        menuLabel.classList.add("label_active");
        inputstate = !input.checked;
        labelCounter++;
    }
});

plus.addEventListener('click', event => {
    input.classList.remove("cross_active");
    input.classList.add('plus_active');
});

cross.addEventListener('click', event => {
    input.classList.remove('plus_active');
    input.classList.add("cross_active");
});
Array.from(listitems).forEach(function (listitem) {
    listitem.addEventListener('click', event => {
        typeslist.classList.add('list-clicked');
        if (listCounter % 2) {
            typeslist.classList.remove("odd");
            typeslist.classList.add("even");
        } else {
            typeslist.classList.remove("even");
            typeslist.classList.add("odd");
        }
        listCounter++;
    });
});
  
