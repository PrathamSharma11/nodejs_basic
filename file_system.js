const fs = require('fs')
//console.log(fs)
// fs.readFile(__dirname+"/pn.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);

// });


try{
    const data = fs.readFileSync(__dirname + "/pn.txt","utf8");
    console.log(data);
}
catch(err){
    console.log(err)
}