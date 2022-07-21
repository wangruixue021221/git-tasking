var strs="";
function OnClick(obj){
    var str=obj.innerText;
    var numInput=document.getElementById("numInput");
    if(str=="="){
        numInput.value="";
        str=eval(strs);
        strs=str+""
    }else{
        strs+=str;
    }
    if(str=="AC"|str=="清除"){
        numInput.value="";
        strs="";
        str="";
    }
    if(str=="*"|str=="÷"|str=="-"|str=="+"){
        numInput.value=str;
    }else{
    //如果前一次点击的是运算符：先将原有显示的内容清空，再将本次点击的显示到屏幕上.
    if(isNaN(numInput.value)){
        numInput.value="";
    }
        numInput.value+=str;
    }
}