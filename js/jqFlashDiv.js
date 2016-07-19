// jquery flash div
/************************
 * 1) get parameter ready before call doIt
 * 2) set parameter when finish doIt. 
 * 3)
 ************************/ 
 
  
$(document).ready(function(){
  var x=['ipic1', 'ipic2']
  jqFlashDiv.init(x);
  var init = setInterval("jqFlashDiv.doIt()", jqFlashDiv.short);
  $("div.cproduct h4").click( function(){
//      jqFlashDiv.doIt();                                             
  })
})

var jqFlashDiv={
  itemId:null,
  item:null,
  ptr:0,
  fade:1.0,
  min: 0.0,
  max: 1.0,
  short: 1800,
  long: 4000,
  duration:1500,    // duration time to fade
  count:0,
  pause: 3,
  
  init:function(divID_array){
   this.itemId=divID_array;
   var i;
   this.item= new Array();
   this.item[0]=document.getElementById(this.itemId[0]); 
   this.ptr=0;  
   for (i=1; i<this.itemId.length; i++){
    this.item[i]=document.getElementById(this.itemId[i]);
    this.item[i].style.display="none";
   }
   this.fade=this.max;
   this.count=0;
   return;
  },
  doIt:function(){
     if (this.count<2){
       this.setParameter();
       $(this.item[this.ptr]).fadeTo(this.duration,this.fade); 
     }
     this.count++;
     this.count= this.count>this.pause?0:this.count;

  }, // doIt
  setParameter:function(){
         this.fade = (this.fade==this.max)?this.min:this.max;  
         if(this.fade==this.max){   // going to show next one
            this.item[this.ptr].style.display="none";
            this.ptr++;
            this.ptr = (this.item.length>this.ptr)?this.ptr:0;
            $(this.item[this.ptr]).css("opacity", this.min);
            this.item[this.ptr].style.display="block";
         }           
  } // setParamenter
} //jqFlashDiv


