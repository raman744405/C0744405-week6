function addNumbers(j) {
   //var sum = 0;
    //for (i = 0; i < j; i++) {
      //  sum += i;
    //}
    //return sum;
    sum = 0;
    i = 0;
    while (i < j) {
        sum += i++;
    }
    return sum;
}
var inputnumber = prompt("input your number");
document.write(addNumbers(inputnumber));
