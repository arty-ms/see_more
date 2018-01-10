<?php
require "db.php";
 if(!(isset($_SESSION['logged_user']))) {
    echo '<script>document.location.href="Index.php";</script>'; }

?>
<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 
 <!--                               CSS                 !-->
 <link rel="stylesheet" href="lib/bootstrap/bootstrap-grid-3.3.1.min.css" />
 <link rel="stylesheet" href="lib/font-awesome-4.2.0/css/font-awesome.min.css" />
 <link rel="stylesheet" href="css/main.css" />
 <link rel="stylesheet" href="css/media.css" />
 <link rel="stylesheet" href="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/themes/sunny/jquery-ui.css">
 <!--                           Utils                   !-->
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 <script src="//ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/jquery-ui.min.js"></script>
 <script src="js/second_core.js"></script>
  
 <title>see_moore</title>
</head>
<body>
  <header class="top_header">
    <div class="header_topline">
      <div class="logo">  
        <p><img src="img/favicon.png" width="70" height="70" alt="load or delete photo" align="middle" />
        </p>
      </div>  
      <div class="welcome"><h1>Welcome to Image Previewer</h1></div>
      <div class="meeting">Hi, <?php  echo $_SESSION['logged_user'] -> login;?>!</div>
      <div class="exit"><a href="logout.php"><i class="fa fa-sign-out" aria-hidden="true"></i></a></div>
    </div>
  </header>
  <main class="main">
    <div class="search"> 
      <div class="writing_search_place"><label for="search"><input id="search"  type="search" name="search"  placeholder="Search by keyword"></label>
      </div>
      <div class="touch"><input type="submit" value="Search"></div>
    </div>
    <div id="eg"><div class="tags">e.g.</div>

    </div>    
    
    <div id="picture"> 
      <button type="button" onclick="fun();" class="js-button-campaign insert"><img src="img/plus_button.png"  name="but" width="290" height="290"/><div id='load'>LOAD PICTURE</button>
        
        

    </div> 

    <div class="overlay js-overlay-campaign">
      <div class="popup js-popup-campaign">
        <div class="top"> 
          <div class ="add_im"><h3> ADD IMAGE </h3></div>
          <div class="add_inf"><h3> ADD INF </h3></div>            
        </div>

        <div class="main_zone"> 
          <div class="left_zone">  
           
            <div id="drop_zone">
              <div id='upload_file'>
                <img src="img/media.png" height="200"/>
              </div>
              <h3>Drag in your media</h3>
              <p>Find media on your hard drive, than drag them in to automatically apload</p>
            </div>
            
            
            <div class="button_zone"><div class="words">Manualy select media</div><input type="submit" id="find_file"  onclick="document.getElementById('add_media_button').click()" value="+"/><form id="submit_form" action="" method="post"><input id="add_media_button" type="file" name='file'  value="+" /></form></div>
            
          </div>
          <div class="right_zone">  
            <div class="name_your_media"> 
              <p>Name your media</p>
              <input class="media_name" type="text" required />
            </div>
            <div class="add_tag"> 
              <p>Add tags</p>
              <div class="tag_zone">  
                <div id="buttom_tag"></div>
                <div class="write_tag">
                  <input type="text" class="text" placeholder="Write a tag... " required>
                  <input id="add_tag" type="button" name="Add tag" value="Add tag"/></div>
                </div>            
              </div>
              <div class="add_descr"> 
                Add description<p >
                <input id="description" type="text" name="description" required />
              </p>
            </div>
            
            <div class="publish"> <input id="publish_button" type="submit" name="publish" value="Publish" /></div>
          </div>
        </div>    
      </div>
    </div>
  

</main>

</body>
</html>