let p1, p2, plansza, jablko, strona_p1, kierunek_p1Y, kierunek_p1X, czy_moze_zmienic_kierunek_p1

document.addEventListener("DOMContentLoaded", function(){ 
    
    restart.addEventListener("click", nowaGra);
    plansza = document.createElement('div');
    
});

function nowaGra()
{
    plansza.id = "plansza";
    main.appendChild(plansza);   
    p1 = document.createElement('div');
    p1.id = "p1";
    plansza.appendChild(p1);
    p2 = document.createElement('div');
    p2.id = "p2";
    plansza.appendChild(p2);
}

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

let animacja =setInterval(kierunki, 150);
function kierunki()
{   
    let top = p1.offsetTop;
    let left = p1.offsetLeft;  
    p1.style.top = top+kierunek_p1Y+"px";
    p1.style.left = left+kierunek_p1X+"px";
    czy_moze_zmienic_kierunek_p1 = true;
}  

