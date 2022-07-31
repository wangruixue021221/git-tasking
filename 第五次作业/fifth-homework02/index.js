const express=require('express');
const querystring=require('querystring');
const url=require('url');
const mongodb=require('./www/js/mongodbFunction.js');
const app=express();
app.use('/www',express.static('./www'));

//插入数据
app.get('/insert',(req,res)=>{
	let data={'data':req.query.data};
    mongodb.insert('example','data',data,(a)=>{
		 res.send(a);
	});
});
//查找数据
app.get('/find',(req,res)=>{
	let data={'data':req.query.data};
	mongodb.find('example','data',data,(a)=>{
		res.send(a);
	})
	
});
//改变数据
app.get('/updata',(req,res)=>{
	let old={'data':req.query.old};
	let news={'data':req.query.news};
	mongodb.updata('example','data',old,news,(a)=>{
		res.send(a);
	})
})
//删除数据
app.get('/del',(req,res)=>{
	let data={'data':req.query.data};
	mongodb.del('example','data',data,(a)=>{
        res.send(a);
	})
});
//删除全部数据
app.get('/remove',(req,res)=>{
        mongodb.remove('example','data',{},()=>{
		     // res.send('true'); 		 
    	});
});
//用来每次显示数据
app.get('/show',(req,res)=>{
	mongodb.find('example','data',{},(c)=>{
		res.send(c);
	 });
});

const port = process.env.PORT || 9999;
app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})