let btn = document.getElementById("saveBtn");

let inputFirstname = document.getElementById("inputFirstname");
let inputLastname = document.getElementById("inputLastname");
let inputAimag = document.getElementById("inputAimag");
let inputSoum = document.getElementById("inputSoum");

let aimags = [
    { id: 1, name: "Arkhangai" },
    { id: 2, name: "Bayankhongor" },
    { id: 3, name: "Dundgovi" },
];

let soums = [
    { id: 1, aimagId: 1, soumName: "Tsetserleg" },
    { id: 2, aimagId: 1, soumName: "Tsenher" },
    { id: 3, aimagId: 2, soumName: "Galuut" },
    { id: 4, aimagId: 2, soumName: "Buutsagaan" },
    { id: 5, aimagId: 3, soumName: "Luut" },
    { id: 6, aimagId: 3, soumName: "Dund" },
];

btn.addEventListener("click", saveForm);

function checkError() {
    console.log("checkErro");
    if (inputFirstname.value.length > 3) {
        btn.disabled = false;
    }
}

function fillAimag() {
    let options = "";
    for (let i = 0; i < aimags.length; i++) {
        let option = `<option value="${aimags[i].id}">${aimags[i].name}</option>`;

        options += option;
    }

    inputAimag.innerHTML = options;
}

function fillSoum() {
    let options = "";
    for (let i = 0; i < soums.length; i++) {
        if (inputAimag.value == soums[i].aimagId) {
            let option = `<option value="${soums[i].id}">${soums[i].soumName}</option>`;

            options += option;
        }
    }

    inputSoum.innerHTML = options;
}

inputFirstname.addEventListener("change", function () {
    let msg = document.querySelector("#inputFirstname + small");
    if (inputFirstname.value.length < 3) {
        console.log(msg.classList);

        msg.classList.replace("d-none", "d-block");
    } else {
        msg.classList.replace("d-block", "d-none");
    }
    checkError();
});

inputAimag.addEventListener("change", fillSoum);

function saveForm() { }

fillAimag();