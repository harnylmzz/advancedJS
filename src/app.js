let sayi1 = 10;
sayi1 = "Harun Yılmaz";
let student = { id: 1, name: "Harun1" };
// console.log(student);

function save(puan = 100, ogrenci) {
  //console.log(ogrenci.name + " : " + puan);
}

save(undefined, student);

console.log("----------------------------------------------");

let students = ["Harun Yılmaz", "Engin Demiroğ", "Büşra Kara", "Büşra Zeybek"];

//console.log(students);

let students2 = [
  student,
  { id: 2, name: "Harun" },
  "Ankara",
  { city: "İstanbul" },
];

//console.log(students2);

console.log("REST----------------------------------------------");

//rest
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products[0]);
};

//console.log(typeof showProducts)
//showProducts(10, ["Elma", "Armut", "Karpuz"]);

console.log("SPREAD----------------------------------------------");

//spread

let points = [1, 2, 3, 4, 50, 4, 60, 14];
//console.log(...points);
//console.log(Math.max(...points));
//console.log(..."ABC", "D", ..."EFG", "H");

console.log("DESTRUCTING----------------------------------------------");

//Destructuring

let populations = [10000, 20000, 30000, [40000, 100000]];

let [small, medium, high, [veryHigh, maxiumum]] = populations;

//console.log(small);
//console.log(medium);
//console.log(high);
//console.log(veryHigh);
//console.log(maxiumum);

function someFunction([small1], number) {
 // console.log(small1);
}

//someFunction(populations);

let category = { id: 1, name: "İçecek" };
//console.log(category.id);
//console.log(category["name"]);
//console.log(category);

let { id, name } = category;
//console.log(id);
//console.log(name);

console.log("ARROW FUNCTIONS----------------------------------------------");


