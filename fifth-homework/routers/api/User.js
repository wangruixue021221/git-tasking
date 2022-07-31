const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const User = require("../../module/users.js");
// 测试路由功能
router.get("/test",(req,res)=>{
    res.json({msg:"route works"})
})
router.get('/getUserMsg',(req,res)=>{
    User.findOne({name:"ccy"})
    .then((user) => {res.json(user)})
})
// 测试连接MongoDB的路由并post数据到数据库
router.post("/register", (req, res) => {
    //console.log(req.body);

    // check if email already exists
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.status(400).json({ email: "邮箱已被注册！" })
            } else {
                const avatar = gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' });
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                // encrypt newUser password
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        })
})
module.exports = router;
//增
User.insertMany([{
 name: '张三',
 password: '123',
    email:'1572478592@qq.com'
     }], (err,result) => {
    if (err) throw err; //出现错误就抛出
     console.log('添加成功');
     console.log(result)
     })
    User.insertMany([{
    name: '李四',
   password: '456',
    email:'1502478592@qq.com'
    }], (err,result) => {
   if (err) throw err; //出现错误就抛出
 console.log('添加成功');
 console.log(result)
    })
    User.insertMany([{
name: '王五',
 password: '789',
    email:'1502479492@qq.com'
   }], (err,result) => {
  if (err) throw err; //出现错误就抛出
  console.log('添加成功');
  console.log(result)
    })
    //减
    User.deleteOne({
    name:'张三'
    }, (err,result) => {
    if (err) throw err;
    console.log('删除成功')
    console.log(result)
    })
    //改
    User.updateOne({ name: '李四' },{ $set: {email:'1572478642@qq.com'} 
  }, (err,result) => {
 if (err) throw err;
    console.log('修改成功');
    console.log(result)
    })
    //查
    User.find({}, {_id: 0, __v: 0}).exec((err, data) => {
  if (err) throw err;
 console.log(data);
 })
    