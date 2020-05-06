let flex_items = document.getElementsByClassName('flex__item');
let flex_items_length = flex_items.length;

if ((flex_items.length % 2 !== 0) || (flex_items.length % 3 !== 0) || (flex_items.length % 4 !== 0)) {
    window.addEventListener("resize", resizeAddClasses);
    resizeAddClasses();
}


function resizeAddClasses() {  
    let resizeAddClassWidth = document.documentElement.clientWidth;
    if ((resizeAddClassWidth < 918) && (resizeAddClassWidth > 625) && (flex_items.length % 2 !== 0)) {
        oddCols();   
    }

    if ((resizeAddClassWidth < 1210) && (resizeAddClassWidth > 917) && (flex_items.length % 3 !== 0)) {
        notDivisibleByThree();
    }

    if ((resizeAddClassWidth > 1209) && (flex_items.length % 4 !== 0)) {
        if (flex_items[flex_items.length - 1].classList.contains('zeroFlexGrow')) {
            flex_items[flex_items.length - 1].classList.remove('zeroFlexGrow')
        }
        if (flex_items[flex_items.length - 2].classList.contains('zeroFlexGrow')) {
            flex_items[flex_items.length - 2].classList.remove('zeroFlexGrow')
        }
        if (flex_items[flex_items.length - 3].classList.contains('zeroFlexGrow')) {
            flex_items[flex_items.length - 3].classList.remove('zeroFlexGrow');
        }
        notDivisibleByFour();
    }

}

function oddCols() {
    if (flex_items.length % 2 !== 0) {
        if (!(flex_items[flex_items.length - 1].classList.contains('zeroFlexGrow'))) {
            flex_items[flex_items.length - 1].classList.add('zeroFlexGrow');
        }
        if (flex_items[flex_items.length - 2].classList.contains('zeroFlexGrow')) {
            flex_items[flex_items.length - 2].classList.remove('zeroFlexGrow')
        }
        if (flex_items[flex_items.length - 3].classList.contains('zeroFlexGrow')) {
            flex_items[flex_items.length - 3].classList.remove('zeroFlexGrow');
        }
    }
    window.addEventListener("resize", resizeTiles);
    resizeTiles();
}

function notDivisibleByThree() {
    if ((flex_items.length -1) % 3 == 0) {
        if (!(flex_items[flex_items.length - 1].classList.contains('zeroFlexGrow'))) {
            flex_items[flex_items.length - 1].classList.add('zeroFlexGrow');
            if (flex_items[flex_items.length - 2].classList.contains('zeroFlexGrow')) {
                flex_items[flex_items.length - 2].classList.remove('zeroFlexGrow')
            }
            if (flex_items[flex_items.length - 3].classList.contains('zeroFlexGrow')) {
                flex_items[flex_items.length - 3].classList.remove('zeroFlexGrow')
            }
        }
            
    } else {
        if (!(flex_items[flex_items.length - 1].classList.contains('zeroFlexGrow'))) {
            flex_items[flex_items.length - 1].classList.add('zeroFlexGrow');
        }
        if (!(flex_items[flex_items.length - 2].classList.contains('zeroFlexGrow'))) {
            flex_items[flex_items.length - 2].classList.add('zeroFlexGrow')
        }
    }
    window.addEventListener("resize", resizeTiles);
    resizeTiles();
}

function notDivisibleByFour() {
    if ((flex_items.length - 3) % 4 == 0) {
        if (!(flex_items[flex_items.length - 1].classList.contains('zeroFlexGrow'))) {
            flex_items[flex_items.length - 1].classList.add('zeroFlexGrow');
        }
        if (!(flex_items[flex_items.length - 2].classList.contains('zeroFlexGrow'))) {
            flex_items[flex_items.length - 2].classList.add('zeroFlexGrow')
        }
        flex_items[flex_items.length - 3].classList.add('zeroFlexGrow');
    } else if ((flex_items.length - 2) % 4 == 0) {
        if (!(flex_items[flex_items.length - 1].classList.contains('zeroFlexGrow'))) {
            flex_items[flex_items.length - 1].classList.add('zeroFlexGrow');
        }
        if (!(flex_items[flex_items.length - 2].classList.contains('zeroFlexGrow'))) {
            flex_items[flex_items.length - 2].classList.add('zeroFlexGrow')
        }
    } else {
        if (!(flex_items[flex_items.length - 1].classList.contains('zeroFlexGrow'))) {
            flex_items[flex_items.length - 1].classList.add('zeroFlexGrow');
        }
    }
    window.addEventListener("resize", resizeTiles);
    resizeTiles();
}

function resizeTiles() {
    let resizeTilesWidth = document.documentElement.clientWidth;
    console.log('did I make it to resizeTiles?');
}

