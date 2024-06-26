const cabecalho = document.querySelector('.cabecalho');
const pergunta = document.querySelectorAll('.pergunta');
const iconSubir = document.querySelector('.icon');

function addOuRemoveClasse(element, classe){
    element.classList.contains(`${classe}`) ?  element.classList.remove(`${classe}`) : element.classList.add(`${classe}`);    
} 

let posicaoAnt = window.scrollY;

window.addEventListener('scroll', ()=> {
    addClasseCabecalho();
    escondeCabecalho();
    ativaBotaoSubir();
})

function addClasseCabecalho(){
    const posicaoScroll = window.scrollY;
    posicaoScroll > 0 ? cabecalho.classList.add('cabecalho-ativo') : cabecalho.classList.remove('cabecalho-ativo');
}

function ativaBotaoSubir(){
    window.scrollY > 900 ? iconSubir.classList.add('icon-ativo') : iconSubir.classList.remove('icon-ativo');
}

function escondeCabecalho(){

    let posicaoAtual = window.scrollY;

    if(posicaoAnt < posicaoAtual){
        cabecalho.style.top = '-100%';
    }else{
        cabecalho.style.top = '0';
    }

    posicaoAnt = posicaoAtual;
}

pergunta.forEach( pergunta => {
    pergunta.onclick =()=> {
        addOuRemoveClasse(pergunta, 'ativo');
        pergunta.classList.contains('ativo') ? pergunta.classList.remove('inativo') : pergunta.classList.add('inativo');
    }
})

iconSubir.onclick = ()=> window.scrollTo(0, 0);