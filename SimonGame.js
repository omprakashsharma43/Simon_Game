let gameSequence=[];
let userSequence=[];
let level = 0;
let started = false;
let btns=["one","two","three","four"];
let h2=document.querySelector("h2");

// Starter Code:-
document.addEventListener("keypress",function () {
	if(started == false){
		console.log("Game Start!");
		started = true;
		levelUp();
	}
});

// Level Up Function :-
function levelUp(){
	userSequence=[];
	level++;
	h2.innerText=`Level ${level}`;
let randIndex=Math.floor(Math.random()*3);
let randColor=btns[randIndex];
let randBtn=document.querySelector(`.${randColor}`);
gameSequence.push(randColor);
console.log("Game Sequence :", gameSequence);
	flashGame(randBtn);

}

// Answer Check Function :-
function checkAns(inx) {
	console.log(`Current level ${level}`);
if(userSequence[inx] === gameSequence[inx]){
	if(gameSequence.length==userSequence.length){
		setTimeout(levelUp,1000);
	}
}else{
	h2.innerHTML=`Game Over! Your score is <b>${level}</b><br>Press any key to Start.`;
	document.querySelector("body").style.backgroundColor="red";
	setTimeout(()=>{
	document.querySelector("body").style.backgroundColor="white";
	},150);
	reset();
}
}

// Button Pressed :-
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
btn.addEventListener("click", pressBtn);
}
function pressBtn(){
	console.log("Button Pressed");
	let btn=this;
	// console.log(this);
	flashUser(btn);
	let inp=btn.getAttribute("id");
	userSequence.push(inp);
	console.log("User Sequence :",userSequence);
	 checkAns(userSequence.length-1);
}

// Reset Function :-
function reset() {
	started=false;
	gameSequence=[];
	userSequence=[];
	level=0;
}

// Game Flash :-
function flashGame(btn){
	btn.classList.add("flashGame");
	setTimeout(()=>{
		btn.classList.remove("flashGame");
	},150);
}

// User Flash :-
function flashUser(btn){
	btn.classList.add("flashUser");
	setTimeout(()=>{
		btn.classList.remove("flashUser");
	},150);
}

