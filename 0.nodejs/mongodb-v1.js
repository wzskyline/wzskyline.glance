 var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";


 mongodbUtil = {
   test() {
     this.insertOne()
     this.insertMany()
     this.insertOne()
     this.insertOne()
   },
   insertOne() {
     MongoClient.connect(url, {
       useNewUrlParser: true
     }, function (err, db) {
       if (err) throw err;
       var dbo = db.db("runoob");
       var myobj = {
         name: "菜鸟教程",
         url: "www.runoob"
       };
       dbo.collection("site").insertOne(myobj, function (err, res) {
         if (err) throw err;
         console.log("文档插入成功");
         db.close();
       });
     });
   },
   insertMany() {

     MongoClient.connect(url, {
       useNewUrlParser: true
     }, function (err, db) {
       if (err) throw err;
       var dbo = db.db("runoob");
       var myobj = [{
           name: '菜鸟工具',
           url: 'https://c.runoob.com',
           type: 'cn'
         },
         {
           name: 'Google',
           url: 'https://www.google.com',
           type: 'en'
         },
         {
           name: 'Facebook',
           url: 'https://www.google.com',
           type: 'en'
         }
       ];
       dbo.collection("site").insertMany(myobj, function (err, res) {
         if (err) throw err;
         console.log("插入的文档数量为: " + res.insertedCount);
         db.close();
       });
     });
   },
   find() {

     MongoClient.connect(url, {
       useNewUrlParser: true
     }, function (err, db) {
       if (err) throw err;
       var dbo = db.db("runoob");
       var whereStr = {
         "name": '菜鸟教程'
       }; // 查询条件
       dbo.collection("site").find(whereStr).skip(0).limit(1).toArray(function (err, result) {
         if (err) throw err;
         console.log(result);
         db.close();
       });
     });
   },
   updateOne() {
     ongoClient.connect(url, {
       useNewUrlParser: true
     }, function (err, db) {
       if (err) throw err;
       var dbo = db.db("runoob");
       var whereStr = {
         "name": '菜鸟教程'
       }; // 查询条件
       var updateStr = {
         $set: {
           "url": "https://www.runoob.com"
         }
       };
       dbo.collection("site").updateOne(whereStr, updateStr, function (err, res) {
         if (err) throw err;
         console.log("文档更新成功");
         db.close();
       });
     });
   },
   updateMany() {
     MongoClient.connect(url, {
       useNewUrlParser: true
     }, function (err, db) {
       if (err) throw err;
       var dbo = db.db("runoob");
       var whereStr = {
         "type": 'en'
       }; // 查询条件
       var updateStr = {
         $set: {
           "url": "https://www.runoob.com"
         }
       };
       dbo.collection("site").updateMany(whereStr, updateStr, function (err, res) {
         if (err) throw err;
         console.log(res.result.nModified + " 条文档被更新");
         db.close();
       });
     });
   },

   deleteOne() {
 
     MongoClient.connect(url, {
       useNewUrlParser: true
     }, function (err, db) {
       if (err) throw err;
       var dbo = db.db("runoob");
       var whereStr = {
         "name": '菜鸟教程'
       }; // 查询条件
       dbo.collection("site").deleteOne(whereStr, function (err, obj) {
         if (err) throw err;
         console.log("文档删除成功");
         db.close();
       });
     });

   },
   deleteMany() {

     MongoClient.connect(url, {
       useNewUrlParser: true
     }, function (err, db) {
       if (err) throw err;
       var dbo = db.db("runoob");
       var whereStr = {
         type: "en"
       }; // 查询条件
       dbo.collection("site").deleteMany(whereStr, function (err, obj) {
         if (err) throw err;
         console.log(obj.result.n + " 条文档被删除");
         db.close();
       });
     });
   },
   sort() {


     MongoClient.connect(url, {
       useNewUrlParser: true
     }, function (err, db) {
       if (err) throw err;
       var dbo = db.db("runoob");
       var mysort = {
         type: 1
       };
       dbo.collection("site").find().sort(mysort).toArray(function (err, result) {
         if (err) throw err;
         console.log(result);
         db.close();
       });
     });
   },
   drop() {

     MongoClient.connect(url, {
       useNewUrlParser: true
     }, function (err, db) {
       if (err) throw err;
       var dbo = db.db("runoob");
       // 删除 test 集合
       dbo.collection("test").drop(function (err, delOK) { // 执行成功 delOK 返回 true，否则返回 false
         if (err) throw err;
         if (delOK) console.log("集合已删除");
         db.close();
       });
     });
   }
 }



 mongodbUtil.test()









 //https://www.runoob.com/nodejs/nodejs-mongodb.html
