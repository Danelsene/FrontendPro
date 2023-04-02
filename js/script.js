const array = [1, 2, 3, 4, 5, 6, 7];

function remove (arr, a){
    const index = arr.indexOf(a);
    if(index === -1) {
        console.log(`There is no such an element as ${a}`);
    } else {
        return arr.splice(index, 1);
    }
}

remove(array, 5);

console.log(array);