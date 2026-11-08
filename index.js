let bar = document.querySelector('.bar')
let topBtn = document.querySelector('.topBtn')
let nav = document.querySelector('nav ul')

bar.addEventListener('click', () => {
    bar.classList.toggle('active')
    nav.classList.toggle('active')
})

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

var options = {
    strings: ['Hardware', 'Software', 'Soporte técnico', 'Instalaciones'],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
};

var typed = new Typed('.typing1', options);
var typed2 = new Typed('.typing2', {
    strings: ['Hardware', 'Software', 'Soporte técnico'],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});

ScrollOut({
    targets: '.img, .aboutText, .box, div.left, div.right'
})

ScrollOut({
    targets: '.header',
    offset: 50
})
