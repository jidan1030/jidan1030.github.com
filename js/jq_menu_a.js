
$(document).ready(function(){ 

 
//Remove outline from links
$("a").click(function(){
$(this).blur();
  $("li p").css('visibility','hidden');  
});

/****************************************/
   
  var xmenu="li", xsubm="li p";
    //When mouse rolls over  
    $(xmenu).stop().mouseover(function(event){  
       var u= $("p", this), index=$(this).index(), x;
           u.slideDown(400,'easeOutBounce');
    });  
  
    //When mouse is removed  
    $(xmenu).stop().mouseleave(function(){ 
       var u= $("p", this);
       u.slideUp(200,'linear');
    }); 
    
    $(xsubm).stop().mouseleave(function(){
       var u= $(this);
//       u.slideUp(200,'linear');
    });
     
/******************************/  


});  

