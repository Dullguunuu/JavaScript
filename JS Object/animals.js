let animals = [
    { type: "dog", sound: "woof" },
    { type: "cow", sound: "moo" },
    { type: "cat", sound: "meow" },
    { type: "sheep", sound: "mai" },
    { type: "duck", sound: "quack" },
    { type: "horse", sound: "iihoo" },
    { type: "fox", sound: "Ring-ding-ding-ding-dingeringeding" }
]

function animalSound(name) {
    for (i = 0; i < animals.length; i++) {
        if (animals[i].type == name)
            console.log("what does the", animals[i].type, "say?", animals[i].sound)
    }
}

let n = prompt("Амьтны нэр оруулна уу")
animalSound(n)