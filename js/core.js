//var cofirmPassword = document.getElementById('confirmationpassword');
//cofirmPassword.onclick = function(){
  //cofirmPassword.style.display = 'None';
//}

$(document).ready(function() {

  $('.header').click(function(event){
    if (!($(event.target).attr('class') === 'active')){
      $('#confirmationpassword').toggle();
      $('#username').toggle();
      $('.window .wrap').css('min-height','200px');
      if ($(event.target).attr('id') === 'log_in'){
        $('#loginsbmt').val('LOGIN');
      }
      else{$('#loginsbmt').val('SIGN ME UP');}
      $('.header .active').toggleClass('active');
      $(event.target).toggleClass('active');}
    });
  
  var i = 0;
  spis_erros = []
  /*
  var name = document.querySelector('#text');
  name.addEventListener('input', function () {
   count_errors(name,/^[a-zA-Z]+$/i,0);

 });
  var mail = document.querySelector('#email');
  mail.addEventListener('input', function () {
   count_errors(mail, /^\S+@[a-z]+.[a-z]+$/i,1);
   console.log(spis_erros);
 });*/
 /* var pass1 = document.querySelector('#password'),
  pass2 = document.querySelector('#confirmationpassword');   
  console.log(pass2);
  pass2.addEventListener('input', function () {
    i = 2;
    if(this.value != pass2.value){ pass2.setCustomValidity('Password incorrect');spis_erros[i] = 1;}else{pass2.setCustomValidity('');spis_erros[i] = 0;}
  });
  pass2.addEventListener('input', function (e) {
    if(this.value != pass1.value){ pass2.setCustomValidity('Password incorrect');spis_erros[i] = 1;}else{pass2.setCustomValidity('');spis_erros[i] = 0;}
  }); */
  function count_errors(idis, re, i){
    if ((!(re.test(idis.value))) || (idis.value.length === 0)) {
      idis.setCustomValidity('incorrect');
      return (spis_erros[i] = 1)
      }

      else{idis.setCustomValidity('');
        return (spis_erros[i] = 0)
        }
    }
  var values = {}

  $('#loginsbmt').click(function(){
    var active_item = document.getElementsByClassName('active');
    if ($(active_item).attr('id') === 'registration'){
      spis_erros  = [];
        //Name of user
        var name = document.querySelector('#text');
        count_errors(name,/^[a-zA-Z]+$/i,0);
        console.log(spis_erros);
       //Email
       var mail = document.querySelector('#email');
       count_errors(mail, /^\S+@[a-z]+.[a-z]+$/i,1);
       //Password
       var pass1 = document.querySelector('#password'),
       pass2 = document.querySelector('#confirmationpassword'); 
        count_errors(pass1, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/i,2);
        i = 3;
       if((pass1.value != pass2.value) || (pass1.value === '')){ pass1.setCustomValidity('Password incorrect');spis_erros[i] = 1;}else{pass1.setCustomValidity('');spis_erros[i] = 0;}
       if((pass2.value != pass1.value)|| (pass2.value === '')){ pass2.setCustomValidity('Password incorrect');spis_erros[i] = 1;}else{pass2.setCustomValidity('');spis_erros[i] = 0;} 

       var sum = 0;
       console.log(spis_erros);
       spis_erros.forEach(function(item,spis_erros){
        sum += item;});   
       console.log(sum);  

       if(sum>0){

        return false
        
      }
      else{


        alert(pass1.value);
        $.ajax({
          url:'registration.php',
          type: 'POST',
          cache:false,
          data:{name: name.value, email:email.value, password:pass1.value},
          dataType: 'html',
          success: function(data){
            if (data === 'user exists'){
              alert(data);
              alert('user exists');
            }
            else{
            document.location.href='second.php';
            }  
          }
        });
      }
    }
    if ($(active_item).attr('id') === 'log_in'){
    spis_erros  = []  ;
      var mail = document.querySelector('#email');
      count_errors(mail, /^\S+@[a-z]+.[a-z]+$/i,0);
       //Password^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$

       var password = document.querySelector('#password');
       count_errors(password, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/i,1);
       var sum = 0;
       spis_erros.forEach(function(item,spis_erros){
        sum += item;});   
       alert(spis_erros );
       if (sum>0){
        alert('No');
        return false
      }
      else{
       alert('log_in');
       $.ajax({
        url:'login.php',
        type: 'POST',
        cache:false,
        data:{email:email.value, password:password.value},
        dataType: 'html',
        success: function(data){
          alert(data);
          if (data === 'No such user'){

            alert('No such user')
          }
          else{
            document.location.href='second.php';  
            $('.meeting').text('Hi');   
          }
          
        }
      });
     }
   }
 });


});

     // var name_1 = document.querySelector('#text').value
      /*var email = $('#email').val();
      var password = $('#password').val();
      var confirm = $('#confirmationpassworddiv').val();
      var values = {'name': name, 'email':email, 'password':password};
      console.log(values);*/




      /*if(sum){
        return false
      }
      else{
        return true, values
      }*/


 //$(event.target).addClass('active');}

      //$('#pagelogin').click(function(){
       /*$('#confirmationpassword').toggle();
        $('#username').toggle();
        $('.window .wrap').css('min-height','200px');
        $('#loginsbmt').text('LOGIN');
        var active_item = document.getElementsByClassName('active');
        var attr_id = $(active_item).attr('id');
        active_item = document.getElementById(attr_id);
        console.log(active_item);
        $(active_item).removeClass('active');
        $(active_item).addClass('disact');
        $(this).removeClass('disact');
        $(this).addClass('active');*/

     /* function active_or_not(){
    var active_item = document.getElementsByClassName('active');
    if ($(active_item).attr('id') === 'log_in'){
      console.log('log_in');
    }else{
      console.log('registration');
    }
  }
  $('.button').click(function(){
    var name = $('#text').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirm = $('#confirmationpassworddiv').val();
    var fail ="";
  });
  active_or_not();*/
/*  var obj_fail = [];
var i = 0;*/
/*  document.addEventListener('DOMContentLoaded', function (){
    console.log(former);
    var former = document.querySelector('#text');

    former.addEventListener('input', function () {
      if ((!"/^.*[^A-z].*$/".match(this.value)) || (this.value.length === 0)) {
        i = 1;
        obj_fail[0] = i;
        console.log(i);
      }
      else{
        i = 0;
        obj_fail[0] = i;
        console.log(i);
      }
    });
  });*/
