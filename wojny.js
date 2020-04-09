let p1, p2, plansza, jablko, strona_p1, strona_p2, kierunek_p1Y, kierunek_p2Y, kierunek_p1X, kierunek_p2X, czy_moze_zmienic_kierunek_p1, czy_moze_zmienic_kierunek_p2, animacja;

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


function kierunki()
{ 
    let top_p2 = p2.offsetTop;
    let left_p2 = p2.offsetLeft;
    let top_p1 = p1.offsetTop;
    let left_p1 = p1.offsetLeft;  
    p1.style.top = top_p1+kierunek_p1Y+"px";
    p1.style.left = left_p1+kierunek_p1X+"px";
    p2.style.top = top_p2+kierunek_p2Y+"px";
    p2.style.left = left_p2+kierunek_p2X+"px";
    czy_moze_zmienic_kierunek_p1 = true;
    czy_moze_zmienic_kierunek_p2 = true;
}  

function nowaGra()
{
    animacja = setInterval(kierunki, 150);
    animacja2 = setInterval(kolizja, 150);
    document.addEventListener('keydown', p1_ruch);
    document.addEventListener('keydown', p2_ruch);
    plansza.id = "plansza";
    main.appendChild(plansza);   
    p1 = document.createElement('div');
    p1.id = "p1";
    plansza.appendChild(p1);
    p2 = document.createElement('div');
    p2.id = "p2";
    plansza.appendChild(p2);
}

function kolizja()
{
    if((p1.offsetTop - plansza.offsetTop < 3 && strona_p1 == "GORA") || (p1.offsetLeft - plansza.offsetLeft < 3 && strona_p1 == "LEWO") || (plansza.offsetHeight + plansza.offsetTop - p1.offsetTop <= 3 && strona_p1 == "DOL") || (plansza.offsetWidth + plansza.offsetLeft - p1.offsetLeft <= 3 && strona_p1 == "PRAWO"))
    {
        alert("Gracz czerwony chciał uciec z pola bitwy.");
    }
    else if((p2.offsetTop - plansza.offsetTop < 3 && strona_p2 == "GORA") || (p2.offsetLeft - plansza.offsetLeft < 3 && strona_p2 == "LEWO") || (plansza.offsetHeight + plansza.offsetTop - p2.offsetTop <= 3 && strona_p2 == "DOL") || (plansza.offsetWidth + plansza.offsetLeft - p2.offsetLeft <= 3 && strona_p2 == "PRAWO"))
    {
        alert("Gracz zielony chciał uciec z pola bitwy.")
    }
}

