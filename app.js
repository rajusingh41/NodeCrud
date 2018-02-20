var express =require('express');
var bodyParser=require('body-parser');
var dbConfig=require('./config/database.config');
var mongoose=require('mongoose');
var app =express();
mongoose.Promise=global.Promise;

mongoose.connect(dbConfig.url)
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.json({'message':'Welcome to my Demo App'});
})


// https://www.djamware.com/post/58b27ce080aca72c54645983/how-to-create-nodejs-expressjs-and-mongodb-crud-web-application
app.listen(3000);

console.log('Open http://localhost:3000');