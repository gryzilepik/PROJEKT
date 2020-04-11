-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Kwi 2020, 18:36
-- Wersja serwera: 10.1.36-MariaDB
-- Wersja PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `projekt`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tabela`
--

CREATE TABLE `tabela` (
  `nazwa_gracza` text COLLATE utf8_polish_ci,
  `wynik` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `tabela`
--

INSERT INTO `tabela` (`nazwa_gracza`, `wynik`) VALUES
('Nowy', 10),
('DAD', 10),
('Nazwa gracza', 50),
('OK', 15),
('DD', 20),
('Nazwa gracza', 80),
('Nazwa gracza', 90),
('Nazwa gracza', 75),
('Ola to kocur', 70),
('OKI', 105),
('Moze', 0),
('Nazwa gracza', 75),
('S', 20),
('NI', 30),
('Nazwa gracza', 55),
('Nazwa gracza', 30),
('Nazwa gracza', 140),
('Nazwa gracza', 160),
('Nazwa gracza', 125),
('Nazwa gracza', 95),
('Nazwa gracza', 140),
('Pal gume', 90),
('Nazwa gracza', 0),
('Nazwa gracza', 65),
('Nazwa gracza', 100),
('Nazwa gracza', 70),
('Nazwa gracza', 100),
('Nazwa gracza', 50),
('Nazwa gracza', 130),
('OK', 105),
('NIe', 100),
('JUZ', 140);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
