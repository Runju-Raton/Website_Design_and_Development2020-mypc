var arr=[1,2,3,4,5,6,7,8,9,10]

/* arr.join()
arr.fill()
arr1.concat(arr2)
Array.isArray(arr)
Array.from(arr) */
// =============lets see each function ==============


/* console.log(arr.join('|')) */ //Strin return , parameter is added with every element except last element

/* console.log(arr.fill(1))  //all element replace by it's parameter
console.log(arr) */

/* var arr2=[11,12,13,14]
console.log(arr.concat(arr2)) */

/* console.log(Array.isArray(arr)) */

var arr2=Array.from(arr) 
console.log(arr2)
//Why we use array from where we can easily assign  arr1=arr2???
/* if we assign arr1=arr2 then their create a reference that means if we change arr2 then arr1 will be also changed.
but if we use Array.from then duplicate copy is created and no effect upon the array1 if we change the array2*/


