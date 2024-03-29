// script hidden and show
if ('IntersectionObserver' in window) {
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    // Selecionar os elementos ocultos inicialmente
    const elements = document.querySelectorAll('.hidden-left, .hidden-right');

    // Observar cada elemento oculto
    elements.forEach((element) => myObserver.observe(element));
} else {
    // Fallback para um comportamento alternativo, se necessário
    console.log('Seu navegador não suporta IntersectionObserver.');
}
    // script hidden and show

//script data
// Data de 09 de abril de 2022
const dataInicial = new Date('2022-04-09T21:00:00');
// Data atual
const dataAtual = new Date();

// Calcula a diferença em dias, horas, minutos e anos
const diferencaEmDias = Math.floor((dataAtual - dataInicial) / (1000 * 60 * 60 * 24));
const anos = Math.floor(diferencaEmDias / 365); // Calcula os anos decorridos
const dias = diferencaEmDias % 365;

// Calcula as horas, minutos e segundos restantes
const horas = Math.floor((dataAtual - dataInicial) / (1000 * 60 * 60)) % 24;
const minutos = Math.floor((dataAtual - dataInicial) / (1000 * 60)) % 60;

// Exibe o tempo decorrido na página HTML
const tempoDecorridoElement = document.getElementById('tempoDecorrido');
tempoDecorridoElement.innerHTML = `Há exatamente <span id="anos">${anos}</span> anos, <span id="dias">${dias}</span> dias, <span id="horas">${horas}</span> horas e <span id="minutos">${minutos}</span> minutos, meus olhos avistaram o amor da minha vida toda.`
// slide
const container = document.querySelector('.carousel-container');
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    container.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000); // Automatic slide change every 3 seconds

//slide
