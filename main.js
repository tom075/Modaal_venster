
//button 1 variabelen
var zaandamModal = document.getElementById('zaandamModal');
var fotoZaandam = document.getElementById('fotoZaandam');
var sluitZaandam = document.getElementsByClassName('sluitZaandam')[0];

//button 2 variabelen
var amsterdamModal = document.getElementById('amsterdamModal');
var fotoAmsterdam = document.getElementById('fotoAmsterdam');
var sluitAmsterdam = document.getElementsByClassName('sluitAmsterdam')[0];

//button 3 variabelen
var koogModal = document.getElementById('koogModal');
var fotoKoog = document.getElementById('fotoKoog');
var sluitKoog = document.getElementsByClassName('sluitKoog')[0];


//reageer op de klik button1
fotoZaandam.addEventListener('click', openZaandam);
sluitZaandam.addEventListener('click', sluitZaandamModal);
window.addEventListener('click', outsideClickZaandam);

//reageer op de klik button2
fotoAmsterdam.addEventListener('click', openAmsterdam);
sluitAmsterdam.addEventListener('click', sluitamsterdamModal);
window.addEventListener('click', outsideClickAmsterdam);

//reageer op de klik button3
fotoKoog.addEventListener('click', openKoog);
sluitKoog.addEventListener('click', sluitKoogModal);
window.addEventListener('click', outsideClickKoog);



// functies button1
function openZaandam(){
    zaandamModal.style.display = 'block';
}
function sluitZaandamModal(){
    zaandamModal.style.display = 'none';
}
function outsideClickZaandam(e){
    if(e.target == zaandamModal){
        zaandamModal.style.display = 'none';
    }
}

// functies button2
function openAmsterdam(){
    amsterdamModal.style.display = 'block';
}
function sluitamsterdamModal(){
    amsterdamModal.style.display = 'none';
}
function outsideClickAmsterdam(e){
    if(e.target == amsterdamModal){
        amsterdamModal.style.display = 'none';
    }
}

// functies button3
function openKoog(){
    koogModal.style.display = 'block';
}
function sluitKoogModal(){
    koogModal.style.display = 'none';
}
function outsideClickKoog(e){
    if(e.target == koogModal){
        koogModal.style.display = 'none';
    }
}

