function test(){
    let str:string="hello world";
    console.log(str);
}
test();
//定义静态类型
let num:number=1;
//num="str"报错
num=55;//可以
//将变量定义成了何种类型，那么这个变量对应就可以使用其类型对应的方法
console.log(typeof num.toString());
//自定义一个静态类型
interface nidie{
    uname:string,
    age:number
}
const wangruixue: nidie = {
    uname: "王瑞雪",
    age: 19,
  };
//对象类型
const person : {
    age:number,
    height:number,
    name:string
}={
    age:1,
    height:180,
    name:"xiaoguo"
};
console.log(person);
//数组类型
let personArray:string[]=["小红","小蓝","小绿"];
console.log(personArray);
//类类型,参数类型必须是对象
class pg{};
const py:pg=new pg();
//函数类型
const girl:()=>string=()=>{
    return"大脚";
};
//type annotation 类型注解
let count: number;
count = 123;
//type inferrence 类型推断
let countInference = 123;//鼠标放上去会有显示
//不用写类型注解
const a=1;
const b=2;
const c=a+b;//c直接判断为number

//function getTotal(one, two) {
 //   return one + two;
 // }  
 // const total = getTotal(1, 2);  one和two需要类型判断，否则归为any类型
 function getTotal(one: number, two: number) {
    return one + two;
  }
  const total = getTotal(1, 2);
  console.log(total);
//函数无返回值时定义方法
function sy(one:number,two:number):void{
  console.log(one+two);
}
sy(78,56);
//never 返回值类型,如果一个函数是永远也执行不完的，就可以定义返回值为never.
function su():never{
    throw new Error();
    console.log("hello world");
}
function si():never{
    while(true){
        console.log("hello world");
    }
}
//函数参数为对象(解构)时
interface so{
    name:string,
    age:number
}
const sp:so={
    name:"wangruixue",
    age:19
}
function sa(sp:so):string{
    return sp.name+"-"+sp.age;
}
console.log(sa(sp));
//数组中有多种类型
const arr:(number|string)[]=[1,"string",2];
//数组中对象类型的定义
const arr1:{name:string,age:number}[]=[
    {name:"wangruixue",age:19},
    {name:"guodinghang",age:20}
]
//定义一个类型别名，定义别名的时候要以type关键字开始
type ss={name:string,age:number};
const arr2:ss[]=[
    {name:"wangruixue",age:19},
    {name:"guodinghang",age:20}
]
//用类进行定义
class Madam {
    name: string;
    age: number;
  }
