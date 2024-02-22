console.log('running...');
const express = require('express');
require('dotenv').config();



const routes = require('./src/routes/index.routes');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(routes);

let port = process.env.PORT||3000;

//conect to database
const db_url = process.env.DATABASE;
async function connect(){
    try{
        await mongoose.connect(db_url);
        app.listen(port, () => {
            if(process.env.NODE_ENV === 'dev'){
                console.log('app is running on port db ' + port);
            }else{
                console.log('app is running')
            }
        });
    } catch(err){
        console.log('error connecting to database', err);
}

}
connect();






