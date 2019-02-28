var choiceHuman;
var choiceAI;
var gridArray=[];
var tempArray=[];
var index;
var resultFlag;
var count;
var countVisits;
var state=0;
var gridButtonList = document.getElementsByClassName("gridButton");
var resetButtonList = document.getElementsByClassName("resetButton");
var soundLoadScreen = new Audio("sounds/pad_confirm.wav");
var soundHitSocialIcon = new Audio("sounds/chime_bell.wav");
var soundImprintMark = new Audio("sounds/pop_drip.wav");
var soundWinningApplause = new Audio("sounds/applause.wav");

function init(){
//location.reload();
soundLoadScreen.play();
document.getElementById("result").innerHTML= "TicTacToe";
document.addEventListener("deviceready", onDeviceReady, false);
state=0;
for (var i = 0; i < gridButtonList.length; i++) {


//gridButtonList[i].style.background="black";
//gridButtonList[i].disabled=true;
gridButtonList[i].innerHTML="";
	}
resetButtonList[0].disabled=true;
enableStart();
}

function reset(){
location.reload();
}

function remember(getId){
disableStart();
doTheseOnGamePlay();

enableGridReset();
choiceHuman=document.getElementById(getId).innerHTML;
if(choiceHuman==='X'){
choiceAI='O';
}
else 
choiceAI='X';
console.log("Human_Chose :"+choiceHuman);
console.log("AI_Chose :"+ choiceAI);
}

function enableGridReset(){
for (var i = 0; i < gridButtonList.length; i++) {
gridButtonList[i].disabled=false;
	}
resetButtonList[0].disabled=false;
}

function imprintHuman(getId){
soundImprintMark.play();
document.getElementById(getId).innerHTML=choiceHuman;
document.getElementById(getId).style.color = "white";
//disable this cell so can't be updated again =) 
document.getElementById(getId).disabled=true;
updateGridArray();

tests(choiceHuman);
if(state===0){
countVisits=0;
while(gridArray[index]!='' && countVisits<=7){
countVisits+=1;
index = randomCalc(0,8);
}
console.log("random num generated is :"+index);
console.log("count for num of visits is :"+countVisits);

imprintAI(index);

}
else
noMovesNow();
}

function imprintAI(ind){
gridButtonList[ind].innerHTML=choiceAI;
gridButtonList[ind].style.color="white";
gridButtonList[ind].disabled=true;
tests(choiceAI);
}

function randomCalc(min, max){
var x = Math.floor(Math.random() * (max - min+1)) + min;
return x;
}

function updateGridArray(){
for (var i = 0; i < gridButtonList.length; i++) {
       gridArray[i]=gridButtonList[i].innerHTML;
	}
	console.log("gridArray is : "+gridArray);
}

function enableStart(){
var dataToggleValue= document.getElementById("start").getAttribute("data-toggle");  
if ((dataToggleValue==="")) {       
    document.getElementById("start").removeAttribute("data-toggle");  
    document.getElementById("start").setAttribute("data-toggle", "modal");
}
}

function disableStart(){
var dataToggleValue = document.getElementById("start").getAttribute("data-toggle");  
if ((dataToggleValue==="modal")) {      
    document.getElementById("start").removeAttribute("data-toggle");  
document.getElementById("start").setAttribute("data-toggle", "");
}
}

function tests(mark){
resultFlag=0;
while(resultFlag<=3){
horizontalTest(mark);

verticalTest(mark);

diagonalTest(mark);

}
console.log("p tag value at this point is :"+ document.getElementById("result").innerHTML);
console.log("result Flag value before going into draw function is :"+resultFlag);
if(resultFlag===6){
drawTest();
}
}

function horizontalTest(mark){
if(gridButtonList[0].innerHTML===mark && gridButtonList[1].innerHTML===mark && gridButtonList[2].innerHTML===mark ){
gridButtonList[0].style.background="gray";
gridButtonList[0].style.color="white";
gridButtonList[1].style.background="gray";
gridButtonList[1].style.color="white";
gridButtonList[2].style.background="gray";
gridButtonList[2].style.color="white";
document.getElementById("result").innerHTML=  mark + "  wins the   " + "<i class='fa fa-trophy' style='color:gold;font-size:30px;'></i>";
soundWinningApplause.play();
state=1;
}
else if (gridButtonList[3].innerHTML===mark && gridButtonList[4].innerHTML===mark && gridButtonList[5].innerHTML===mark ){
gridButtonList[3].style.background="gray";
gridButtonList[3].style.color="white";
gridButtonList[4].style.background="gray";
gridButtonList[4].style.color="white";
gridButtonList[5].style.background="gray";
gridButtonList[5].style.color="white";
document.getElementById("result").innerHTML=  mark + "  wins the   " + "<i class='fa fa-trophy' style='color:gold;font-size:30px;'></i>";
soundWinningApplause.play();
state=1;
}
else if (gridButtonList[6].innerHTML===mark && gridButtonList[7].innerHTML===mark && gridButtonList[8].innerHTML===mark ){
gridButtonList[6].style.background="gray";
gridButtonList[6].style.color="white";
gridButtonList[7].style.background="gray";
gridButtonList[7].style.color="white";
gridButtonList[8].style.background="gray";
gridButtonList[8].style.color="white";
document.getElementById("result").innerHTML=  mark + "  wins the   " + "<i class='fa fa-trophy' style='color:gold;font-size:30px;'></i>";
soundWinningApplause.play();
state=1;
}

else
resultFlag+=1;
}

