<?php
    $pol = mysqli_connect('localhost', 'root', '', 'projekt');
    $zap = "SELECT nazwa_gracza, wynik FROM tabela ORDER BY wynik DESC LIMIT 10";
    $wynik = mysqli_query($pol, $zap);
    echo "<ol>";
    while($wiersz = mysqli_fetch_array($wynik))
    {
        echo "<li>".$wiersz['nazwa_gracza']." ".$wiersz['wynik']."</li>";
    }
    echo "</ol>"; 
?>