const express=require('express');

const app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.use(express.urlencoded())

app.post('/',function(req,res){
    
    let num1=Number(req.body.number1);
    let num2=Number(req.body.number2);
    let suma=num1+num2;


    res.send('thanks for that,la suma es '+suma);


});
app.listen(3000,function(){
    console.log('el servidor esta corriendo');
});