$(document).ready(function(){

//$('#jq_image_swap').before('<div id="inav">').cycle({ 

$('#iq_image_swap').cycle({ 
    fx:     'fade',       //'turnDown', 
    speed:  '1500',
    pauseOnPagerHover:   true, 
    timeout: 5000, 
    pager:  'div#iqnav', 
    activePagerClass: 'qapgr',
    
    // callback fn that creates a thumbnail to use as pager anchor 
    pagerAnchorBuilder: function(idx, slide) {
//        var x=document.getElementById('iqnav'); 
//        alert(idx + x);
        return '<a href="#"><b>'+slide.alt+'</b><img src="' + slide.src + '" /></a>'; 
    } 

});

});

