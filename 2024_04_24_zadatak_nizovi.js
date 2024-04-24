var names = ["john", "jane", "bob", , "mike"];

/*
1.pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza
2.dodajte svoje ime na kraju niza
3.koristeći petlju napravite iteraciju kroz ovaj niz te nakon što ispište "jane" izađite iz petlje
4.napišite naredbu za uklanjanje undefined vrijednosti iz niza
5.sortiraj niz abecedno
6.ispišite ga


7. var brojcaniNiz = [1,2,3,4, ,5,6,7];
//zbroji sve članove niza
*/

//1
console.log(names.join());
for (var ispisi of names) {
    console.log(ispisi);
}

//1.1
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//2 --> u ovom slučaju moramo znati da ćemo postaviti ime na index 5
names[5] = "ivan";

//2.1 --> u ovom slučaju stavljamo na najveći mogući index na definiranom nizu 
names.push("ivan");

//2.2
names[names.length] = "ivan"


console.log(names);
//3
for (var ispisi of names) {
    console.log(ispisi);
    if (ispisi === "jane") {
        break;
    }
}

//4
for (var ispisi of names) {
    console.log(ispisi);
    if (ispisi === undefined) {
        continue;
    }
    console.log(ispisi);
}

//4.2
var noviNiz = [];
for (var ispisi of names) {
    if (ispisi === undefined) {
        continue
    }
    noviNiz.push(ispisi);
}

console.log(noviNiz.join());

//5
names.sort();

//6
console.log(names.join());


//7
var brojcaniNiz = [1, 2, , 3, 4, [1, 2, 3], 5, 6, 7, true, ,];
var sumaW = 0;
for (var x = 0; x < brojcaniNiz.length; x++) {
    if (typeof brojcaniNiz[x] != "number") {
        console.log("element na indexu " + x + " nije broj pa ga preskačemo nego je => " + typeof brojcaniNiz[x],);
        continue;
    }
    sumaW += brojcaniNiz[x];
}

console.log("sumaW=" + sumaW);


/// dodatni primjer

var elementi = ["ime", "prezime", "godine"];
// ime, prezime, godine
var ispisi_el = "";
for (var element of elementi) {
    ispisi_el += element + ",";
}
console.log(ispisi_el);

// ispiši najdulju riječ
var namesLong = ["john", "jane", "bob", "donnattelo" , "mike", "leonardo"];
var duljina = 0;
var najduzeIme="";

for (var ime of namesLong) {
    if (typeof ime !== "string") continue;
    var duljinaImena = ime.length;
    if (duljinaImena > duljina) {
        duljina = duljinaImena;
        najduzeIme = ime;
    }
}
console.log("Duljina: " + duljina);
console.log("Najduze ime je: " + najduzeIme);

