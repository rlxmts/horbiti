const cardImage = document.querySelectorAll('.card_img');

cardImage.forEach( card => {
    const pointer = card.querySelector('span');
})

function addOuRemoveAtivo(element){
    element.classList.contains('ativo') ?  element.classList.remove('ativo') : element.classList.add('ativo');    
} 
const pergunta = document.querySelectorAll('.pergunta');

pergunta.forEach( pergunta => {
    pergunta.onclick =()=> {
        addOuRemoveAtivo(pergunta);
        pergunta.classList.contains('ativo') ? pergunta.classList.remove('inativo') : pergunta.classList.add('inativo');
    }
})