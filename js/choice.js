
let background = document.querySelector('body');
let body = document.querySelector('body');
let main = document.getElementById('main');


function changeBackground(){
    let random = Math.floor(Math.random() * 6.9 );
    console.log(random);
    switch (random) {
        case 0:
            background.style.background = "url('image/background.png') no-repeat center center/cover";
            break;
        case 1:
            background.style.background = "url('image/background2.png') no-repeat center center/cover";
            break;
        case 2:
            background.style.background = "url('image/background3.png') no-repeat center center/cover";
            break;
        case 3:
            background.style.background = "url('image/background4.png') no-repeat center cente/coverr";
            break;
        case 4:
            background.style.background = "url('image/background5.png') no-repeat center center/cover";
            break;
        case 5:
            background.style.background = "url('image/background6.png') no-repeat center center/cover";
            break;
        case 6:
            background.style.background = "url('image/background7.png') no-repeat center center/cover";
            break;
        default:
            background.style.background = "url('image/background7.png') no-repeat center center/cover";
            break;
    }

    setTimeout(changeBackground, 10000);

}

changeBackground();

function birthdayCard () {
    window.open('birthday_card.html', '_self');
}

function photos () {
    window.open('photoMenu.html', '_self');
}


    
