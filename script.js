let kierunekX = 0;
let kierunekY = 0;
let robak, animacja, animacja2, animacja3, strona, x, y, jablko, el, koniec;
let wynik = 0;

document.addEventListener("DOMContentLoaded", function(){
stworz.addEventListener("click", nowaGra);
plansza = document.createElement('div');
licznik = document.createElement('p');
licznik.id = "licznik";
rank = document.createElement('div');
rank.id = "rank";
document.body.appendChild(rank);
});
function ruch(event)
{    
    var klawisz = event.key; 
    if (klawisz == 'ArrowLeft' && strona != "PRAWO")
    {
        kierunekX = (-1) * grubosc.value;
        kierunekY = 0;
        strona = "LEWO";
    }
    else if (klawisz == 'ArrowRight' && strona != "LEWO")
    {
        kierunekX = 1 * grubosc.value; 
        kierunekY = 0;
        strona = "PRAWO";
    }
    else if (klawisz == 'ArrowUp' && strona != "DOL")
    {
        kierunekY = (-1) * grubosc.value;  
        kierunekX = 0; 
        strona = "GORA";       
    }
    else if (klawisz == 'ArrowDown' && strona != "GORA")
    {
        kierunekY = 1 * grubosc.value;  
        kierunekX = 0; 
        strona = "DOL";       
    }
}

function nowy_ogon()
{
	el =document.querySelectorAll(".ogon");
	if(el.length>0)
	{
		for(i =el.length-1; i>0; i--)
		{
			el[i].style.top =el[i-1].style.top;
			el[i].style.left =el[i-1].style.left;
		}
		el[0].style.top =robak.style.top;
		el[0].style.left =robak.style.left;		
	}
}

function kierunki()
{   
	nowy_ogon();
    let top = robak.offsetTop;
    let left = robak.offsetLeft;  
    robak.style.top = top+kierunekY+"px";
    robak.style.left = left+kierunekX+"px";
}  

function nowaGra()
{	
    ranking();
	wynik = 0;
	licznik.innerHTML = wynik;
	clearInterval(animacja);
	clearInterval(animacja2);
	clearInterval(animacja3);
	plansza.remove();
	plansza.id="plansza";
	plansza.style.width=wielkosc.value +"px";
	plansza.style.height=wielkosc.value +"px";
    plansza.innerHTML="";
	main.appendChild(plansza);
    robak = document.createElement('div');
    robak.id = "wonsz";
	robak.style.width=grubosc.value +"px";
	robak.style.height=grubosc.value +"px";
    plansza.appendChild(robak);
    document.addEventListener('keydown', ruch);
    animacja =setInterval(kierunki, 150 / szybkosc.value);   
    robak = document.getElementById("wonsz");
    plansza = document.getElementById("plansza");
    kierunekX = 0;
    kierunekY = 0; 
    strona = "";
    animacja2 = setInterval(kolizja, 150 / szybkosc.value);
    animacja3 = setInterval(jedzenie, 150 / szybkosc.value);
    randomJablko();
	main.appendChild(licznik);	
}

function kolizja() 
{
	if(sciany.checked)
	{
		plansza.style.border = "1px dashed black";
		if(robak.offsetTop - plansza.offsetTop < 1 && strona == "GORA")
			robak.style.top = parseInt(plansza.offsetTop) + parseInt(plansza.offsetHeight) - grubosc.value - 1 + "px";
		else if(robak.offsetLeft - plansza.offsetLeft < 1 && strona == "LEWO")
			robak.style.left = parseInt(plansza.offsetLeft) + parseInt(plansza.offsetWidth) - grubosc.value - 1 + "px";
		else if(plansza.offsetHeight + plansza.offsetTop - robak.offsetTop <= 1 && strona == "DOL")
			robak.style.top = parseInt(plansza.offsetTop) + 1 + "px";
		else if(plansza.offsetWidth + plansza.offsetLeft - robak.offsetLeft <= 1 && strona == "PRAWO")
			robak.style.left = parseInt(plansza.offsetLeft) + 1 + "px";
	}
	else
	{
        plansza.style.border = "1px solid black";
		if((robak.offsetTop - plansza.offsetTop < 1 && strona == "GORA") || (robak.offsetLeft - plansza.offsetLeft < 1 && strona == "LEWO") || (plansza.offsetHeight + plansza.offsetTop - robak.offsetTop <= 1 && strona == "DOL") || (plansza.offsetWidth + plansza.offsetLeft - robak.offsetLeft <= 1 && strona == "PRAWO"))
		{
			dobazy();
		}
	}
	for(i=1; i<el.length; i++)
		if (el[i].offsetTop == robak.offsetTop && el[i].offsetLeft == robak.offsetLeft)
		{
			dobazy();
		}
}
  
