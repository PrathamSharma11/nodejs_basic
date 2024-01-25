function pro(c){
    return new Promise(function(resolve,reject){
        console.log("fetching data please wait......")
        setTimeout(()=>{
            if (c){
                resolve("success")
            }
            else{
                reject("failed")
            }

        },6000)
        console.log("hello function")
        
    })  
}
console.log("hello gwalior")

pro(true).then((res)=>{
    console.log(res)

}).catch((err)=>{
    console.log(err)

})
