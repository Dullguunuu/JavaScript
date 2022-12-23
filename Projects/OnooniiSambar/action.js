document.getElementById("title1").innerHTML = "Дүн оруулах"

let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let score = document.getElementById("score");
let second = document.getElementById("second")
let dun_oroh = document.getElementById("dun_oroh");

fName.placeholder = "Сурагчийн нэр"
lName.placeholder = "Овог"
score.placeholder = "Оноо"

// Jagsaalt garah heseg 

document.getElementById("title2").innerHTML = "Дүнгийн жагсаалт"

let dun = [];

function array_nemeh(event) {
    let gender = "";
    if (opt1.checked) { gender = "эмэгтэй" }
    else { gender = "эрэгтэй" };
    let obj = {
        firstName: fName.value, lastName: lName.value, huis: gender, avsanDun: score.value
    }
    dun.push(obj);
    input_nemeh();
    event.preventDefault();
    fName.value = "";
    lName.value = "";
    score.value = "";
}

function input_nemeh() {
    let list = "";
    for (let i = 0; i < dun.length; i++) {
        list += `<div class = "murStyle">
    <p class = "fNameEl">${dun[i].firstName}</p>
    <p class = "lNameEl">${dun[i].lastName}</p>
    <p class = "genEl">${dun[i].huis}</p>
    <p class = "scoreEl">${dun[i].avsanDun}</p>
    <div>
    <button type = "button" onclick = "editBtn(${i})" id = "editBtn">Дүн нэмэх</button>
    <button type = "button" onclick = "delBtn(${i})" id = "delBtn">Устгах</button>
    </div>
    </div>`
    }
    dun_oroh.innerHTML = list;
}

function editBtn(id) {
    dun[id].avsanDun = Number(dun[id].avsanDun) + 5;
    input_nemeh();
}

function delBtn(id) {
    dun.splice(id, 1);
    input_nemeh();
}