function verticalTest(mark){
if(gridButtonList[0].innerHTML===mark && gridButtonList[3].innerHTML===mark && gridButtonList[6].innerHTML===mark ){
gridButtonList[0].style.background="gray";
gridButtonList[0].style.color="white";
gridButtonList[3].style.background="gray";
gridButtonList[3].style.color="white";
gridButtonList[6].style.background="gray";
gridButtonList[6].style.color="white";
document.getElementById("result").innerHTML=  mark + "  wins the   " + "<i class='fa fa-trophy' style='color:gold;font-size:30px;'></i>";
soundWinningApplause.play();
state=1;
}
else if (gridButtonList[1].innerHTML===mark && gridButtonList[4].innerHTML===mark && gridButtonList[7].innerHTML===mark ){
gridButtonList[1].style.background="gray";
gridButtonList[1].style.color="white";
gridButtonList[4].style.background="gray";
gridButtonList[4].style.color="white";
gridButtonList[7].style.background="gray";
gridButtonList[7].style.color="white";
document.getElementById("result").innerHTML=  mark + "  wins the   " + "<i class='fa fa-trophy' style='color:gold;font-size:30px;'></i>";
soundWinningApplause.play();
state=1;
}
else if (gridButtonList[2].innerHTML===mark && gridButtonList[5].innerHTML===mark && gridButtonList[8].innerHTML===mark ){
gridButtonList[2].style.background="gray";
gridButtonList[2].style.color="white";
gridButtonList[5].style.background="gray";
gridButtonList[5].style.color="white";
gridButtonList[8].style.background="gray";
gridButtonList[8].style.color="white";
document.getElementById("result").innerHTML=  mark + "  wins the   " + "<i class='fa fa-trophy' style='color:gold;font-size:30px;'></i>";
soundWinningApplause.play();
state=1;
}
else
resultFlag+=1;
}

function diagonalTest(mark){
if(gridButtonList[2].innerHTML===mark && gridButtonList[4].innerHTML===mark && gridButtonList[6].innerHTML===mark ){
gridButtonList[2].style.background="gray";
gridButtonList[2].style.color="white";
gridButtonList[4].style.background="gray";
gridButtonList[4].style.color="white";
gridButtonList[6].style.background="gray";
gridButtonList[6].style.color="white";
document.getElementById("result").innerHTML=  mark + "  wins the   " + "<i class='fa fa-trophy' style='color:gold;font-size:30px;'></i>";
soundWinningApplause.play();
state=1;
}

else if (gridButtonList[0].innerHTML===mark && gridButtonList[4].innerHTML===mark && gridButtonList[8].innerHTML===mark ){
gridButtonList[0].style.background="gray";
gridButtonList[0].style.color="white";
gridButtonList[4].style.background="gray";
gridButtonList[4].style.color="white";
gridButtonList[8].style.background="gray";
gridButtonList[8].style.color="white";
document.getElementById("result").innerHTML= mark + "  wins the   " + "<i class='fa fa-trophy' style='color:gold;font-size:30px;'></i>";
soundWinningApplause.play();
state=1;
}
else
resultFlag+=1;
}

function drawTest(){
count=0;
for(var i=0;i<gridButtonList.length;i++){
if(gridButtonList[i].innerHTML===""){
count+=1;
}
}
console.log("empty cells at this point i.e. count = "+count);
if(count===0){
state=1;
document.getElementById("result").innerHTML= "Match Draw !!  "+ "<i class='fa fa-meh-o' style='color:red;font-size:30px;'></i>";
//document.getElementById("result").style.color = "red";
}
}

function noMovesNow(){
for (var i = 0; i < gridButtonList.length; i++) {
gridButtonList[i].disabled=true;
	}
}

		function onDeviceReady(){
		document.addEventListener("backbutton", onBackKeyDown, false);
		document.addEventListener("saveButton", save, false);
		devicePlatform = device.platform;
		console.log(devicePlatform);
		}
		function onBackKeyDown() {
			if(confirm("Hey!! You really wanna leave??")){
				navigator.app.exitApp();
			}
 		}
		
		
		function doTheseOnGamePlay(){
		document.getElementById("result").innerHTML = "Game In Progress...";
		//document.getElementById("result").style.color = "Green";
			
		}