const arr3:Madam[]=[
    {name:"wangruixue",age:19},
    {name:"guodinghang",age:20}
]
//元组和数组类似，但是类型注解时会不一样,把数组中的每个元素类型的位置给固定住了，这就叫做元组.
const sf:[string,string,number]=["xiaowang","xiaoguo",19];
const sg:[string,string,number][]=[
    ["a","b",1],
    ["c","d",2]
]
//接口
interface person2{
    name:string,
    age:number,
    height:number,
    waistline?: number//变量是非必需的,加?
    [proname:string]:any,// 属性名的类型是string，对应的值可以是任何类型
}
const liuying2:person2 = {
    name:"刘英",
    age:25,
    height:177,
    sex:"女",
    education:"博士"
}
const usrInterface2 = (liuying:person2):string=>{//箭头函数的类型是string
    let str = '';
    if(liuying.age > 30 || liuying.height < 165)
    {
        str = liuying.name+"未通过审核"
    }
    else
    {
        str = liuying.name+"通过审核,身高："+liuying.height+"年龄："+liuying.age+"性别："+liuying.sex+"学历："+liuying.education;
    }
    return str;
}
let result_ying2 = usrInterface2(liuying2);
console.log(result_ying2);   // 刘英通过审核,身高：177年龄：25性别：女学历：博士
//接口里不仅可以存属性，还可以存方法
interface ying{
    name:string,
    age:number,
    height:number,
    weistline?:number,
    [proname:string]:any,
    say():string//say是一个方法，方法的返回值是string 
}
const wangruixue1:ying={
    name:"wangruixue",
    age:19,
    height:164,
    say() {
        return"shabi"
    },
}
//接口间的继承以及类和接口的结合
interface person3{
    name:string,
    age:number,
    height:number,
    waistline?: number
    [proname:string]:any,// 属性名的类型是string，对应的值可以是任何类型
    say():string,//say()是一个方法，string是方法的返回值
}
class sh implements person3{//类和接口的结合
    name="wangruixue";//大括号没有等号，中间是赋值的等号.
    age=19;
    height=164;
    say(){
        return "shabi";
    }
}
interface person4 extends person3{//接口的继承
    text():string
}
class sj implements person4{
    name="wangruixue";
    age=19;
    height=164;
    say(){
        return "shabi";
    };
    text(): string {
        return"shabibi"
    }
}
//类的定义和调用
class dr{
    content="shabi";
    sat(){
        return "hahhaha"
    }
}
const dt=new dr();
dt.sat();
//定义一个类的继承
class dy extends dr{
    sayLove(){
        return "shebibi"
    }
}
//子类调用父类
const dy1=new dy();
dy1.sat();
dy1.sayLove();
//子类重写父类同名方法
class dy2 extends dr{
    sat(){
        return "hahahahabi"
    };
    sayLove(){
        console.log("woshinidie");
    }
}
const dy3=new dy2();
dy3.sat();
dy3.sayLove();
//子类调用父类中的同名方法，使用super关键字
class girl4 extends dr{
    sat(){
        return super.sat();
    }
    saylove(){
        console.log("我是girl~");
    }
}
//定义一个类，带有构造函数
class Dog {
  constructor(name:string,age:number,weight:number){
    this.name=name;
    this.age=age;
    this.weight=weight;
    console.log(name);
        console.log(age);
        console.log(weight);
  }
  public name:string;
  private age:number;
  protected weight:number;
}
const aa=new Dog("wangruixue",19,104);
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
class run{
    constructor(age:number){
        this._age=age;
    }
    public _age:number;
    set age(age:number){
        this._age=age;
    }
    get age(){
        return this._age-10;
    }
}
const bb=new run(35);
bb.age=55;
console.log(bb.age);
//static静态方法,静态方法在想调用的时候直接使用类名调用就好.
class ff{
    static foo(){
        console.log("jiayou");
    }
}
ff.foo();
//类的只读属性
class cc{
    public readonly gh:string="gagagag";
    static poo(){
        console.log("gdksjgkdsg");
    }
}
const sanxi=new cc();
console.log(sanxi.gh);//不可以修改,只读
//抽象类
abstract class GT{
    abstract sdfe():void;//因为没有具体的方法，所以我们这里不写括号
}
class bmw extends GT
{
    sdfe(){
        console.log("x-driver");
    }
}
//tsconfig.json
const vv:number=2;
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
function bbf(name:any){
    return name;
}
//strictNullChecks 属性,把strictNullChecks设置为false,它的意思就是，不强制检查 NULL 类型。
const srt:string=null;

//rootDir 和 outDir,通过outDir将打包的js都生成在特定的一个文件夹里,又可通过rootDir来指定ts文件的位置

//编译 ES6 语法到 ES5 语法-allowJs
//把sourceMap的注释去掉，在打包的过程中就会给我们生成sourceMap文件,Source map 是一个信息文件，里面储存着位置信息,转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。这无疑给开发者带来了很大方便。


//联合类型及类型保护-类型断言
interface waiter{
   type:string,
    say:()=>{}
}
interface teacher{
    type:string,
   run:()=>{}
}
function person1(animal:waiter|teacher){//animal就是联合类型
    if(animal.type=="waiter"){
        (animal as waiter).say();//as即类型断言,类型断言就是通过断言的方式确定传递过来的准确值
    }else{
        (animal as teacher).run();
    }
}
//类型保护-in 语法,使用in来判断接口中是否有当前你要调用的语法.
function person2(animal:waiter|teacher){
    if("say" in animal){
        animal.say();
    }else{
        animal.run();
    }
}
//类型保护-typeof语法
function add(first:string|number,second:string|number){
    if(typeof first=="string"||typeof second=="string"){
     return `${first}${second}`
    }else{
        return first+second;
    }
}
//类型保护-instanceof 语法,作类型保护的是一个对象，就可以使用instanceof语法来作.
class ww{//类不可以有const ss=...这种写法，它不可以具有const关键字
    ll:number;
}
function pp(first:object|ww,second:object|ww){
    if(first instanceof ww&&second instanceof ww){
        return first.ll+second.ll;
    }else{
        return 0;
    }
}


