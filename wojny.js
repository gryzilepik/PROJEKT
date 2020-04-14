let p1, p2, plansza, jablko, strona_p1, strona_p2, kierunek_p1Y, kierunek_p2Y, kierunek_p1X, kierunek_p2X, czy_moze_zmienic_kierunek_p1, czy_moze_zmienic_kierunek_p2, animacja, animacja2, animacja3, animacja4, el_p1, el_p2;
document.addEventListener("DOMContentLoaded", function(){ 
    restart.addEventListener("click", nowaGra);  
    plansza = document.createElement('div');
});
function p1_ruch(event)
{    
    var klawisz = event.key; 
    if (klawisz == 'a' && strona_p1 != "PRAWO" && czy_moze_zmienic_kierunek_p1 == true)
    {
        strona_p1 = "LEWO";
        kierunek_p1X = -30;
        kierunek_p1Y = 0;
        czy_moze_zmienic_kierunek_p1 = false;
    }
    else if (klawisz == 's' && strona_p1 != "GORA" && czy_moze_zmienic_kierunek_p1 == true)
    {
        strona_p1 = "DOL";
        kierunek_p1Y = 30;  
        kierunek_p1X = 0; 
        czy_moze_zmienic_kierunek_p1 = false;       
    }
    else if (klawisz == 'd' && strona_p1 != "LEWO" && czy_moze_zmienic_kierunek_p1 == true)
    {
        strona_p1 = "PRAWO";
        kierunek_p1X = 30; 
        kierunek_p1Y = 0;
        czy_moze_zmienic_kierunek_p1 = false;
    }
    else if (klawisz == 'w' && strona_p1 != "DOL" && czy_moze_zmienic_kierunek_p1 == true)
    {
        strona_p1 = "GORA"; 
        kierunek_p1Y = -30;  
        kierunek_p1X = 0; 
        czy_moze_zmienic_kierunek_p1 = false;      
    }
}
function p2_ruch(event)
{    
    var klawisz = event.key; 
    if (klawisz == 'ArrowLeft' && strona_p2 != "PRAWO" && czy_moze_zmienic_kierunek_p2 == true)
    {
        strona_p2 = "LEWO";
        kierunek_p2X = -30;
        kierunek_p2Y = 0;
        czy_moze_zmienic_kierunek_p2 = false;
    }
    else if (klawisz == 'ArrowDown' && strona_p2 != "GORA" && czy_moze_zmienic_kierunek_p2 == true)
    {
        strona_p2 = "DOL";
        kierunek_p2Y = 30;  
        kierunek_p2X = 0; 
        czy_moze_zmienic_kierunek_p2 = false;       
    }
    else if (klawisz == 'ArrowRight' && strona_p2 != "LEWO" && czy_moze_zmienic_kierunek_p2 == true)
    {
        strona_p2 = "PRAWO";
        kierunek_p2X = 30; 
        kierunek_p2Y = 0;
        czy_moze_zmienic_kierunek_p2 = false;
    }
    else if (klawisz == 'ArrowUp' && strona_p2 != "DOL" && czy_moze_zmienic_kierunek_p2 == true)
    {
        strona_p2 = "GORA"; 
        kierunek_p2Y = -30;  
        kierunek_p2X = 0; 
        czy_moze_zmienic_kierunek_p2 = false;      
    }
}

function nowy_ogon_p1()
{
	el_p1 =document.querySelectorAll(".ogon_p1");
	if(el_p1.length>0)
	{
		for(i =el_p1.length-1; i>0; i--)
		{
			el_p1[i].style.top =el_p1[i-1].style.top;
			el_p1[i].style.left =el_p1[i-1].style.left;
		}
		el_p1[0].style.top =p1.style.top;
		el_p1[0].style.left =p1.style.left;
        
	}
}

