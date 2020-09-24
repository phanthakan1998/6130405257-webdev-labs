
var NumtoDivide = [];
outer: while (true) {
    var Num = prompt("Enter Number Ka");
    n = parseFloat(Num);
    m = parseInt(Num);
    if (m - n == 0 && m > 1) {
        for (i = 0; i < n + 1; i++) {

            if (isPrime1(i) == true) {
                NumtoDivide.push(i);
               
            }


        }
        alert("For n =" + n + " prime numbers are " + NumtoDivide);
        break outer;
    }

    else {


        alert("Enter a positive integer and more than 1  ");
    }




}

function isPrime1(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n);
    for (var i = 2; i <= m; i++) if (n % i == 0) return false;
    return true;
}
