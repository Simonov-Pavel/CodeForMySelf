<h3>Здравствуйте <?php echo !empty($_POST['surname'])? $_POST['name']. ' ' .$_POST['surname']:$_POST['name'] ; ?></h3>
<p><?php echo $_POST['birthday'] ?></p>
<a href="index.php">Редактировать</a>