<?php
    $pol = mysqli_connect('localhost', 'root', '', 'projekt');
    $gracz = $_GET['nazwa_gracza'];
    $wynik = $_GET['wynik'];
    $zap = "INSERT INTO tabela VALUES('$gracz', '$wynik')";
    if($gracz != "" || $gracz != NULL)
        $wynik = mysqli_query($pol, $zap);
    //SELECT nazwa_gracza, wynik FROM tabela ORDER BY wynik DESC LIMIT 10
?>
