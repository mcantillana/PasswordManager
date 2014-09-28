$(function() {                                                                                                                                                                   
    $('a.uimodal').on('click', function() {                                                                                                                                      
        var href = $(this).attr('href');                                                                                                                                         
        var title = $(this).attr('name');                                                                                                                                       
        $('<div>').load(href).dialog({                                                                                                       
            height: 'auto',
            width: 'auto',                                                                                                                                                       
            modal: 'true',                                                                                                                                                       
            title: title,
            position: 'top',                                                                                                                                      
        });                                                                                                                                                                      
        return false;                                                                                                                                                            
    });                                                                                                                                                                          
});

(function($) {                                                                                                                                                                   
    $(document).ready(function(){        

        var windowWidth = 760                                                                                                                                                    
        var windowHeight = 430                                                                                                                                                   
        var centerWidth = (window.screen.width - windowWidth) / 2;                                                                                                               
        var centerHeight = (window.screen.height - windowHeight) / 2;                                                                                                            
                                                                                                                                                                                 
                                                                                                                                                                                 
           $('.mailwindow').click(function (event){                                                                                                                               
            var url = $(this).attr("href");                                                                                                                                      
            var windowName = "popUp";//$(this).attr("name");                                                                                                                     
                                                                                                                                                                                 
        window.open(url, windowName, 'resizable=0,width=' + windowWidth +                                                                                                        
        ',height=' + windowHeight +                                                                                                                                              
        ',left=' + centerWidth +                                                                                                                                                 
        ',top=' + centerHeight);                                                                                                                                                 
        event.preventDefault();                                                                                                                                                  
                                                                                                                                                                                 
        });                                                                                                                                                                      

        $( "#field_password" ).after( '<span style="margin-left:5px;" id="generate"><a href="#"><img src="http://127.0.0.1/1411881336_reload-16.png" /></a></span>' );
        $('#generate').click(loadGeneratedPassword);


    });                                                                                                                                                                          
})(django.jQuery);

// funcion para mostrar la contraseña                                                                                                                                            
function cambiar(id, texto) {                                                                                                                                                    
        if (document.getElementById) {                                                                                                                                           
            document.getElementById(id).innerHTML = texto.replace(/\&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");                                                   
            document.getElementById(id).style.color = "black";                                                                                                                   
        }                                                                                                                                                                        
}

function loadGeneratedPassword() {
    var length = 8;
    $('#field_password').val(password(length,true));
}

function password(length, special) {
  var iteration = 0;
  var password = "";
  var randomNumber;
  if(special == undefined){
      var special = false;
  }
  while(iteration < length){
    randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33;
    if(!special){
      if ((randomNumber >=33) && (randomNumber <=47)) { continue; }
      if ((randomNumber >=58) && (randomNumber <=64)) { continue; }
      if ((randomNumber >=91) && (randomNumber <=96)) { continue; }
      if ((randomNumber >=123) && (randomNumber <=126)) { continue; }
    }
    iteration++;
    password += String.fromCharCode(randomNumber);
  }
  return password;
}