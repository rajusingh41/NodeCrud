var mongooes=require('mongoose');


var employeeSchema = new mongooes.Schema({
    name :string,
    address:string,
    department:string,
    salary:number,
    updated_at:{type:Date,default:Date.now},
});

model.exports=Mongoose.model('Employee',employeeSchema);