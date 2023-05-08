function menuShow() {
    let menuSanduiche = document.querySelector('.menuSanduiche');
    if (menuSanduiche.classList.contains('open')) {
        menuSanduiche.classList.remove('open');
    }  else{
        menuSanduiche.classList.add('open');
        }
}