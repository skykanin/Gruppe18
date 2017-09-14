let img=document.getElementsByTagName("img")[0],
trans=document.getElementById("trans");
trans.onmouseenter=function(){
img.style.filter="blur(0)";
}
trans.onmouseleave=function(){
img.style.filter="blur(5px)"
}