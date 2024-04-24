var niz = ["a", "b", "c", "d"];
var prazanniz = [];

console.log(niz);
console.log(typeof niz);

for (i = 0; i < prazanniz.length; i++) {
    console.log("1. element na poziciji [" + i + "] =" + prazanniz[i]);
}

console.log("1.1 element na poziciji [5] =" + prazanniz[5]);

var i = 0;
do {
    console.log("2. element na poziciji [" + i + "] =" + prazanniz[i]);
    i++;
} while (i < prazanniz.length);

while (i < prazanniz.length) {
    console.log("3. element na poziciji [" + i + "] =" + prazanniz[i]);
}


var brojcaniNiz = [1, 2, 3, 4, 5, 6, 7];
// zbroji sve članove niza

// var suma =  brojcaniNiz[0] + brojcaniNiz[1] + brojcaniNiz[3] + brojcaniNiz[4]; //...

var suma = 0;
for (var x = 0; x < brojcaniNiz.length; x++) {
    suma += brojcaniNiz[x];

    //ili suma = suma + brojcaniNiz[x];

}
console.log("suma=" + suma);

var wierdBrojcaniNiz = [1, 2, 3, , 4, 5, 6, 7];
var sumaW = 0;
for (var x = 0; x < wierdBrojcaniNiz.length; x++) {
    if (wierdBrojcaniNiz[x] === undefined) {
        continue;
    }
    sumaW += wierdBrojcaniNiz[x];
}

console.log("sumaW=" + sumaW);

var names = ["john", "jane", "mike"];
var name1 = names[0];

names[5] = "holly";
console.log(names[5]);
console.log(names);

var matrix = [[1, 2, 3], ["john", "jane", "mike"],];
console.log(matrix[0][1]);

for (var i = 0; i < matrix.length; i++) {
    //console.log( matrix[i].join());
    for (var j = 0; j < matrix[i].length; j++) {
        console.log("matrix [" + i + "][" + j + "] = " + matrix[i][j]);
        //    console.log(matrix[i][j]);
    }
}

var myNames = ["john", "jane", , "mike"];
var y = 1;

for (var myName of myNames) {
    console.log(y+"." + myName);
    y++;
}

//  ili

var myNames1 = ["john", "jane", , "mike"];


for (var myName1 of myNames1) {
    console.log(myName1);
    
}




