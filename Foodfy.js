const modaloverlay = document.querySelector('.modal-overlay')
const modalcontent = document.querySelector('.modal-content')
const cards = document.querySelectorAll('.card')



for (let card of cards) {
    card.addEventListener("click", function(){ 
        modaloverlay.classList.add('active')
        // modalcontent.card.add('active')
        const imagemID = card.id;
        const description1 = card.querySelector("p2").innerHTML
        const description2 = card.querySelector("p").innerHTML
        console.log(card.id);
        console.log(cards.id);
        modaloverlay.querySelector("img").src=`/assets/${imagemID}`;
        modaloverlay.querySelector("p2").innerHTML = `${description1}`
        modaloverlay.querySelector("p").innerHTML = `${description2}`
    })
}




