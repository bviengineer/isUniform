//Write a function, isUniform(), accepts an array as an argument and returns true if all items in the array are identical and false otherwise

function isUniform(array){
    var comparisonArray = array[0];
    for(var i = 1; i < array.length; i++){
        if(array[i] !== comparisonArray){
            return false;
        }
    }
    return true;
}