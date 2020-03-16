 var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/"; 

 mongodbUtil = {
   db:"runoob",
   collection:"site",
   connect() {
	   return new Promise(function(resolve, reject){
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
             err?reject(err):resolve(db)  
		 });
      });
   },
   async insertOne(myobj,dbname,collection) {
	   dbname = dbname ? dbname :this.collection
	   collection = collection?collection :this.collection
	   db = await mongodbUtil.connect()
	   return new Promise(function(resolve, reject){
         db.db(dbname).collection(collection).insertOne(myobj, function (err, res) {
          err?reject(err):resolve(res) 
          console.log("文档插入成功");
         db.close();
       });
      }); 
   },
   async insertMany(myobj,dbname,collection) {
	    dbname = dbname ? dbname :this.collection
	   collection = collection?collection :this.collection
	   db = await mongodbUtil.connect() 
	   return new Promise(function(resolve, reject){
         db.db(dbname).collection(collection).insertMany(myobj, function (err, res) {
          err?reject(err):resolve(res) 
          console.log("插入的文档数量为: " + res.insertedCount);
           db.close();
       });
      }); 
   },
   
    async find(whereStr,dbname,collection) {
	   dbname = dbname ? dbname :this.collection
	   collection = collection?collection :this.collection
	   db = await mongodbUtil.connect() 
	   return new Promise(function(resolve, reject){
          db.db(dbname).collection(collection).find(whereStr).skip(0).limit(1).toArray(function (err, res) {
          err?reject(err):resolve(res)  
          db.close(); 
       });
      }); 
   },
   
    async updateOne(whereStr,updateStr,dbname,collection) {
	   dbname = dbname ? dbname :this.collection
	   collection = collection?collection :this.collection
	   db = await mongodbUtil.connect() 
	   return new Promise(function(resolve, reject){
		 db.db(dbname).collection(collection).updateOne(whereStr, updateStr, function (err, res) {
         err?reject(err):resolve(res)
         console.log("文档更新成功");
         db.close();
       }); 
      }); 
   },
    
     async updateMany(whereStr,updateStr,dbname,collection) {
	   dbname = dbname ? dbname :this.collection
	   collection = collection?collection :this.collection
	   db = await mongodbUtil.connect() 
	   return new Promise(function(resolve, reject){
		 db.db(dbname).collection(collection).updateMany(whereStr, updateStr, function (err, res) {
         err?reject(err):resolve(res)
         console.log("文档更新成功");
         db.close();
       }); 
      }); 
   },
      async deleteOne(whereStr,dbname,collection) {
	   dbname = dbname ? dbname :this.collection
	   collection = collection?collection :this.collection
	   db = await mongodbUtil.connect() 
	   return new Promise(function(resolve, reject){
		 db.db(dbname).collection(collection).deleteOne(whereStr, function (err, res) {
         err?reject(err):resolve(res) 
         console.log("文档删除成功");
         db.close();
       }); 
      }); 
   },
      async deleteMany(whereStr,dbname,collection) {
	   dbname = dbname ? dbname :this.collection
	   collection = collection?collection :this.collection
	   db = await mongodbUtil.connect() 
	   return new Promise(function(resolve, reject){
		 db.db(dbname).collection(collection).deleteMany(whereStr, function (err, res) {
         err?reject(err):resolve(res) 
         console.log(res.result.n + " 条文档被删除");
         db.close();
       }); 
      }); 
   },
     async sort(mysort,dbname,collection) {
	   dbname = dbname ? dbname :this.collection
	   collection = collection?collection :this.collection
	   db = await mongodbUtil.connect() 
	   return new Promise(function(resolve, reject){
		 db.db(dbname).collection(collection).find().sort(mysort).toArray( function (err, res) {
         err?reject(err):resolve(res)  
         db.close();
       }); 
      }); 
   },
    
  
     async drop(dbname,collection) {
	   dbname = dbname ? dbname :this.collection
	   collection = collection?collection :this.collection
	   db = await mongodbUtil.connect() 
	   return new Promise(function(resolve, reject){
		 db.db(dbname).collection(collection).drop( function (err, res) {
         err?reject(err):resolve(res)  
         if (res) console.log("集合已删除");
		 db.close();
       }); 
      }); 
   }, 
 }


 async function test (){
	  var obj = {  name: "菜鸟教程",  url: "www.runoob"};
	  var whereStr = { "name": '菜鸟教程'}; 
      var updateStr = {$set: { "url": "https://www.runoob.com"} };
	  var mysort = { type: 1};
	  await mongodbUtil.insertOne(obj)
	 // await mongodbUtil.find(whereStr)   
	 // await mongodbUtil.updateOne(whereStr,updateStr) 
     // await mongodbUtil.drop()	 
}
console.log(test())


 


 //https://www.runoob.com/nodejs/nodejs-mongodb.html
