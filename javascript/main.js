/* 'Slideshow ------------------------------------------ */
$(document).ready(function() {
	$('.slideshow') 
		.before('<div class="slideshow-nav">') 
		.cycle({ 
			
		   
			pager:  '.slideshow-nav' ,
				fx:    'scrollLeft', 
				
			delay: -1000,
			 
	});

});


/* 'ClearField ------------------------------------------ */
$(document).ready(function() {
	$('.clearField').clearField();
});

 
 
/* 'menu hover ------------------------------------------ */
 $(document).ready(function(){
 
 

      $('.menu-eletrico').hover(function() { 
    	$('.painel-eletrico').show();
    	$('.painel-hidraulico').hide();   
    	$('.painel-estrutural').hide(); 
    	$('.painel-alvenaria').hide(); 

     // }, function() { 
    //	$('#menu_principal_eletrico').hide(); 
      });
      $('.menu-hidraulico').hover(function() { 
    	$('.painel-eletrico').hide(); 
    	$('.painel-hidraulico').show(); 
    	$('.painel-estrutural').hide(); 
    	$('.painel-alvenaria').hide(); 

     // }, function() { 
    //	$('#menu_principal_eletrico').hide(); 
      });
      $('.menu-estrutural').hover(function() { 
    	$('.painel-eletrico').hide(); 
    	$('.painel-hidraulico').hide();  
    	$('.painel-estrutural').show();  
    	$('.painel-alvenaria').hide(); 
     // }, function() { 
    //	$('#menu_principal_eletrico').hide(); 
      });
      $('.menu-alvenaria').hover(function() { 
   		$('.painel-eletrico').hide(); 
    	$('.painel-hidraulico').hide();  
    	$('.painel-estrutural').hide(); 
    	$('.painel-alvenaria').show();  
     // }, function() { 
    //	$('#menu_principal_eletrico').hide(); 
      });
	
     $('.fechar-menu').click(function() { 
    	$('.painel-eletrico,.painel-hidraulico, .painel-estrutural, .painel-alvenaria').hide(); 
     });
     
    // $('#menu_principal_eletrico').mouseenter(function() { 
   // 	$('#menu_principal_eletrico').show(); 
   //  });


//função hover painel elétrico
	$(".painel-eletrico").hover(
	  function () {
	    $(".menu-eletrico").addClass('active');
	  }, 
		  function () {
		    $(".menu-eletrico").removeClass('active');
		  }
	  );
	  
//função hover painel hidraulico
	$(".painel-hidraulico").hover(
	  function () {
	    $(".menu-hidraulico").addClass('active');
	  }, 
		  function () {
		    $(".menu-hidraulico").removeClass('active');
		  }
	  );
	  
  
//função hover painel estrutural
	$(".painel-estrutural").hover(
	  function () {
	    $(".menu-estrutural").addClass('active');
	  }, 
		  function () {
		    $(".menu-estrutural").removeClass('active');
		  }
	  );
	   	   
//função hover painel alvenaria
	$(".painel-alvenaria").hover(
	  function () {
	    $(".menu-alvenaria").addClass('active');
	  }, 
		  function () {
		    $(".menu-alvenaria").removeClass('active');
		  }
	  );	   	   
  
  
});


function closeMenu(id_menu) {
	
    	$(id_menu).hide(); 
}





/* 'Carrossel ------------------------------------------ */
	$(document).ready(function(){
			$('#slider-software').tinycarousel(
				{ 	axis: 'y', 
					pager: false, 
					interval: true, 
					 controls: true,
                      display: 4 ,
                    
                      intervaltime: 5000 
				});	
		});