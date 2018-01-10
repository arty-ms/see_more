<?php

require "lib/rb.php";
  R::setup( 'mysql:host=localhost;dbname=tiscon_db',
        'root', '' );
session_start();
?>