function oddishOrEvenish(num){
    let sumOfDigits=0;
    while(num>0){
        sumOfDigits+=num%10;
        num = parseInt(num/10);
    }
    console.log(sumOfDigits);
    if(sumOfDigits%2==0){
        return "Evenish";
    }else{
        return "Oddish";
    }
}
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));