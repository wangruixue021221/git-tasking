//第一步引入数据库，和数据库地址】
//引入数据库模块
const mongodb=require('mongodb').MongoClient
//引入数据库地址
const url='mongodb://localhost:27017';
//把连接数据库的操作封装为一个函数，不同的操作在写不同的函数；
function _connect(callback){
	//连接数据库两参数，数据库地址和回调函数
	mongodb.connect(url,function(err,db){
		if(err) throw err;
		//db连接以后的数据
		callback(db);
	})
}
//添加数据 dbname 数据库名  colname 集合名  obj数据 callback 回调
module.exports.insert=function(dbname,colname,obj,callback){
	
      _connect(function(db){
		  //检测保存的数据是不是一个数组，不是数组就变成数组
		  if(!(obj instanceof Array)){
			  obj=[obj];
		  }
		  // 插入数据
		  db.db(dbname).collection(colname).insertMany(obj,(err,data)=>{
			     if(err) throw err;
				  //关闭数据库文件。
				  db.close();
				  callback(data);
		   })
		  
	  });
};
//添加查询数据
//dbname要插查询的数据   colname  集合名   obj要查询的数据   callback回调函数
module.exports.find=function(dbname,colname,obj,callback){
	    _connect(function(db){
			db.db(dbname).collection(colname).find(obj).toArray((err,data)=>{
				if(err) throw err;
				db.close();
				callback(data);
			})
		})
}
//修改数据
module.exports.updata=function(dbname,colname,obj,obj2,callback){
	_connect(function(db){
		db.db(dbname).collection(colname).updateMany(obj,{$set:obj2},(err,data)=>{
			if(err) throw err;
			db.close();
			callback(data);
		})
	})
}
//删除数据
module.exports.del=function(dbname,colname,obj,callback){
	_connect(function(db){
		db.db(dbname).collection(colname).deleteMany(obj,(err,obj)=>{
			if(err) throw err;
			db.close();
			callback(obj);
		})
	})
}
//删除全部数据
module.exports.remove=function(dbname,colname,obj,callback){
	_connect(function(db){
		db.db(dbname).collection(colname).deleteMany(obj,(err)=>{
			if(err) throw err;
			db.close();
			callback;
		})
	})
}
