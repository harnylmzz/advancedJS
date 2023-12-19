let sayi1 = 10;
sayi1 = "Harun Yılmaz"
let student = {id:1, name:"Harun1"}
// console.log(student);

function save (puan=100, ogrenci){
    //console.log(ogrenci.name + " : " + puan);
}

save(undefined, student);

let students = ["Harun Yılmaz", "Engin Demiroğ", "Büşra Kara", "Büşra Zeybek"]

//console.log(students);

let students2 = [student, {id:2, name:"Harun"}, "Ankara", {city:"İstanbul"}]

//console.log(students2);


//rest
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products)

}

//console.log(typeof showProducts)
