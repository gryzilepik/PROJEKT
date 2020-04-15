<?php
    $pol = mysqli_connect('localhost', 'root', '', 'projekt');
    if($_GET['wlk'] == 300)
        $zap = "SELECT nazwa_gracza, wynik FROM tabela ORDER BY wynik DESC LIMIT 10";
    else if($_GET['wlk'] == 600)
        $zap = "SELECT nazwa_gracza, wynik FROM tabela2 ORDER BY wynik DESC LIMIT 10";
    else if($_GET['wlk'] == 750)
        $zap = "SELECT nazwa_gracza, wynik FROM tabela3 ORDER BY wynik DESC LIMIT 10";
    $wynik = mysqli_query($pol, $zap);
    echo "<table id='tab_rank'>";
    echo "<tbody id='tab_rank_tbody'>";
    echo "<tr>"."<th>"."NAZWAGRACZA"."</th>";
    echo "<th>"."PUNKTY"."</th>"."</tr>";
    while($wiersz = mysqli_fetch_array($wynik))
    {
        echo "<tr>";
        echo "<td>".$wiersz['nazwa_gracza']."</td>"."<td>".$wiersz['wynik']."PKT"."</td>";
        echo "</tr>";
    }
    echo "<tr><td id='w' colspan='2'>WYNIK: 0</td></tr>";
    echo "</tbody>";
    echo "</table>"; 
    mysqli_close($pol);
?>