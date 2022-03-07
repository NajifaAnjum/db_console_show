const {createPool}=require('mysql');
const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"practise",
    connectionLimit:10

})

pool.query('select * from person',(err,result, fields)=>{
    if(err){
        return console.log(err);
    }
    console.log(result);
    
})