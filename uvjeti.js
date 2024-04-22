var text1 = "moje ime";
var text_2 = "moje_ime";

// uspoređivanje varijabli s uvjetima

var x = text1 === text_2;
console.log("x= " + x);

if (x === true) {
    console.log("varijable su identične");
} else {
    console.log("varijable NISU identične");
}

// ili 2. način

if (text1 == text_2) {
    console.log("varijable su identične");
} else {
    console.log("varijable NISU identične");
}

// upit ne mora biti u varijabli, provjerava samo unos

if ("moje ime1" === "moje ime1") {
    console.log("varijable su identične");
} else {
    console.log("varijable NISU identične");
}

// ako ima dodatni uvjet

if (x === true) {
    console.log("varijable su Identične");
} else if ("moje ime1" !== "moje ime1") {
    console.log("varijable NISU Identične");
} else {
    console.log("nije ispunjen niti jedan uvjet");
}

// ako ima više uvjeta

if (x === true) {
    console.log("varijable su Identične");
} else if ("moje ime1" !== "moje ime1") {
    console.log("varijable NISU Identične");
} else if ("moje ime1" == "moje ime1") {
    console.log("varijable JESU Identične");
} else {
    console.log("nije ispunjen niti jedan uvjet");
}


