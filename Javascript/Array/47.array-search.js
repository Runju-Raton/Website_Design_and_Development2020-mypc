var arr=[1,2,3,4,5,6,7,8,9,10,10]

var flag=0;
for(var i=0; i<arr.length; i++){

    if(100==arr[i]){
        flag=1
        console.log('found')
        break;
    }
   
}

if(!flag){
    console.log("Not found")
}