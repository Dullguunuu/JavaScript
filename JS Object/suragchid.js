// 1

let students = [
    {
        name: "Gonchigsumlai",
        birthYear: 1999,
        hobby: "Horse",
        single: false
    },
    {
        name: "Baruun Bilguun",
        birthYear: 2000,
        hobby: "sleep",
        single: true
    },
    {
        name: "Darga",
        birthYear: 1989,
        hobby: "sing",
        single: false
    },
    {
        name: "Huslen",
        birthYear: 2002,
        hobby: "soccer",
        single: false
    },
    {
        name: "Orgil",
        birthYear: 2002,
        hobby: "sleep",
        single: false
    },
    {
        name: "Jijig Amaraa",
        birthYear: 2005,
        hobby: "watching anime",
        single: true
    },
    {
        name: "Manlai",
        birthYear: 1999,
        hobby: "playing ukulele",
        single: true
    },
    {
        name: "Byamba",
        birthYear: 1990,
        hobby: "accounting",
        single: false
    },
    {
        name: "Taami",
        birthYear: 1999,
        hobby: "playing dota",
        single: false
    },
    {
        name: "Ganzoo",
        birthYear: 2004,
        hobby: "watching anime",
        single: true
    },
    {
        name: "Daria",
        birthYear: 2004,
        hobby: "reading",
        single: true
    },
    {
        name: "Jantsaa",
        birthYear: 1999,
        hobby: "chess",
        single: false
    },
    {
        name: "Bebe",
        birthYear: 2004,
        hobby: "sportmen ",
        single: true
    },
    {
        name: "Tom Amaraa",
        birthYear: 1994,
        hobby: "making money",
        single: false
    },
    {
        name: "Dulguun",
        birthYear: 1997,
        hobby: "singing ",
        single: false
    },
    {
        name: "Naadoo",
        birthYear: 1997,
        hobby: "reading book",
        single: true
    },
    {
        name: "Zuun Bilguun",
        birthYear: 1995,
        hobby: "taking pic",
        single: false
    },
    {
        name: "Muugii",
        birthYear: 1997,
        hobby: "soccer",
        single: true
    },
    {
        name: "Oochka",
        birthYear: 1997,
        hobby: "sleeping",
        single: false
    },
    {
        name: "Taivanaa",
        birthYear: 2003,
        hobby: "drawing",
        single: true
    },
    {
        name: "Niko",
        birthYear: 1993,
        hobby: "playing com game",
        single: false
    }
]

// 2

function under20() {
    console.log("20s deesh nasnii suragchid")
    for (i = 0; i < students.length; i++) {
        if (students[i].birthYear < 2002) {
            console.log(students[i].name)
        }
    }
}
under20()

// 3

function age() {
    console.log("Suragchdiin nas")
    for (i = 0; i < students.length; i++) {
        let nas = 2022 - students[i].birthYear;
        console.log(students[i].name, nas)
    }
}

age()

// 4

function single() {
    console.log("Gants bie humuus")
    for (i = 0; i < students.length; i++) {
        if (students[i].single == true) {
            console.log(students[i].name, "single juu")
        }
    }
}

single()