function nowy_ogon_p2()
{
	el_p2 =document.querySelectorAll(".ogon_p2");
	if(el_p2.length>0)
	{
		for(i =el_p2.length-1; i>0; i--)
		{
			el_p2[i].style.top =el_p2[i-1].style.top;
			el_p2[i].style.left =el_p2[i-1].style.left;
		}
		el_p2[0].style.top =p2.style.top;
		el_p2[0].style.left =p2.style.left;
        
	}
}

function przyspieszenie(e)
{
    if(e.key == "e")
    {
        clearInterval(animacja);
        clearInterval(animacja3);
        clearInterval(animacja4);
        animacja = setInterval(kierunki_p1, 100); 
        animacja3 = setInterval(kolizja, 100);   
        animacja4 = setInterval(jedzenie, 100);
        document.removeEventListener('keydown', przyspieszenie);
    }
    if(e.key == "l")
    {
        clearInterval(animacja2);
        clearInterval(animacja3);
        clearInterval(animacja4);
        animacja2 = setInterval(kierunki_p2, 100);
        animacja3 = setInterval(kolizja, 100);
        animacja4 = setInterval(jedzenie, 100);
        document.removeEventListener('keydown', przyspieszenie);
    }
}

function n_przyspieszenie(e)
{
    if(e.key == "e")
    {
        clearInterval(animacja);
        clearInterval(animacja3);
        clearInterval(animacja4);
        animacja = setInterval(kierunki_p1, 150);   
        animacja3 = setInterval(kolizja, 150);   
        animacja4 = setInterval(jedzenie, 150);   
        document.addEventListener('keydown', przyspieszenie);
    }
    if(e.key == "l")
    {
        clearInterval(animacja2);
        clearInterval(animacja3);
        clearInterval(animacja4);
        animacja2 = setInterval(kierunki_p2, 150);
        animacja3 = setInterval(kolizja, 150);
        animacja4 = setInterval(jedzenie, 150);
        document.addEventListener('keydown', przyspieszenie);
    }
}

function kierunki_p1()
{ 
    nowy_ogon_p1();
    let top_p1 = p1.offsetTop;
    let left_p1 = p1.offsetLeft;  
    p1.style.top = top_p1+kierunek_p1Y+"px";
    p1.style.left = left_p1+kierunek_p1X+"px";
    czy_moze_zmienic_kierunek_p1 = true;
}  

function kierunki_p2()
{ 
    nowy_ogon_p2();
    let top_p2 = p2.offsetTop;
    let left_p2 = p2.offsetLeft; 
    p2.style.top = top_p2+kierunek_p2Y+"px";
    p2.style.left = left_p2+kierunek_p2X+"px";
    czy_moze_zmienic_kierunek_p2 = true;
}  

function nowaGra()
{
    document.getElementById('sterowanie').style.visibility = "visible";
    clearInterval(animacja);
    clearInterval(animacja2);
    clearInterval(animacja3);
    clearInterval(animacja4);
    document.addEventListener('keydown', przyspieszenie);
    document.addEventListener('keyup', n_przyspieszenie);   
    kierunek_p1X = 0;
    kierunek_p2X = 0;
    kierunek_p1Y = 0;
    kierunek_p2Y = 0;
    strona_p1 = "";
    strona_p2 = "";
    animacja = setInterval(kierunki_p1, 150);
    animacja2 = setInterval(kierunki_p2, 150);
    animacja3 = setInterval(kolizja, 150);
    animacja4 = setInterval(jedzenie, 150);
    document.addEventListener('keydown', p1_ruch);
    document.addEventListener('keydown', p2_ruch);
    plansza.id = "plansza";
    main.appendChild(plansza);
    plansza.innerHTML = "";
    p1 = document.createElement('div');
    p1.id = "p1";
    p1.innerHTML = "P1";
    plansza.appendChild(p1);
    p2 = document.createElement('div');
    p2.id = "p2";
    p2.innerHTML = "P2";
    p2.style.left = plansza.offsetLeft + plansza.offsetWidth - 33;
    p2.style.top = plansza.offsetTop + plansza.offsetHeight - 33;
    plansza.appendChild(p2);
    randomJablko();
}


