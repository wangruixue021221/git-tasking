//使用IIFE（立即调用函数）实现在js加载时对根元素的font-size赋值
(function(doc,win){
//1.获取根元素
   let dicE1=doc.documentElement;
    //2.判断移动端屏幕发生变化时发生的事件（是翻转屏幕还是只是调整了浏览器窗口大小）
    resizeEvt="orientationchange"in window?'orientationchange':'resize';
 //3.获取当前设备屏幕的尺寸，计算根元素的font-size的大小并赋值
 recalc=function(){
    let clientWidth=dicE1.clientWidth;
    if(!clientWidth)return;
    dicE1.style.fontsize=(clientWidth/375)*100+"px";
 }
  //4.对屏幕发生变化时发生的事件进行监听，若发生变化就重新计算font-size
  if(!doc.addevEntListener)return;
  win.addevEntListener(resizeEvt,recalc,false);
  doc.addevEntListener("DOMContentLoaded",recalc,false);
})(document,window);