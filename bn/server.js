var express= require('express');
var app= express();
require('dotenv').config();
const PORT = process.env.PORT;

app.get('/', function(req, res){

})


app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
});