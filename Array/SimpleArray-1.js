const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// console.log() ашиглан array хэвлэх

console.log(itCompanies);

// Array дахь компаниудын length хэвлэх

for (i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i] + "-n urt " + itCompanies[i].length)
}

// Эхний компани, дунд болон сүүлчийн компанийг хэвлэх

console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1]);

// Компани бүрийг хэвлэх

for (j = 0; j < itCompanies.length; j++) {
    console.log(itCompanies[j])
}

// Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга

// for (ii = 0; ii < itCompanies.length; ii++) {
//     for (jj = 0; jj < itCompanies[ii].length; jj += 2) {
        
//     }
// }

// Array - г өгүүлбэр болгон хэвлэ

var s = "";
for (var iii = 0; iii < itCompanies.length; iii++) {
    s += itCompanies[iii] + ", ";
}

console.log(s + "зэрэг мэдээллийн технологийн томоохон компаниуд.");
