  /*
 March
 resolve("成功!"); 
  console.log();
 */
 const redis = require("redis")
client = redis.createClient(6379,'127.0.0.1',{}); 
client.on("error", function (err) {   console.log(" redis Error " + err);  });  

   /*
 
 

client.set("key", "value", function(err, obj) { console.log (err,obj);}) 
client.get("key", function(err, obj) { console.log (err,obj);})

client.set("number", 0, function(err, obj) { console.log (err,obj);}) 
client.incr("number", function(err, obj) { console.log (err,obj);})
client.decr("number", function(err, obj) { console.log (err,obj);})
 
 var obj = {
     name:'sss',
     age:223
 }
 client.hset("test", obj, function(err, obj) {
     
     client.hget('test','name', function(err, name) {
         console.log('hget test name');
         console.log(name);
     })
 });
 client.hgetall('test', (err, obj) => {
         console.log(`hgetall:${JSON.stringify(obj)}`);
         console.log(obj);
     }) 
	 
	 
	  client.send_command('lset',['mylist',0,1], function(err,data) {
         console.log(data);          // OK
     })
     client.send_command('lpush',['mylist', 'one'], function(err, data) {
         console.log(data);          //OK 
     })
	 
	 
	 ///
	 
	 
 	let db1 = ['mysql','redis'];
 let db2 = ['mongo','redis'];
 client.sadd('db1',db1, function(err,data) {
      console.log (err,data);
    
 });
  client.sadd('db2', db2, function(err, data) {
         console.log (err,data); 
     })
 client.sinter('db1','db2', function(err,data) {
             console.log('sinter 交集:' + data)                    //交集: sinter:redis
         });
         client.sunion('db1','db2', function(err,data) {
             console.log('sunion 并集:' + data)                    // 并集: sunion:mongo,mysql,redis
         });
         client.sdiff('db1','db2', function(err,data) {
             console.log('SDIFF 补集:' + data)                     // 补集: SDIFF:mysql
         })
		 
		 
		 client.send_command('sdiff',['db1', 'db2'], function(err, data) {
           console.log('SDIFF 补集:' + data) 
     })
	 
 ////
 

 client.zadd(['zdb',0,'mysql', 1,'mongo',2,'redis'], function(err, data) {
     console.log(data);           // 3
 })
	 
 */
 
 
 
       
	  



client.quit()
	 