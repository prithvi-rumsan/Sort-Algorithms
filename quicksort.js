function quickSort(array){
    if(array.length <2){
        return array;
    }
    var leftArray = [], rightArray=[];
    var pivot = array[0];

    for(i = 1 ; i<array.length ; i++){
        if(array[i]<pivot){
            leftArray.push(array[i]);
        }
        else{
            rightArray.push(array[i]);
        }
    }
    return quickSort(leftArray).concat(pivot,quickSort(rightArray));
}

var unsorted = [5,4,3,6];
console.log(unsorted);
console.log(quickSort(unsorted));