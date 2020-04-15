<?php
    $pol = mysqli_connect('localhost', 'root', '', 'projekt');
    $gracz = $_GET['nazwa_gracza'];
    $wynik = $_GET['wynik'];
    if($_GET['wlk'] == 300)
        $zap = "INSERT INTO tabela VALUES('$gracz', '$wynik')";
    else if($_GET['wlk'] == 600)
        $zap = "INSERT INTO tabela2 VALUES('$gracz', '$wynik')";
    else if($_GET['wlk'] == 750)
        $zap = "INSERT INTO tabela3 VALUES('$gracz', '$wynik')";
    if($gracz != "" || $gracz != "null")
        $wynik = mysqli_query($pol, $zap);
    //SELECT nazwa_gracza, wynik FROM tabela ORDER BY wynik DESC LIMIT 10
    mysqli_close($pol);
?>