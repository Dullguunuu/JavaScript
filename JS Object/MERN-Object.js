const users = [
    {
        name: "Alex",
        email: "alex@alex.com",
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
    },
    {
        name: "Job",
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    {
        name: "Brook",
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50
    },
    {
        name: "Daniel",
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
    },
    {
        name: "John",
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    {
        name: "Thomas",
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
    },
    {
        name: "Paul",
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
    }
]

//  1

console.log(users[0])

//  2

console.log("Олон ур чадвар эзэмшсэн хүн")

let a = 0;
let b = 0;

for (i = 0; i < users.length; i++) {
    c = users[i].skills.length;
    if (b < c) {
        b = c;
        c = users[i]
        console.log(users[i].name)
    }
}


//  3

let count = 0;

for (i = 0; i < users.length; i++) {
    if (users[i].isLoggedIn == true) {
        if (users[i].points >= 50) {
            count++
        }
    }
}

console.log("50-аас дээш оноо авсан нэвтэрсэн хэрэглэгчийн тоо:", count)


//  4

console.log("Стек хөгжүүлэгч хүмүүс:")
for (i = 0; i < users.length; i++) {
    if (users[i].skills.includes('MongoDB', 'Express', 'React', 'Node') == true) {
        console.log(users[i].name)
    }
}

//  5

// console.log("Хамгийн их настай 3 хүмүүсийн мэдээлэл:")
// for (i = 0; i < users.length; i++) {
//     for (j = i + 1; j < users.length; j++) {
//         if (users[i].age > users[j].age)
//             let temp1 = users[i]
//         users[i] = users[j]
//         users[j] = temp1
//         console.log(temp1)
//     }
// }













