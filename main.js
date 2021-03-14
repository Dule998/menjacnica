var dinPeuro=118.5;
var dinKeuro=117;

var dinPusd=97.95;
var dinKusd=94.25;

var dinPchf=109.65;
var dinKchf=105.40;

var dinPaud=74.35;
var dinKaud=69.60;

var euroUsd=1.23;
var usdEuro=0.81;

var euroChf=1.09;
var chfEuro=0.92;

var euroAud=1.62;
var audEuro=0.62;

var usdChf=0.89;
var chfUsd=1.12;

var usdAud=1.32;
var audUsd=0.76;

var chfAud=1.48;
var audChf=0.68;
function Racunaj(){
	let selektor1=document.querySelector("#selektor1");
	let selektor2=document.querySelector("#selektor2");

	let sel1=Number(selektor1.value);
	let sel2=Number(selektor2.value);
    /*EUR->DIN*/
	if(sel1==1&&sel2==2){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*dinKeuro;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*DIN->EUR*/
	else if(sel1==2&&sel2==1){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos/dinPeuro;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;

	}
    
	
    /*DIN->USD*/
	else if(sel1==2&&sel2==3){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos/dinPusd;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*USD->DIN*/
	else if(sel1==3&&sel2==2){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*dinKusd;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*isti vrednosti*/
	else if(sel1==sel2){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=unetiIznos;
	}
	/*DIN->CHF*/
	else if(sel1==2&&sel2==4){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos/dinPchf;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*CHF->DIN*/
	else if(sel1==4&&sel2==2){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*dinKchf;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*DIN->AUD*/
	else if(sel1==2&&sel2==5){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos/dinPaud;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*AUD->DIN*/
	else if(sel1==5&&sel2==2){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*dinKaud;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*EUR->USD*/
	else if(sel1==1&&sel2==3){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*euroUsd;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*USD->EUR*/
	else if(sel1==3&&sel2==1){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*usdEuro;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*EUR->CHF*/
	else if(sel1==1&&sel2==4){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*euroChf;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*CHF->EUR*/
	else if(sel1==4&&sel2==1){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*chfEuro;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*EUR->AUD*/
	else if(sel1==1&&sel2==5){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*euroAud;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*AUD->EUR*/
	else if(sel1==5&&sel2==1){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*audEuro;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*USD->CHF*/
	else if(sel1==3&&sel2==4){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*usdChf;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*CHF->USD*/
	else if(sel1==4&&sel2==3){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*chfUsd;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*USD->AUD*/
	else if(sel1==3&&sel2==5){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*usdAud;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*AUD->USD*/
	else if(sel1==5&&sel2==3){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*audUsd;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*CHF->AUD*/
	else if(sel1==4&&sel2==5){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*chfAud;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}
	/*AUD->CHF*/
	else if(sel1==5&&sel2==4){
		let izn=document.querySelector('#unetiIznos');
		let unetiIznos=Number(izn.value);
		let racunaj=unetiIznos*audChf;
		let r=racunaj.toFixed(2);
		let poljeIznos=document.querySelector("#rezultat").innerHTML=r;
	}

}