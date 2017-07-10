// var express=require("express");
// var app=express();

var mongoose=require("mongoose");
var db=mongoose.connect("mongodb://localhost:27017/youshang");

db.connection.on("open",function () {
    console.log("数据库连接成功");
});
db.connection.on("error",function (err) {
    console.log("数据库连接失败"+err);
});
//db.users.insert({name:18375327896,pass:135790,products:[{1207406,2},{1425916,3}]})
var userSchema2=new mongoose.Schema({
    name:Number,
    pass:String,
    products:Array
},{
    collection:"users"
});

var Model2=db.model("users",userSchema2);

Model2.create({name:18375327896,pass:135790,products:[{coding:1207406,number:2},{coding:1425916,number:3}]},function (err,doc) {
    if(err){
        return console.error(err);
    }
    console.log(doc);
});