function kolizja()
{
    if((p1.offsetTop - plansza.offsetTop < 3 && strona_p1 == "GORA") || (p1.offsetLeft - plansza.offsetLeft < 3 && strona_p1 == "LEWO") || (plansza.offsetHeight + plansza.offsetTop - p1.offsetTop <= 3 && strona_p1 == "DOL") || (plansza.offsetWidth + plansza.offsetLeft - p1.offsetLeft <= 3 && strona_p1 == "PRAWO"))
    {
        alert("Gracz czerwony chciał uciec z pola bitwy.");    
        p1.remove();
        p2.remove();
        nowaGra();
    }
    else if((p2.offsetTop - plansza.offsetTop < 3 && strona_p2 == "GORA") || (p2.offsetLeft - plansza.offsetLeft < 3 && strona_p2 == "LEWO") || (plansza.offsetHeight + plansza.offsetTop - p2.offsetTop <= 3 && strona_p2 == "DOL") || (plansza.offsetWidth + plansza.offsetLeft - p2.offsetLeft <= 3 && strona_p2 == "PRAWO"))
    {
        alert("Gracz niebieski chciał uciec z pola bitwy.")
        p1.remove();
        p2.remove();
        nowaGra();
    }
    
    for(i=1; i<el_p1.length; i++)
    {
		if(el_p1[i].offsetTop == p1.offsetTop && el_p1[i].offsetLeft == p1.offsetLeft)
		{
            alert("Gracz czerwony się zakręcił...");
            p1.remove();
            p2.remove();
            nowaGra();          
		}
        else if(el_p1[i].offsetTop == p2.offsetTop && el_p1[i].offsetLeft == p2.offsetLeft)
        {
            alert("Gracz niebieski przegrywa.");
            p1.remove();
            p2.remove();
            nowaGra(); 
        }
    }
    
    for(i=1; i<el_p2.length; i++)
    {
		if(el_p2[i].offsetTop == p2.offsetTop && el_p2[i].offsetLeft == p2.offsetLeft)
		{
            alert("Gracz niebieski się zakręcił...");
            p1.remove();
            p2.remove();
            nowaGra();
		}
        else if(el_p2[i].offsetTop == p1.offsetTop && el_p2[i].offsetLeft == p1.offsetLeft)
        {
            alert("Gracz czerwony przegrywa.");
            p1.remove();
            p2.remove();
            nowaGra(); 
        }
    }
    
}

function randomJablko()
{  

    y = parseInt(Math.random()*750/30)*30 + plansza.offsetTop+3;
	
    x = parseInt(Math.random()*750/30)*30 + plansza.offsetLeft+3;
    
	jablko = document.createElement('div');
	jablko.id = "jablko";
	jablko.style.top = y + "px";
	jablko.style.left = x + "px";
	jablko.style.width=30 +"px";
	jablko.style.height=30 +"px";
    plansza.appendChild(jablko);	
		
}

function jedzenie() 
{
    if(p1.offsetTop == jablko.offsetTop && p1.offsetLeft == jablko.offsetLeft)
    {
		p1.style.top+=30+"px";
		jablko.remove();
		ogon_p1 = document.createElement('div');
		ogon_p1.className = 'ogon_p1';
		ogon_p1.style.width = 30 + "px";
		ogon_p1.style.height = 30 + "px";
		ogon_p1.style.top = p1.style.top;
		ogon_p1.style.left = p1.style.left;
		plansza.appendChild(ogon_p1);
        randomJablko();	
	}
    else if(p2.offsetTop == jablko.offsetTop && p2.offsetLeft == jablko.offsetLeft)
    {
        p2.style.top+=30+"px";
		jablko.remove();
		ogon_p2 = document.createElement('div');
		ogon_p2.className = 'ogon_p2';
		ogon_p2.style.width = 30 + "px";
		ogon_p2.style.height = 30 + "px";
		ogon_p2.style.top = p2.style.top;
		ogon_p2.style.left = p2.style.left;
		plansza.appendChild(ogon_p2);
        randomJablko();	
    }
}

