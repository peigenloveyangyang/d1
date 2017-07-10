var express=require("express");
var app=express();

var mongoose=require("mongoose");
var db=mongoose.connect("mongodb://localhost:27017/youshang");

db.connection.on("open",function () {
    console.log("数据库连接成功");
});
db.connection.on("error",function (err) {
    console.log("数据库连接失败"+err);
});

var userSchema=new mongoose.Schema({
    productName:{type:"String"},
    imgPath:{type:"String"},
    imgPath2:{type:"String"},
    imgPath3:{type:"String"},
    bigImgPath:{type:"String"},
    bigImgPath2:{type:"String"},
    bigImgPath3:{type:"String"},
    smallImgPath1:{type:"String"},
    smallImgPath2:{type:"String"},
    smallImgPath3:{type:"String"},
    comment:{type:"Number"},
    quickness:{type:"Boolean"},
    productsort:{type:"Number"},
    brand:{type:"String"},
    apply:{type:"String"},
    oldPrice:{type:"Number"},
    newPrice:{type:"Number"},
    synthesize:{type:"Number"},
    sales:{type:"Number"},
    newDate:{type:"Number"},
    timesLimit:{type:"Boolean"},
    selfSupport:{type:"Boolean"},
    intro:{type:"String"},
    coding:{type:"Number"},
    vipPrice:{type:"Number"},
    whiteGodPrice:{type:"Number"}
},{
    collection:"productInfo"
});

var Model=db.model("productInfo",userSchema);

app.get("/user",function (req,res) {
    var query=req.query;
    Model.create(query,function (err,doc) {
        if(err){
            res.send({status:"0",msg:err});
            return console.error(err);
        }
    })
    res.end("插入成功");
});



app.get("/youshang",function (req,res) {
    var query = req.query;
    var cb = query.cb;
    Model.find(function (err,doc) {
        if(err){
            return console.error(err)
        }
        res.send(cb+"("+JSON.stringify(doc)+")");
    });

})

// 通过rank获取商品列表
app.get("/huazhaungpin",function (req,res) {
    //首先得从库里拿到数据
    var cb = req.query.cb;
    var getcontent=req.query.getcontent;
    var getclass=req.query.getclass;
    var getsort=req.query.getsort;
    var gettype=req.query.gettype;
    // console.log(cb);
    console.log(getcontent);
    console.log(getclass);
    console.log(getsort);
    console.log(gettype);

    if(getclass=="brand"&&getsort=="sort"&&gettype=="synthesize"){
        Model.find({"brand":getcontent},{},{sort:{synthesize:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="brand"&&getsort=="sort"&&gettype=="sales"){
        Model.find({"brand":getcontent},{},{sort:{sales:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="brand"&&getsort=="sort"&&gettype=="newDate"){
        Model.find({"brand":getcontent},{},{sort:{newDate:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="brand"&&getsort=="sort"&&gettype=="newPrice"){
        Model.find({"brand":getcontent},{},{sort:{newPrice:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="brand"){
        Model.find({"brand":getcontent},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="sort"&&gettype=="synthesize"){
        Model.find({"productsort":getcontent},{},{sort:{synthesize:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="sort"&&gettype=="sales"){
        Model.find({"productsort":getcontent},{},{sort:{sales:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="sort"&&gettype=="newDate"){
        Model.find({"productsort":getcontent},{},{sort:{newDate:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="sort"&&gettype=="newPrice"){
        Model.find({"productsort":getcontent},{},{sort:{newPrice:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="pricesort"&&gettype=="price1"){
        Model.find({"productsort":getcontent,"newPrice":{$gt:0,$lt:50}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="pricesort"&&gettype=="price2"){
        Model.find({"productsort":getcontent,"newPrice":{$gt:50,$lt:100}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="pricesort"&&gettype=="price3"){
        Model.find({"productsort":getcontent,"newPrice":{$gt:100,$lt:200}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="pricesort"&&gettype=="price4"){
        Model.find({"productsort":getcontent,"newPrice":{$gt:200,$lt:400}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="pricesort"&&gettype=="price5"){
        Model.find({"productsort":getcontent,"newPrice":{$gt:400}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="check"&&gettype=="limit"){
        Model.find({"productsort":getcontent,"selfSupport":"true"},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"&&getsort=="check"&&gettype=="D1"){
        Model.find({"productsort":getcontent,"timesLimit":"true"},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="productsort"){
        Model.find({"productsort":getcontent},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="value"&&getsort=="sort"&&gettype=="synthesize"){
        var reg = new RegExp(getcontent);
        Model.find({"productName":reg},{},{sort:{synthesize:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="value"&&getsort=="sort"&&gettype=="sales"){
        var reg = new RegExp(getcontent);
        Model.find({"productName":reg},{},{sort:{sales:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="value"&&getsort=="sort"&&gettype=="newDate"){
        var reg = new RegExp(getcontent);
        Model.find({"productName":reg},{},{sort:{newDate:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="value"&&getsort=="sort"&&gettype=="newPrice"){
        var reg = new RegExp(getcontent);
        Model.find({"productName":reg},{},{sort:{newPrice:-1}},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }else if(getclass=="value"){
        var reg = new RegExp(getcontent);
        Model.find({"productName":reg},function (err,doc) {
            if(err){
                return console.error(err);
            }
            // console.log(doc)
            res.send(cb+"("+JSON.stringify(doc)+")");
        });
    }

})

// // 通过rank获取商品列表
// app.get("/search",function (req,res) {
//     //首先得从库里拿到数据
//     var cb = req.query.cb;
//     var productName=req.query.productName;
//     console.log(productName);
//     var reg = new RegExp(productName);
//     Model.find({"productName":reg},function (err,doc) {
//         if(err){
//             return console.error(err);
//         }
//         console.log(doc)
//         res.send(cb+"("+JSON.stringify(doc)+")");
//     });
// })



//用户表----------------第二个表
var userSchema2=new mongoose.Schema({
    name:Number,
    pass:String,
    products:Array
},{
    collection:"users"
});

var Model2=db.model("users",userSchema2);

// Model2.create({name:18375327896,pass:135790,products:[{coding:1207406,number:2},{coding:1425916,number:3}]},function (err,doc) {
//     if(err){
//         return console.error(err);
//     }
//     console.log(doc);
// });


//用户表结束

// 通过rank获取商品列表
app.get("/product",function (req,res) {
    //首先得从库里拿到数据
    var cb = req.query.cb;
    var getcontent=req.query.getcontent;
    var getclass=req.query.getclass;
    // console.log(cb);
    // console.log(getcontent);
    // console.log(getclass);

    Model.find({"coding":getcontent},function (err,doc) {
        if(err){
            return console.error(err);
        }
        // console.log(doc)
        res.send(cb+"("+JSON.stringify(doc)+")");
    });
})



app.get("*",function (req,res) {
    var reg=/\.\w+$/;
    if (reg.test(req.path)){
        //这是文件
        res.sendFile(__dirname+req.path);
    }
});

app.listen(8080);