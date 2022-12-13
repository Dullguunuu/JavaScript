let stringMain = document.getElementById("stringMain");

function createString() {
    let cards = "";
    let card = `<div class="card" style="width:18rem; border:1px solid grey">
    <img class="card-img-top" style="width:18rem" src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg"/>
    <div class="card-body" style="padding: 15px">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
    </div>
    </div>`;
    cards += card;
    console.log(cards);
    stringMain.innerHTML = cards;
}

createString();