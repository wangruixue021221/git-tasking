"use strict";
function test() {
    let str = "hello world";
    console.log(str);
}
test();
//定义静态类型
let num = 1;
//num="str"报错
num = 55; //可以
//将变量定义成了何种类型，那么这个变量对应就可以使用其类型对应的方法
console.log(typeof num.toString());
const wangruixue = {
    uname: "王瑞雪",
    age: 19,
};
//对象类型
const person = {
    age: 1,
    height: 180,
    name: "xiaoguo"
};
console.log(person);
//数组类型
let personArray = ["小红", "小蓝", "小绿"];
console.log(personArray);
//类类型,参数类型必须是对象
class pg {
}
;
const py = new pg();
//函数类型
const girl = () => {
    return "大脚";
};
//type annotation 类型注解
let count;
count = 123;
//type inferrence 类型推断
let countInference = 123; //鼠标放上去会有显示
//不用写类型注解
const a = 1;
const b = 2;
const c = a + b; //c直接判断为number
//function getTotal(one, two) {
//   return one + two;
// }  
// const total = getTotal(1, 2);  one和two需要类型判断，否则归为any类型
function getTotal(one, two) {
    return one + two;
}
const total = getTotal(1, 2);
console.log(total);
//函数无返回值时定义方法
function sy(one, two) {
    console.log(one + two);
}
sy(78, 56);
//never 返回值类型,如果一个函数是永远也执行不完的，就可以定义返回值为never.
function su() {
    throw new Error();
    console.log("hello world");
}
function si() {
    while (true) {
        console.log("hello world");
    }
}
const sp = {
    name: "wangruixue",
    age: 19
};
function sa(sp) {
    return sp.name + "-" + sp.age;
}
console.log(sa(sp));
//数组中有多种类型
const arr = [1, "string", 2];
//数组中对象类型的定义
const arr1 = [
    { name: "wangruixue", age: 19 },
    { name: "guodinghang", age: 20 }
];
const arr2 = [
    { name: "wangruixue", age: 19 },
    { name: "guodinghang", age: 20 }
];
//用类进行定义
class Madam {
    constructor() {
        this.name = "xiaohong"; //要有初始值
        this.age = 18; //要有初始值
    }
}
const arr3 = [
    { name: "wangruixue", age: 19 },
    { name: "guodinghang", age: 20 }
];
//元组和数组类似，但是类型注解时会不一样,把数组中的每个元素类型的位置给固定住了，这就叫做元组.
const sf = ["xiaowang", "xiaoguo", 19];
const sg = [
    ["a", "b", 1],
    ["c", "d", 2]
];
const liuying2 = {
    name: "刘英",
    age: 25,
    height: 177,
    sex: "女",
    education: "博士"
};
const usrInterface2 = (liuying) => {
    let str = '';
    if (liuying.age > 30 || liuying.height < 165) {
        str = liuying.name + "未通过审核";
    }
    else {
        str = liuying.name + "通过审核,身高：" + liuying.height + "年龄：" + liuying.age + "性别：" + liuying.sex + "学历：" + liuying.education;
    }
    return str;
};
let result_ying2 = usrInterface2(liuying2);
console.log(result_ying2); // 刘英通过审核,身高：177年龄：25性别：女学历：博士
const wangruixue1 = {
    name: "wangruixue",
    age: 19,
    height: 164,
    say() {
        return "shabi";
    },
};
class sh {
    constructor() {
        this.name = "wangruixue"; //大括号没有等号，中间是赋值的等号.
        this.age = 19;
        this.height = 164;
    }
    say() {
        return "shabi";
    }
}
class sj {
    constructor() {
        this.name = "wangruixue";
        this.age = 19;
        this.height = 164;
    }
    say() {
        return "shabi";
    }
    ;
    text() {
        return "shabibi";
    }
}
//类的定义和调用
class dr {
    constructor() {
        this.content = "shabi";
    }
    sat() {
        return "hahhaha";
    }
}
const dt = new dr();
dt.sat();
//定义一个类的继承
class dy extends dr {
    sayLove() {
        return "shebibi";
    }
}
//子类调用父类
const dy1 = new dy();
dy1.sat();
dy1.sayLove();
//子类重写父类同名方法
class dy2 extends dr {
    sat() {
        return "hahahahabi";
    }
    ;
    sayLove() {
        console.log("woshinidie");
    }
}
const dy3 = new dy2();
dy3.sat();
dy3.sayLove();
//子类调用父类中的同名方法，使用super关键字
class girl4 extends dr {
    sat() {
        return super.sat();
    }
    saylove() {
        console.log("我是girl~");
    }
}
//定义一个类，带有构造函数
class Dog {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        console.log(name);
        console.log(age);
        console.log(weight);
    }
}
const aa = new Dog("wangruixue", 19, 104);
//构造函数继承
//class teacher extends Dog{
//   public sex:string;
//   constructor(sex:string){
// 子类构造函数需要使用super关键字来调用父类的构造函数，否则报错
//      super(aa.name,aa.age,aa.weight);
//     this.sex = sex;
//    console.log(this.name);
//    console.log(this.age);属性“age”为私有属性，只能在类“Dog”中访问,属性"weight"受保护，需调用Dog2实例，可访问Dog中的"weight".
//    console.log(this.weight);
//     console.log(this.sex);
// }
//}
//const ab=new Dog2("男");
//Get其实就是对我们的属性进行包装保护在进行输出,Set是对外部访问类的属性做一个类似中间件的处理，确保我们的属性合法。
class run {
    constructor(age) {
        this._age = age;
    }
    set age(age) {
        this._age = age;
    }
    get age() {
        return this._age - 10;
    }
}
const bb = new run(35);
bb.age = 55;
console.log(bb.age);
//static静态方法,静态方法在想调用的时候直接使用类名调用就好.
class ff {
    static foo() {
        console.log("jiayou");
    }
}
ff.foo();
//类的只读属性
class cc {
    constructor() {
        this.gh = "gagagag";
    }
    static poo() {
        console.log("gdksjgkdsg");
    }
}
const sanxi = new cc();
console.log(sanxi.gh); //不可以修改,只读
//抽象类
class GT {
}
class bmw extends GT {
    sdfe() {
        console.log("x-driver");
    }
}
//tsconfig.json
const vv = 2;
//运行tsc demo1.ts
//打开tsconfig.json文件，找到complilerOptions属性下的removeComments:true选项，把注释去掉。这个配置项的意思是，编译时不显示注释，也就是编译出来的js文件不显示注释内容。
//注释依然存在，说明tsconfig.json文件没有起作用。如果要想编译配置文件起作用，可以直接运行tsc命令，这时候tsconfig.json才起作用.
//include 、exclude 和 files
//增加了demo2.ts,但我只想编译demo1.ts
//配置文件不支持单引号，所以里边都要使用双引号。
//files的配置效果和include几乎一样, "files":["demo1.ts"]
//removeComments的值设置为true，就是在js中不显示注释,设置为false,这时候demo.js里就会有注释内容了。
//compileroptions的属性（重点属性）
//removeComments的值设置为true，就是在js中不显示注释,设置为false,这时候demo.js里就会有注释内容了。
//strict属性如果设置为true,就代表我们的编译和书写规范，要按照TypeScript最严格的规范来写
//noImplicitAny 属性,设置为noImplicitAny:true,意思就是值就算是 any（任意值），也要进行类型注释。
function bbf(name) {
    return name;
}
//strictNullChecks 属性,把strictNullChecks设置为false,它的意思就是，不强制检查 NULL 类型。
const srt = null;
