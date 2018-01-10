function fun(){
	var picture_url = ''

	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();		
	}
});

$('#drop_zone').on('dragover', function(){
	$(this).addClass('file_drag_over');
	return	false
});

$('#drop_zone').on('dragleave', function(){
	$(this).removeClass('file_drag_over');
	return	false
});
}
// Загрузка файла
/*function fun(r){
	$.ajax({
		url:'preload.php',
		method:'POST',
		contentType:false,
		cache:false,
		processData:false,
		success:function(data){
			var res = JSON.parse(data);
			for(var key in res){
				val_name = res[key]['name'];
				val_url = res[key]['name'];
				console.log(val);}
			}
		});
			//var res = JSON.parse(data);
			//for(var key in res){
			}*/

/*
	 $(function() {

            var flowers = ['cat','c','asda','asdasda','asdasd'];
            
            $('#search').autocomplete({
                source: flowers
            })
          });*/


          function func(r){
          	var find_tag = $(r).attr('id');
          	$(r).css('text-decoration','underline');
          	$.ajax({
          		url:'preload_1.php',
          		method:'POST',
          		contentType:false,
          		type:'json',
          		cache:false,
          		processData:false,
          		success:function(data){
          			var res = JSON.parse(data);

          			var newarr = document.getElementById('picture');
          			newarr.innerHTML=('');
          			var new_remove = ' <button type="button" onclick="fun();" class="js-button-campaign insert"><img src="img/plus_button.png"  name="but" width="290" height="290"/><div id="load">LOAD PICTURE</button>';
          			newarr.insertAdjacentHTML('afterbegin', new_remove);

          			for(var i=0; i<res.length; i++){
          				val_tag = res[i]['tag'];
          				val_name = res[i]['name'];				 		
          				if(!(val_tag.indexOf(find_tag) === -1)){
          					remove = 	'<div class="purpple"><img src="'+ val_name +'" width="308" class="purple" height="315" /></div>';
          					newarr.insertAdjacentHTML('beforeend', remove);
          				}	
          			}
          		}
          	});
          }

          $(document).ready(function() {


          	var old_tags = [];
          	$.ajax({
          		url:'preload_1.php',
          		method:'POST',
          		contentType:false,
          		cache:false,
          		processData:false,
          		success:function(data){

          			
          			var res = JSON.parse(data);
          			console.log(res);
          			var newtag = document.getElementById('eg');
          			var newarr = document.getElementById('picture');
          			for(var i=0; i<res.length; i++){
									
          				val_tag = res[i]['tag'];
        					
          				val_name = res[i]['name'];	
          				console.log(val_name);
          				console.log(i);
          				var remove = '<div class="purpple"><img src="'+ val_name +'" width="308" class="purple" height="315" /></div>';
									newarr.insertAdjacentHTML("beforeEnd", remove);
          				if (typeof(val_tag) === 'object'){
          					for (var i=0; i<val_tag.length; i++){
          				if((old_tags.indexOf(val_tag[i]) === -1)){
          							var remove = '<div class="tags" id="'+val_tag[i]+'" onclick= "func(this);"><a href="#" class="list">' + val_tag[i] + '</a></div>';
          							old_tags[old_tags.length] = val_tag[i];
												newtag.insertAdjacentHTML("beforeEnd", remove);
											}
							}
						}
								else{
									if((old_tags.indexOf(val_tag) === -1)){
          							var remove = '<div class="tags" id="'+val_tag+'" onclick= "func(this);"><a href="#" class="list">' + val_tag + '</a></div>';
          							old_tags[old_tags.length] = val_tag;
												newtag.insertAdjacentHTML("beforeEnd", remove);
								}
							}
						}
          				}
          			});
			/*for(var key in res){
				val = res[key]['tag'];
				var newarr = document.getElementById('picture');	
				var remove = '<div class="purpple"><img src="'+ res[key]['image'] +'" width="308" class="purple" height="315" /></div>';
				newarr.insertAdjacentHTML("beforeEnd", remove);
				console.log(val);
				$.ajax({
					url:'serialize.php',
					method:'POST',
					contentType:false,
					data:val,
					cache:false,
					processData:false,
					success:function(data){
						var newtag = document.getElementById('eg');
						value = JSON.parse(data) 
						//console.log(value);
						
						for(var i=0; i<value.length; i++){
							
							if(old_tags.indexOf(value[i]) === -1){																							
								var remove = '<div class="tags" id="'+value[i]+'" onclick= "func(this);"><a href="#" class="list">' + value[i] + '</a></div>';
								
								old_tags[old_tags.length] = value[i];
								newtag.insertAdjacentHTML("beforeEnd", remove);
							}

							//var color = $('tags').css( "margin-right" );
						}
					}
				});
			}
		}*/
	

// открыть по кнопке
/*
var picture_url = ''
$('.js-button-campaign').click(function() { 
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});
// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();		
	}
});

$('#drop_zone').on('dragover', function(){
	$(this).addClass('file_drag_over');
	return	false
});

$('#drop_zone').on('dragleave', function(){
	$(this).removeClass('file_drag_over');
	return	false
});*/
//-Перенос картинки в папку upload, и появление ее в зоне drop_zone
$('#drop_zone').on('drop', function(e){
	e.preventDefault();
	$(this).removeClass('file_drag_over')
	var formData = new FormData();
	var files_list = e.originalEvent.dataTransfer.files;
	message = 1;	
	for(var i=0; i<files_list.length; i++){
		formData.append('file[]', files_list[i]);
	}
	$.ajax({
		url:'upload.php',
		method:'POST',
		data:formData,
		contentType:false,
		cache:false,
		processData:false,
		success:function(data){
			var string = JSON.parse(data);
			$('#upload_file').html('<img src="upload/'+string['name'] +'" width="150" height="150" />');
			picture_url = string['file'];
			console.log(typeof(string));
			$('.words').text(string['name']);

		}
	});
});
//Загрузка фото при нажатии на кнопку +
$('#add_media_button').on('change', function(e){
	e.preventDefault();
	picture_url = document.querySelector('#add_media_button').value;
	$('.words').text(picture_url);
	$('#lost').val(picture_url);
	message = 2;
	$('#submit_form').on('change', function(event){
		event.preventDefault();

		$.ajax({
			url:"upload_1.php",
			method:"POST",
			data:new FormData(this),
			contentType:false,
			processData:false,
			success:function(data){
				var string = JSON.parse(data);
				$('#upload_file').html('<img src="upload/'+string['name'] +'" width="150" height="150" />');
				picture_url = string['file'];
				console.log(data);
			}
		});
	});

});

//Добавление и удаление тегов
$('#add_tag').click(function(){
	if (document.querySelector('.text').value === ''){		
		document.querySelector('.text').setCustomValidity('Empty Field');
	}
	else{
		if (document.getElementsByClassName('button_reset').length < 4){

			var newbut = document.getElementById('buttom_tag');		
			var tag = '<button class="button_reset" onmousedown="$(this).remove();">' + document.querySelector('.text').value + '<input class="reset" type="button" value="x" name="reseet"/></button>' ;		
			newbut.insertAdjacentHTML("beforeEnd", tag);
		}		
	}
});

//Загрузка фото на сайт и БД
$('#publish_button').click(function(event){
	event.preventDefault();
	var description = document.querySelector('#description').value;
	var picture = picture_url;
	var tag = [];
	var name = document.querySelector('.media_name').value;
	button =document.getElementsByClassName('button_reset');
	for(var i=0; i<button.length; i++){
		tag[i] = button[i].textContent;	

	}	
	console.log(picture);
	if ((description === '') || (tag.length === 0) || (picture === {}) || (name === '')){
		return false
	}	
	else{
		var newtag = document.getElementById('eg');
		for(var i=0; i<tag.length; i++){
			if(old_tags.indexOf(tag[i]) === -1){	
				var remove = '<div class="tags" id="'+tag[i]+'" onclick= "func(this);"><a href="#" class="list">' + tag[i] + '</a></div>';			
				old_tags[old_tags.length] = tag[i];
				newtag.insertAdjacentHTML("beforeEnd", remove);}}
				$('.tags').css('margin-right:20px');
				$.ajax({
					url:"publish_it.php",
					method:"POST",
					data:JSON.stringify({description:description, tag:tag, picture:picture, name:name}),
					contentType:false,
					processData:false,
					success:function(data){
						console.log(data);
						var newpic = document.getElementById('picture');	
						var remove = '<div class="purpple"><img src="'+ data+'" width="298" class="purple" height="315" /></div>';
						newpic.insertAdjacentHTML("beforeEnd", remove);
						$('#drop_zone').removeClass('file_drag_over');

					}
				});
			}	
		});
});