function dobazy()
{
    clearInterval(animacja3);
    clearInterval(animacja2);
    clearInterval(animacja);
    koniec  = prompt("Przegrana, twój wynik to: "+wynik+"\nPodaj nazwę gracza:", "Nazwa gracza");
    if(koniec != null)
    {
        var polaczenie = new XMLHttpRequest();
        polaczenie.open("GET", "zapis.php?nazwa_gracza="+koniec+"&wynik="+wynik);
        polaczenie.send();
        polaczenie.onreadystatechange =function(){
            if(polaczenie.readyState ==4 && polaczenie.status == 200)
                console.log(polaczenie.response);
        };
        nowaGra();
    }
    else
        nowaGra();
}

function ranking()
{
   var polaczenie2 = new XMLHttpRequest();
    polaczenie2.open("GET", "odczyt.php");
    polaczenie2.send();
    polaczenie2.onreadystatechange  =function(){
        if(polaczenie2.readyState ==4 && polaczenie2.status == 200)
            rank.innerHTML=polaczenie2.response;
    }       
}

function randomJablko()
{  
	
	y =parseInt(Math.random()*plansza.offsetHeight/grubosc.value)*grubosc.value+plansza.offsetTop+plansza.offsetParent.offsetTop+1;
	x =parseInt(Math.random()*plansza.offsetWidth/grubosc.value)*grubosc.value+plansza.offsetLeft+plansza.offsetParent.offsetLeft+1;
	jablko = document.createElement('div');
	jablko.id = "jablko";
	jablko.style.top = y + "px";
	jablko.style.left = x + "px";
	jablko.style.width=grubosc.value +"px";
	jablko.style.height=grubosc.value +"px";
	/*if(el[0])
	{
		for (let i = 0; i<el.length; i++)
		{
			if(el[i].style.top = jablko.style.top && el[i].style.left = jablko.style.left)
			{
				randomJablko();
			}
			else
				plansza.appendChild(jablko);	
		}
	}
	else*/
		plansza.appendChild(jablko);	
		
}

/*
function sprawdz()
{
	if(el.length>0)
	{
		for (let i = 0; i<el.length; i++)
		{
			if(el[i].style.top = y && el[i].style.left = x)
			{
				randomJablko();
			}
		}
	}
	else
		randomJablko();
}
*/

function jedzenie() 
{
    if(robak.offsetTop == jablko.offsetTop && robak.offsetLeft == jablko.offsetLeft)
    {
		robak.style.top+=grubosc.value+"px";
		jablko.remove();
		wynik++;
		licznik.innerHTML = wynik;
		ogon = document.createElement('div');
		ogon.className = 'ogon';
		ogon.style.width = grubosc.value + "px";
		ogon.style.height = grubosc.value + "px";
		ogon.style.top = robak.style.top;
		ogon.style.left = robak.style.left;
		plansza.appendChild(ogon);
        randomJablko();	
	}
}
//let o = 0;
//let animacja4 = setInterval(obrot, 20);
//function obrot()
//{
//	jablko.style.transform = "rotate("+o+"deg)";
//	o+=10;
//}





