<?php
$host = 'localhost';
$usuario = 'root';
$senha = '';
$database = 'login';

$mysqli = new mysqli($host, $usuario, $senha, $database);

if ($mysqli->connect_error) {
  die("Falha ao conectar ao banco de dados: " . $mysqli->connect_error);
}
?>
