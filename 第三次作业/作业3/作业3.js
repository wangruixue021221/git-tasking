function count() {
    //获取当前时间
    var date = new Date();
    var now = date.getTime();
    //设置截止时间
    var endDate = new Date("2022-9-3 0:0:0");
    var end = endDate.getTime();
    //获取截止时间和当前时间的时间差
    var leftTime = end-now;
    //定义变量 d,h,m,s分别保存天数，小时，分钟，秒
    var d,h,m,s;
    //判断剩余天数，时，分，秒
    if (leftTime>=0) {
    //Math.floor() 返回小于或等于一个给定数字的最大整数。
        d = Math.floor(leftTime/1000/60/60/24);
        h = Math.floor(leftTime/1000/60/60%24);
        m = Math.floor(leftTime/1000/60%60);
        s = Math.floor(leftTime/1000%60);                   
    }
    //将时间赋值到div中
    document.getElementById("day").innerHTML = d+"天";
    document.getElementById("hour").innerHTML = h+"时";
    document.getElementById("minute").innerHTML = m+"分";
    document.getElementById("second").innerHTML = s+"秒";
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(count,1000);
}