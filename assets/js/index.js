const cardImage = document.querySelectorAll('.card_img');

cardImage.forEach( card => {
    const pointer = card.querySelector('span');
    card.onmousemove = ()=> {
        pointer.style.display = 'none';
    }
    card.onmouseout = ()=> {
        pointer.style.display = 'grid';
    }
})