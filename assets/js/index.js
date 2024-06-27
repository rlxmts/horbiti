const cabecalho = document.querySelector('.cabecalho');
const pergunta = document.querySelectorAll('.pergunta');
const iconSubir = document.querySelector('.icon');

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

let posicaoAnt = window.scrollY;
window.addEventListener('scroll', debounce( ()=> {
    addClasseCabecalho();
    escondeCabecalho();
    ativaBotaoSubir();
    animarAoScroll();
}), 200);

function addOuRemoveClasse(element, classe){
    element.classList.contains(`${classe}`) ?  element.classList.remove(`${classe}`) : element.classList.add(`${classe}`);    
} 

function addClasseCabecalho(){
    const posicaoScroll = window.scrollY;
    posicaoScroll > 0 ? cabecalho.classList.add('cabecalho-ativo') : cabecalho.classList.remove('cabecalho-ativo');
}

function ativaBotaoSubir(){
    window.scrollY > 900 ? iconSubir.classList.add('icon-ativo') : iconSubir.classList.remove('icon-ativo');
}

function escondeCabecalho(){
    let posicaoAtual = window.scrollY;
    posicaoAnt < posicaoAtual ? cabecalho.style.top = '-100%' : cabecalho.style.top = '0';
    posicaoAnt = posicaoAtual;
}

pergunta.forEach( pergunta => {
    pergunta.onclick =()=> {
        addOuRemoveClasse(pergunta, 'ativo');
        pergunta.classList.contains('ativo') ? pergunta.classList.remove('inativo') : pergunta.classList.add('inativo');
    }
})

iconSubir.onclick = ()=> window.scrollTo(0, 0);

function animarAoScroll(){

    const elementoAnima = document.querySelectorAll('.anima');
    const windowTop = window.scrollY + (window.innerHeight * 3) / 4;

    elementoAnima.forEach( item => {
        const posElemento = item.offsetTop;

        if(windowTop > posElemento){
            item.classList.add('anima-ativo');
        }
    })

}