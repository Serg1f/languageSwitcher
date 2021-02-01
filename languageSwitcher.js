let engBtn = document.querySelector('.lang-change-eng');
let rusBtn = document.querySelector('.lang-change-rus');
let engText = document.querySelectorAll('.eng-text');
let rusText = document.querySelectorAll('.rus-text');

engBtn.onclick = function() {
    engBtn.classList.remove('lang-change-shown');
    rusBtn.classList.add('lang-change-shown');
    for(let i = 0; i < engText.length; i++){
        engText[i].classList.add('hidden-text');
        rusText[i].classList.remove('hidden-text');
    };
}

rusBtn.onclick = function() {
    rusBtn.classList.remove('lang-change-shown');
    engBtn.classList.add('lang-change-shown');
    for(let i = 0; i < rusText.length; i++){
        rusText[i].classList.add('hidden-text');
        engText[i].classList.remove('hidden-text');
    };
}
