let pinkBtn = document.getElementById("color1");
let graphiteBtn = document.getElementById("color2");
let navyBtn = document.getElementById("color3");
let pictures = document.querySelector('img');

pinkBtn.addEventListener("click", () => {
   pictures.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HP9F2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1652131470420"
})
graphiteBtn.addEventListener("click", () => {
    pictures.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HLKY2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1663178354199"
})

navyBtn.addEventListener("click", () => {
    pictures.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HP9E2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1652131473382"
})
