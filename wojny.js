let p1, p2, plansza, jablko;

function nowaGra()
{
    plansza = document.createElement('div');
    document.body.appendChild(plansza);
    plansza.id = "plansza";
    p1 = document.createElement('div');
    plansza.appendChild(p1);
    p2 = document.createElement('div');
    plansza.appendChild(p2);
}