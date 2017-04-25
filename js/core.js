$(document).ready(function(){

	$('#menu-btn').click(function(){		
			$('.menu').slideToggle(700);	
			if ($(this).hasClass('not-active')) {
				$(this).addClass('is-active').removeClass('not-active');
			}else{
				setTimeout(function(){
					$('.is-active').addClass('not-active').removeClass('is-active')
				},600)			
			}		
		});
	$('#autoriz_form').validate({
		rules: { 
			name:{
			 	required: true,
			 },
			 phone:{
			 	required: true,
			 	minlength:6,
			 },  
		     email: {
		       required: true,
		       email: true
		     }, 
		     letter:{
		     	required: true,
		     }      
   },
		   messages: { 
		   	name: {
		       required: "заполните поле",       
		     }, 
		    phone:{
			 	required: "заполните поле",
			 	minlength:"номер должен быть длинее 6",
			 }, 
		     email: {
		       required: "заполните email",
		       email: "вы ввели некорректный email"
		     },		     
	},
    errorElement: "i",
    success: function(label) {
    label.addClass("valid").text("вы правильно заполнили поле")
  	}       
    });
    $('#autoriz_form1').validate({
		rules: { 
			name:{
			 	required: true,
			 },
			 phone:{
			 	required: true,
			 	minlength:6,
			 },  
		     email: {
		       required: true,
		       email: true
		     }, 
		     letter:{
		     	required: true,
		     }      
   			},
		   messages: { 
		   	name: {
		       required: "заполните поле",       
		     }, 
		    phone:{
			 	required: "заполните поле",
			 	minlength:"номер должен быть длинее 6",
			 }, 
		     email: {
		       required: "заполните email",
		       email: "вы ввели некорректный email"
		     },		     
	},
    errorElement: "i",
    success: function(label) {
    label.addClass("valid").text("вы правильно заполнили поле")
  	}       
    });
    
	$(function(){
			$(window).scroll(function() {
			if($(this).scrollTop() >= $('#banner').height()) {
			$('nav.menu').addClass('stickytop');
			}
			else{
			$('nav.menu').removeClass('stickytop');
			}
			});
		});
	$("nav.menu").on("click","a", function (event) {

         event.preventDefault();   

        var id  = $(this).attr('href'),
                    top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 800);

    });

	});


	


