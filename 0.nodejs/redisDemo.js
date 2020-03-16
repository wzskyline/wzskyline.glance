 /*
 March
 resolve("成功!"); 
  console.log();
 */
 const redis = require("redis")
 var redisUtil ={
	 client:null,
	  init( ){ 
	  this.client = redis.createClient(6379,'127.0.0.1',{}); 
	  this.client.on("error", function (err) {  
         console.log(" redis Error " + err);  
      });   
	},
	 quit( ){ 
	 this.client.end()
	 },
	set(key,value){
	   var _this = this;
       return new Promise(function(resolve, reject){
       _this.client.set(key, value, function(err, obj) { 
		    err?reject(err):resolve(obj) 
		   _this.client.quit()
	   })
      });  
	}, 
    get(key){
	   var _this = this;
       return new Promise(function(resolve, reject){
       _this.client.get(key, function(err, obj) { 
		    err?reject(err):resolve(obj) 
		   _this.client.quit()
	   })
      });  
	},
	test1(){
		var _this = this;
		 _this.client.send_command('set',['nice','nice'], function(err,data) {
			   console.log(err); 
         console.log(data);         
		 _this.client.quit()
         }) 
	},
	test2(){
		var _this = this;
		 _this.client.send_command('lset',['mylist',0,1], function(err,data) {
          console.log(err); 
         console.log(data);  
		 _this.client.quit()
         })
	},
	test(){
		var _this = this;
		 _this.client.send_command('lpush',['mylist', 'one'], function(err,data) {
          console.log(err); 
         console.log(data);  
		 _this.client.quit()
         })
	},
 }
  test = {
	  async testSet(){  
		var data = await redisUtil.set('1',"1");
        console.log(data);  
	  },
	   async testGet(){  
		var data = await redisUtil.get('1');
        console.log(data);  
	  },
	   async testMset(){  
		var data = await redisUtil.testMset('1');
        console.log(data);  
	  },
	  async testMget(){  
		var data = await redisUtil.testMget('1');
        console.log(data);  
	  },
	  async testHset(){  
		var data = await redisUtil.testMget('1');
        console.log(data);  
	  },
	  async testHget(){  
		var data = await redisUtil.testMget('1');
        console.log(data);  
	  },
	  async testMget(){  
		var data = await redisUtil.testMget('1');
        console.log(data);  
	  },
  }
  redisUtil.init()
  redisUtil.test()
  // test.testGet()
  // redisUtil.quit()
var util = {
	 
	img2string(filePath,characterSet = 'base64'){
		const fs = require('fs');
		characterSet  = ['utf-8','base64'].indexOf(characterSet) > -1 ? characterSet:'base64'; 
        let bitmap = fs.readFileSync(filePath);
        let base64str = Buffer.from(bitmap, 'binary').toString(characterSet);  
        return base64str;
	},
	/*
	arg ={
		level："info",
		msg："test log4js"
	}
	*/ 
	commonLog(arg){ 
		var log4js = require('log4js');
		log4js.configure({
  appenders: { record: { type: 'file', filename: 'record.log' } },
  categories: { default: { appenders: ['record'], level: 'error' } }
});
		var logger = log4js.getLogger('record');
		logger.level = arg.level || 'info'; 
		switch (logger.level ) { 
   case 'trace': logger.trace(arg.msg); break;
   case 'debug': logger.debug(arg.msg); break;
   case 'info': logger.info(arg.msg); break;
   case 'warn': logger.warn(arg.msg); break;
   case 'error': logger.error(arg.msg); break;
   case 'fatal': logger.fatal(arg.msg); break;
     
} 
	}
	
}

  