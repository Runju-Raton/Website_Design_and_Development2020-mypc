/* var arr=[1,2,3,4,5,6,7,8,9,10]

arr.unshift(0) //add element in the front side
console.log(arr)

arr.push(11) //add element in the last side
console.log(arr)

arr.shift() //remove an element from the front side of an array
console.log(arr)

arr.pop() //remove an element from the last of an array
console.log(arr) */

var arr=[1,2,3,4,5,6,7,8,9,10]

arr[3]=400
console.log(arr)

// update
arr.splice(3,1,4) //first index middle no of delete item from initial index last of value, value can be one or more
console.log(arr)

//delete
arr.splice(3,2) // here middle no 2 that means two number delete from an initial index 3
console.log(arr)

//insert
arr.splice(3,0,4,5)
console.log(arr)
