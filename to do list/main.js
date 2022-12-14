let heading = document.createElement("h1")

let mur2 = document.createElement("div")
let date_garah_heseg = document.createElement("div")
let task_uldegdel = document.createElement("div")

let mur3 = document.createElement("div")
let input_oruulah = document.createElement("input")
let nemeh_button = document.createElement("button")

let mainHead = document.createElement("h1")
let hr = document.createElement("hr")

let headEL = document.querySelector(".head")
let mainEL = document.querySelector(".main")

heading.innerHTML = "Todo List App"
headEL.appendChild(heading)

headEL.appendChild(mur2)

let dateEl = new Date();
date_garah_heseg.innerHTML = `Он сар өдөр: ${dateEl.getFullYear()} - ${dateEl.getMonth() + 1} - ${dateEl.getDate()}`
mur2.appendChild(date_garah_heseg)
task_uldegdel.innerHTML = "task үлдлээ!"
mur2.appendChild(task_uldegdel)

mur2.id = "mur2_style"


headEL.appendChild(mur3)
mur3.appendChild(input_oruulah)
nemeh_button.innerHTML = `+Нэмэх`
mur3.appendChild(nemeh_button)


mainHead.innerHTML = "Жагсаалт"
mainEL.appendChild(mainHead)
mainHead.id = "main"

mainEL.appendChild(hr)

let jagsaalt_list = document.createElement("ul")
mainEL.appendChild(jagsaalt_list)
jagsaalt_list.id = "jagsaaltList"

let li = document.createElement("li")
// let icon1 = document.createElement("span")
// let icon2 = document.createElement("span")
// let icon3 = document.createElement("span")


jagsaalt_list.appendChild(li)
jagsaalt_list.appendChild(icon1)
jagsaalt_list.appendChild(icon2)
jagsaalt_list.appendChild(icon3)

let a = input_oruulah.value;
nemeh_button.addEventListener("click", () => {
    li.innerHTML = "a"
})


// {/* <i class="fa fa-pencil" aria-hidden="true"></i> */ }
// {/* <i class="fa fa-trash" aria-hidden="true"></i> */ }
// {/* <i class="fa fa-check" aria-hidden="true"></i> */ }
// event.preventDefault()