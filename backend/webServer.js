var express = require('express');
var cors = require('cors');
var mongoClient = require('mongodb').MongoClient;

var constr = "mongodb://127.0.0.1:27017";
var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());



// app.post('/users',(req,res)=>{
//     var userRegister ={
//         email: req.body.email,
//         password: req.body.password,
//         confirmPassword: req.body.confirmPassword


            
//     };

//     mongoClient.connect(constr).then(clientObj=>{
//         var database = clientObj.db('websiteDb');
//         database.collection('users').insertOne(userRegister).then(()=>{
//             console.log(`User Inserted`)
            
//             res.end();
//         })
//     })
// })

app.post("/users",(req, res)=>{
    
    var user = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Email: req.body.Email
        
    };

    mongoClient.connect(constr).then(clientObj=>{
        var database = clientObj.db("websiteDb");
        database.collection("users").insertOne(user).then(()=>{
            console.log(`User Inserted`)
        
            res.end();
        })
    })

})
app.listen(3005);
console.log(`Server started: http://127.0.0.1:3005`);

