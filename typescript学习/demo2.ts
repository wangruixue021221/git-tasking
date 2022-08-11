const tu:string="hahaha";
//ES6写法
export const name="xh";
//如果不做任何配置，这时候试用tsc是没有效果的。你需要到tsconfig.js文件里进行修改，修改的地方有两个。
//"target":'es5' ,  // 这一项默认是开启的，你必须要保证它的开启，才能转换成功
//"allowJs":true,   // 这个配置项的意思是联通


//noUnusedLocals 和 noUnusedParameters
//如以上"xh"变量，这个变量没有任何地方使用，开启noUnusedLocals：true，开启后我们的程序会直接给我们提示不能这样编写代码，有没有使用的变量，noUnusedParameters是针对于名优使用的函数的，方法和noUnusedLocals：true一样

