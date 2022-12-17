// 1deh heseg

let headEL = document.querySelector(".head")

let heading = document.createElement("h1")
let mur2 = document.createElement("div")
let date_garah_heseg = document.createElement("div")
let task_uldegdel = document.createElement("div")

heading.innerHTML = "Todo List App"
headEL.appendChild(heading)

headEL.appendChild(mur2)

let dateEl = new Date();
date_garah_heseg.innerHTML = `Он сар өдөр: ${dateEl.getFullYear()} - ${dateEl.getMonth() + 1} - ${dateEl.getDate()}`
mur2.appendChild(date_garah_heseg)
task_uldegdel.innerHTML = "0 таск үлдлээ!"

mur2.appendChild(task_uldegdel)
mur2.id = "mur2_style"


let mur3 = document.createElement("div")
let input_oruulah = document.createElement("input")
let nemeh_button = document.createElement("button")

headEL.appendChild(mur3)
mur3.appendChild(input_oruulah)
input_oruulah.id = "task_oruulah"
input_oruulah.placeholder = "Та таскаа оруулна уу"
nemeh_button.innerHTML = `+Нэмэх`
mur3.appendChild(nemeh_button)


//  2doh heseg

let mainEL = document.querySelector(".main")

let mainHead = document.createElement("h1")
let hr = document.createElement("hr")


mainHead.innerHTML = "Жагсаалт"
mainEL.appendChild(mainHead)
mainHead.id = "main"

mainEL.appendChild(hr)

nemeh_button.addEventListener("click", () => {
    
    if(input_oruulah.value == "")
    {
        alert('Хоосон байна')
    }

    else
    {
    let jagsaalt = document.createElement("div");
    mainEL.appendChild(jagsaalt);
    jagsaalt.className = "jagsaalt_style";

    let ner = document.createElement("input");
    ner.id = "tasks"
    ner.value = input_oruulah.value;
    ner.readOnly = true;
    jagsaalt.appendChild(ner);
    input_oruulah.value = ""

    let icons = document.createElement("div");
    jagsaalt.appendChild(icons);

    let editBtn = document.createElement("span");
    let checkBtn = document.createElement("span");
    let deleteBtn = document.createElement("span");

    icons.appendChild(editBtn);
    icons.appendChild(checkBtn);
    icons.appendChild(deleteBtn);

    editBtn.innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>`;
    checkBtn.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
    deleteBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

    editBtn.addEventListener("click", function () {
        ner.readOnly = false;
        ner.focus().setCursorToTextEnd();
    });

    checkBtn.addEventListener("click", function () {
        ner.style.textDecoration = "line-through"
        ner.style.color = "grey"
    })

    deleteBtn.addEventListener("click", function () {
        mainEL.removeChild(jagsaalt);
    });

    // heden task bgag tooloh

    let count_tasks = document.querySelectorAll(".jagsaalt_style").length;
    task_uldegdel.innerHTML = `${count_tasks} таск үлдлээ!`
}
})
