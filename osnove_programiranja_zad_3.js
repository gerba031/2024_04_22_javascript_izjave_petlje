//osnove programiranja zadatak 3 - kreirajte varijable firstName i lastName i spojite u varijablu fullName, ali s razmakom ("") između imena i prezimena 
var firstName = "Ivan ";
var lastName = " Horvat";

var fullName = firstName.trim() + " " + lastName.trim(); //trim ubije razmake ako su greškom uneseni u bazi
console.log(fullName);

// zad 4  razlomite ovu ternarnu operaciju na 3 različite operacije 

// var x = z === 2 ? y : 5

var z = 6;
var y = 0;

var x = z === 2 ? y : 5;

if (z === 2) {
    x = y;
} else {
    x = 5;
}
console.log("x=" + x);

// zad 5 napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku iteraciiju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "broj 2 je paran").
var x = 0;
for (x = 1; x <= 20; x++) {
    if (x % 2 == 0) {
        console.log("broj " + x + " je paran");
    }
}
