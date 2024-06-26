const array =[2,1,2]
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if( array[i]==array[j]){
            if(array[i] > array[j]){
                let temp =array[i];
                array[i]=array[j]
                 array[j] = temp
             }
        }
    }
}
console.log(array);

