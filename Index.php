   <?php
   if(isset($_SESSION['logged_user'])) {
    echo '<script>document.location.href="second.php";</script>'; }
    ?> 

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
  <!--                               CSS                 !-->
 
  <link rel="stylesheet" href="css/style.css" />
  <!--                           Utils                   !-->

  <!--<script src="lib/jquery/jquery-1.11.1.min.js"></script>!-->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="js/core.js"></script>

    <title>BigBrother - <%= title %></title>
  </head>
  <body>
  <!--  <div id="topmenu">
        <div id="user">
            LOGIN
        </div>
      </div>!-->
      <div class="window" id="login">
        <div class="wrap">
          <div class="header">
            <div id="log_in" class="">Login</div> /
            <div id="registration" class="active">Registration</div>
          </div>

          <div class="line" style="margin-top: 60px" id="username">

            <div class="edit"><input  type="text" id="text" placeholder="Username" pattern="[a-zA-Z]+" title='username required, only a z or A Z characters' required  /></div>

          </div>         
          <div class="line" style="margin-top: 30px">

            <div class="edit"><input type="email" id="email" placeholder="E-mail"  pattern="\S+@[a-z]+.[a-z]+" title='email 
              required, email f
              ormat' required /></div>

            </div>
            <div class="line" style="margin-top: 30px">

              <div class="edit"><input type="password" id="password" placeholder="Password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$" title='password 
                required, at least 6 characters long, 
                at least one lowercase letter, one uppercase 
                letter, one digit, no special symbols 
                eg. ~!@#$%^&*()_+;' required /></div>
              </div>   
              <div class="line" style="margin-top: 30px" id="confirmationpassworddiv">
                <div class="edit"><input type="password" id="confirmationpassword" placeholder="Retype password" title="required field" required /></div>
              </div>
              <div class="buttons"> 
                <input type="button" name="do"  class="button" id="loginsbmt" value='SIGN ME UP'>           
              </div>
            </div>
          </div>  
        </body>  
        </html>