let students = [
    {
        name: 'Сэд-Эрдэнэ',
        age: 19,
        gender: "male"
    },
    {
        name: 'Индра',
        age: 19,
        gender: "female"
    },
    {
        name: 'Хатнаа ',
        age: 21,
        gender: "male"
    },
    {
        name: 'Тэмүүлэн',
        age: 23,
        gender: "male"
    },
    {
        name: 'Намуун',
        age: 23,
        gender: "female"
    },
]


//  1

let male = 0, female = 0;
function gender() {
    for (i = 0; i < students.length; i++) {
        if (students[i].gender === "female")
            female++;
        else
            male++;
    }
    console.log("Ангид", male, "эрэгтэй сурагч байна");
    console.log("Ангид", female, "эмэгтэй сурагч байна");
}
gender();


//  2

let averageAge = 0, sum=0;
function aveAge()
{
    for (i = 0; i < students.length; i++) {
        sum += students[i].age
    }
    averageAge = sum/students.length
    console.log("Сурагчдын дундаж нас", averageAge);
}

aveAge();

//  3

for (i = 0; i < students.length; i++) {
students[i].lastName = "Дорж", "Дондог", "Гончигоо", "Сумлаа", "Нэргүй" ;
}

console.log(students);

//  4 

// for (i = 0; i < students.length; i++) {
//     if(students[i].age == )
// }



