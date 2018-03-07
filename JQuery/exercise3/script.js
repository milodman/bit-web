$(function (){
    //  var button = $('button');
    $('.click').on('click', function(){

        $('div').animate({

            left:'400px',
            top:'400px',
            height:'+=300px',
            width:'+=100px'


        },2000);



    });
    $('.reverse').on('click', function(){
        $('div').animate({
            left:'800px',
            top:'800px',
            height:'-=10px',
            width:'-=10px'

        },2000)
    })

})