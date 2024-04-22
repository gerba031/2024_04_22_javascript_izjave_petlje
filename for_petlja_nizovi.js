
var arr = ["Ivana", "Martina", "Domagoj", "Luka", "Mihovil", "Iva", "Ivan", "Martina", "da"];

var arrNum = [1, 2, 3, 4, 5, 6];
var arrCombo = [1, "Ime", 2, "Prezime"]

console.log("niz ima " + arr.length + " elemenata");

var duljina = 0;
var minDuljina = 0;
var kratkoIme = 0;

for (i = 0; i < arr.length; i++) {
    console.log("item " + i + " = " + arr[i]);
    duljina = arr[i].length;

    console.log("ime " + arr[i] + " sadrži " + duljina + " znakova");

    if (minDuljina == 0) {
        minDuljina = duljina;
        kratkoIme = arr[1];
    }
    if (duljina < minDuljina) {
        minDuljina = duljina;
        kratkoIme = arr[i];
    }
}
console.log("ime sa najmanje znakova sadrži " + minDuljina + " znaka");
console.log(kratkoIme);




