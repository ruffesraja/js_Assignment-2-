function binarySearch(arr,value,start,end){
    if(start>end){
        return false;
    }
    var mid = parseInt((start+end)/2);
    if(arr[mid]==value){
        return true;
    }
    if(arr[mid]>value){
        return binarySearch(arr,value,start,mid-1);
    }
    if(arr[mid]<value){
        return binarySearch(arr,value,mid+1,end);
    }
}
var arr=[1,2,5,10,12,15,18];
var value=10;
console.log(binarySearch(arr,value,0,arr.length-1));