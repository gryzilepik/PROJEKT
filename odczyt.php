<?php
    $pol = mysqli_connect('localhost', 'root', '', 'projekt');
    $zap = "SELECT nazwa_gracza, wynik FROM tabela ORDER BY wynik DESC LIMIT 20";
    $wynik = mysqli_query($pol, $zap);
    echo "<table id='rank'>";
    echo "<tr>"."<th>"."NAZWAGRACZA"."</th>";
    echo "<th>"."PUNKTY"."</th>"."</tr>";
    while($wiersz = mysqli_fetch_array($wynik))
    {
        echo "<tr>";
        echo "<td>".$wiersz['nazwa_gracza']."</td>"."<td>".$wiersz['wynik']."PKT"."</td>";
        echo "</tr>";
    }
    echo "</table>"; 
    mysqli_close($pol);
?>