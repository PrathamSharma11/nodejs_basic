const h = require('http')
//console.log(h)
const server=h.createServer(function(req,res){
    res.write('welcome node js server')
    res.write('thankyou node js')
    res.write('hello pratham')
    res.write('bye')
    res.end()
}).listen(3000,()=>console.log('server is running localhost:3000'))