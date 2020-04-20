function saveTheme(colorChoice){
localStorage.setItem('theme', colorChoice);
apply();
}
var theme = localStorage.getItem('theme');
var main = document.body.style;
var picker = document.getElementById('cPick');
if(theme == null){
theme = 'default';
}else{
picker.value = theme;
}apply();
function apply(){
if(picker.value == 'pink'){
main.background = 'pink';
main.color = 'black';
document.getElementById("menubtn").style.color = 'black';
document.getElementById('done').style.color = "black";
document.getElementById('set-opt').style.color = "black";
document.getElementById('cPick').style.color = "black";
}
if(picker.value == 'hotpink'){
main.background = 'hotpink';
main.color = 'black';
document.getElementById("menubtn").style.color = 'black';
document.getElementById('done').style.color = "black";
document.getElementById('set-opt').style.color = "black";
document.getElementById('cPick').style.color = "black";
}
if(picker.value == 'orange'){
main.background = 'orange';
main.color = 'black';
document.getElementById("menubtn").style.color = 'black';
document.getElementById('done').style.color = "black";
document.getElementById('set-opt').style.color = "black";
document.getElementById('cPick').style.color = "black";
}
if(picker.value == 'green'){
main.background = 'green';
main.color = 'white';
document.getElementById("menubtn").style.color = 'white';
document.getElementById('done').style.color = "white";
document.getElementById('set-opt').style.color = "white";
document.getElementById('cPick').style.color = "white";
}
if(picker.value == 'blue'){
main.background = 'blue';
main.color = 'white';
document.getElementById("menubtn").style.color = 'white';
document.getElementById('done').style.color = "white";
document.getElementById('set-opt').style.color = "white";
document.getElementById('cPick').style.color = "white";
}
if(picker.value == 'red'){
main.background = 'red';
main.color = 'white';
document.getElementById("menubtn").style.color = 'white';
document.getElementById('done').style.color = "white";
document.getElementById('set-opt').style.color = "white";
document.getElementById('cPick').style.color = "white";
}
if(picker.value == 'default'){
main.background = 'black';
main.color = 'white';
document.getElementById("menubtn").style.color = 'white';
document.getElementById('done').style.color = "white";
document.getElementById('set-opt').style.color = "white";
document.getElementById('cPick').style.color = "white";
}
if(picker.value == 'yellow'){
main.background = 'yellow';
main.color = 'black';
document.getElementById("menubtn").style.color = 'black';
document.getElementById('done').style.color = "black";
document.getElementById('set-opt').style.color = "black";
document.getElementById('cPick').style.color = "black";
}
if(picker.value == 'darkblue'){
main.background = 'darkblue';
main.color = 'white';
document.getElementById("menubtn").style.color = 'white';
document.getElementById('done').style.color = "white";
document.getElementById('set-opt').style.color = "white";
document.getElementById('cPick').style.color = "white";
}
if(picker.value == 'purple'){
main.background = 'purple';
main.color = 'white';
document.getElementById("menubtn").style.color = 'white';
document.getElementById('done').style.color = "white";
document.getElementById('set-opt').style.color = "white";
document.getElementById('cPick').style.color = "white";
}}
