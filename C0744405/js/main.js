function addNumbers(j) {
    var sum = 0;
    for (i = 0; i < j; i++) {
        sum += i;
    }
    return sum;
}
var inputnumber = prompt("State starting number");
document.write(addNumbers(inputnumber));
