let p1, p2, plansza, jablko;

document.addEventListener("DOMContentLoaded", function(){ 
    
    restart.addEventListener("click", nowaGra);
    plansza = document.createElement('div');
    
});

function nowaGra()
{
    plansza.id = "plansza";
    main.appendChild(plansza);   
    p1 = document.createElement('div');
    plansza.appendChild(p1);
    p2 = document.createElement('div');
    plansza.appendChild(p2);
}