<?php
$nama = $_POST['nama'];
$hp = $_POST['hp'];
$alamat = $_POST['alamat'];
$barang = $_POST['barang'];

$to = "furkonjr100@gmail.com";
$subject = "Pesanan Baru";
$message = "Nama: $nama\nHP: $hp\nAlamat: $alamat\nPesanan: $barang";
$headers = "From: website@domain.com";

mail($to, $subject, $message, $headers);
echo "Pesanan berhasil dikirim!";
?>