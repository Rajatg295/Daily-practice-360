const express=require('express');
const cors = require('cors');
const UserModel = require("./models/user")

require('./Conn/Conn')

const app = express();
app.use(cors());
app.use(express.json());




app.post('/data', async(req, res)=> {
    const {name,email,password} = req.body;
    try{

        const data = await UserModel.create({
            name,
            email,
            password
        })

        res.status(201);
    }catch{
        res.status(500);
    }


})

app.listen(5000, ()=>{
    console.log("Listening to port 5000");
})


