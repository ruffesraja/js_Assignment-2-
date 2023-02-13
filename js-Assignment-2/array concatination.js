function concat(){
    var arr=[];
    for(let i=0;i<arguments.length;i++){
        arr=arr.concat(arguments[i]);
    }
    return arr;
}
var newArray=concat([1,2],[2,3],[2,3,4]);
console.log(newArray);