//数字枚举
enum uuo{
    up=1,
    down,
    left=10,
    right
}//脚标从1开始
console.log(uuo[1]);//up
console.log(uuo[2]);//down
console.log(uuo[3]);//left
console.log(uuo[4]);//right
console.log(uuo[44]);//undefined


console.log(uuo.up);//1
console.log(uuo.down);//2
console.log(uuo.left);//10
console.log(uuo.right);//11

//字符串枚举
enum enumString{
    up = 'UP',
    down = 'DOWN',
    left ='LEFT',
    right = 'RIGHT'
};
console.log(enumString.up);
console.log(enumString.down);
console.log(enumString['left']);
console.log(enumString['right']);
console.log(enumString['ffffffff']);
// 输出：
// UP
// DOWN
// LEFT
// RIGHT
// undefined

//异构枚举,异构枚举就一个枚举中既有数字，也有字符串。
enum hunho{
    up = 1,
    down = 2,
    left ='LEFT',
    right = 'RIGHT'
}
console.log(hunho.up);
console.log(hunho.down);
console.log(hunho['left']);
console.log(hunho['right']);
// 输出：
// 1
// 2
// LEFT
// RIGHT

//const枚举,常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。
const enum eee{
    Up,
    Down,
    Left,
    Right
}
let directions=[eee.Up,eee.Down,eee.Left,eee.Right];
//生成后的代码为：
//var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];


//外部枚举,外部枚举是为了描述当前环境中已经存在的对象的,这个对象可以存在任意的地方，但是一定是已声明的.
declare enum sss{
    A=1,
    B,
    C=3
}

//泛型(例子)
function qu<T>(p:T){
  console.log(typeof p);
  console.log(p);
}
qu<string>("success");

//数组泛型
function query<T>(first:Array<T>){//也可以写为(first:T[])
    console.log(typeof first);
  console.log(first);
}
query<string>(["success","error"]);

//多个泛型的定义
function ax<T,P>(first:T,second:P){
    console.log(`${first}${second}`);
}
ax<number,string>(1,"2");

//类型推断
function join<T, P>(first: T, second: P) {
    return `${first}${second}`;
  }
  join(1,'2');

//类中的泛型
class yy<T>{
    constructor(ppp:Array<T>){
      this.list=ppp;
      console.log(this.list);
    }
    public list:Array<T>
}
const jj=new yy<string>([
    "xiaohong","xiaolan","xiaolvv"
])

//泛型的继承
interface axx{
    name:string
}
class arf<T extends axx>{
    constructor(pp:Array<T>){
        this.lll=pp;
        console.log(this.lll);
    }
    public lll:Array<T>;
    public afd(num:number):string{
        let asd=this.lll[num].name;
        return asd;
    }
}
let result=new arf<axx>([
    {name:"大脚"}, 
    {name:"刘英"},
    {name: "小蒙"}
])
let res=result.afd(1);
console.log(res);

//泛型约束
class selectGirl <T extends string | number>{//约束它的范围
    // 声明一个私有变量数组
    public lists:Array<T>;
    // 构造函数
    constructor(param:Array<T>)
    {
        this.lists = param;
        console.log(this.lists);
    }
    /**
     * 获取名字
     */
    public getName(num:number):T
    {
        return this.lists[num];
    }
}
 
let result1 = new selectGirl<string>([
     '大脚', '刘英', '小蒙' 
]);
 
let res1 = result1.getName(1);
console.log(res1);
// 输出：
// [ '大脚', '刘英', '小蒙' ]
// 刘英