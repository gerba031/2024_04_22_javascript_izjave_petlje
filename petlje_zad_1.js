// zadatak 1 - napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9
var x = 3;
while (x < 20) {
    x++;
    if (x < 3) {
        // console.log("manji od 3");
        x++;
        continue;
    }
    if (x == 9 || x == 18) {
        continue;
    }
    console.log("x=" + x);
}

// 2. način

var y = 3;
while (y < 20) {
    y++;
    if (y < 3) {
        y++;
        continue;
    }
    if (y % 9 === 0) {
        continue;
    }
    console.log("y=" + y);
}