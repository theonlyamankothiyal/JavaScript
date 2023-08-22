//Arra sort
let arr = [342,567,0.11,-1.7,"a",[],{}]
const newArr=[];

for(let i=0;i<arr.length;++i){
    if(typeof(arr[i])==='number'){
        let j=newArr.length-1;

        while(j>=0 && newArr[j]>arr[i]){
            newArr[j+1]=newArr[j];
            --j;
        }
        newArr[j+1]=arr[i];
    }
}
console.log(newArr);