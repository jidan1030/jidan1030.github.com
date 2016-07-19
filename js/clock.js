function toDouble(n){
            return n<10?'0'+n:''+n;
        }
        function SetTimefn(){

            var oDate=new Date();
            var str=toDouble(oDate.getHours())+toDouble(oDate.getMinutes())+toDouble(oDate.getSeconds());

            $('#ul1 img').each(function(index,element){

                $(this).stop().animate({top: -35*str.charAt(index)},{easing: 'linear', duration: 200});

             });

        }
        $(function(){

            SetTimefn();

            setInterval(SetTimefn,1000);

        })