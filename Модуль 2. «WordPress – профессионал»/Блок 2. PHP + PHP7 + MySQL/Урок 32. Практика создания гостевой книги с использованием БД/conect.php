<?php
$db = mysqli_connect('localhost', 'root', '', 'db') or die('Ошибка подключения к базе данных - ' . mysqli_connect_error());
mysqli_set_charset($db, "utf8");
