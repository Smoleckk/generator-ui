<h3>Serwis polega na generowaniu, przechowywaniu i zarządzaniu fakturami oraz małym magazynem.</h3><br>
Założeniem było stworzenie projektu który ułatwi fakturowanie.

Wykorzystane technologie:
<li>Spring boot</li>
<li>React</li>
<li>MSSQL</li>
<br>
Aplikacja umożliwia przechowywanie informacji o fakturach, a także aktualnym stanie produktów na magazynie.<br>
<br>
Produkty w magazynie zawierają informajce o kodzie, nazwie i cenie. Każdy wiersz możemy usunąć lub edytować. <br>
Edytowanie odbywa się bezpośrednio w widoku wyświetlania produktów, najeżdzając na opcje 'Edit' dokonujemy zmian <br>
następnie zatwierdzając klikając 'Save'.<br>
<br>

![2022-05-09 21_32_07-](https://user-images.githubusercontent.com/73690548/167483918-70c3b4f2-6d83-4365-a61b-3f0ac2e1eafa.png)

<br>
Produkty dodajemy pojedynczo, zostajemy przeniesieni do widoku dodania produktu i zatwierdzajac zostaje on zapisany w bazie danych.<br>
<br>

![2022-05-09 21_31_42-](https://user-images.githubusercontent.com/73690548/167483828-f4cd19a6-ad61-448b-b20f-872060aecc90.png)

<br>
Faktury przechowywujemy w bazie danych, możemy je wygenerować jako plik PDF.<br>
Liste faktur możemy odpowiednio edytować lub usunąć konkretną pozycje<br>
<br>

![2022-05-09 21_41_48-](https://user-images.githubusercontent.com/73690548/167485313-5ebe9810-00f5-4e40-acbd-bd10c7dcca64.png)

<br>
Widok dodawania faktur umożliwia nam stworzenie faktury. <br>
Poszczególne wiersze dodajemy wykorzystując opcje wyboru produktów z bazy danych w której wcześniej zostały zamieszczone. <br>
Możemy na bieżąco edytować psozczególne kolumny, kasować dodane produkty. Program automatycznie wylicza nam sume produktów <br>
wyswietlajac cene z i bez Vatu. Vat zostaje ustalony przez użytkownika, opcjonalnie możemy dodać opcje która umożliwi nam naliczanie rabatu.<br>
<br>

![2022-05-09 21_52_24-Window](https://user-images.githubusercontent.com/73690548/167486915-58069e08-1d37-4a2b-9ffc-600531619b98.png)
