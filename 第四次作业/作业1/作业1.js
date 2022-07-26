Promise.all=function(values){
 return new Promise((resolve,reject)=>{
    let result=[];
    let counter=0;
    function processData(key,value){
        result[key]=value;
        if(++counter===values.length){
            resolve(result);
        }
    }
    for(let i=0;i<values.length;i++){
        let current=values[i];
        if(isPromise(current)){
            current.then(data=>{
                processData(i,data);
            },reject)
        }else{
            processData(i,current);
        }
    }
 })
}