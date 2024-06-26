const cardImage = document.querySelectorAll('.card_img');
const cabecalho = document.querySelector('.cabecalho');
const pergunta = document.querySelectorAll('.pergunta');

cardImage.forEach( card => {
    const pointer = card.querySelector('span');
})

pergunta.forEach( pergunta => {
    pergunta.onclick =()=> {
        addOuRemoveAtivo(pergunta, 'ativo');
        pergunta.classList.contains('ativo') ? pergunta.classList.remove('inativo') : pergunta.classList.add('inativo');
    }
})

function addOuRemoveAtivo(element, classe){
    element.classList.contains(`${classe}`) ?  element.classList.remove(`${classe}`) : element.classList.add(`${classe}`);    
} 

let posicaoAnt = window.scrollY;

function escondeCabecalho(){

        let posicaoAtual = window.scrollY;

        if(posicaoAnt < posicaoAtual){
            cabecalho.style.top = '-100%';
        }else{
            cabecalho.style.top = '0';
        }

        posicaoAnt = posicaoAtual;
}

window.addEventListener('scroll', ()=> {
    addClasseCabecalho();
    escondeCabecalho();
})

function addClasseCabecalho(){
    const posicaoScroll = window.scrollY;
    posicaoScroll > 0 ? cabecalho.classList.add('cabecalho-ativo') : cabecalho.classList.remove('cabecalho-ativo');
}