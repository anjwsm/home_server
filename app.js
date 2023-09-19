const express = require('express');
const server = express();

server.use((req,res,next)=>{
    console.log('server hit');
    next();
  });

server.set('view engine' , "ejs");
server.use(express.json()); 
server.use(express.urlencoded({ extended: true }));

server.get('/',(req,res)=>{
   res.send("Hello World");
})

server.post('/' ,(req,res)=>{
  res.send(req.body) ;
})

server.get('/myhome' , (req,res)=>{
  res.sendFile( __dirname +'/public/myhome.html')
})

server.post('/yourhome' , (req,res)=>{
    console.log(req.body);
    res.render('yourhome', {fatherName:req.body.fatherName,
    motherName:req.body.motherName,
sibling:req.body.sibling,
address:req.body.address})
})








server.listen(3000,()=>{
    console.log("I am listening at port 3000");
})