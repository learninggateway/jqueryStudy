$(document).ready(function(){
    var mobs = ['Moto G',' One Pluse'];
    $('#mobiles').html(mobs);

    addElments(mobs);

    $('#saveMobile').click(function(){
        var _name=$('#mob').val();
        mobs.push(' '+_name);
        $('#mobiles').html(mobs);
        $('#mob').val('');
        addElments(mobs);
    });

    $('p').click(function(){
        $(this).children('span').css({"background-color": "red", "color":"white"});

    });

    $('#reload').click(function(){

        location.reload();
    });

});

function addElments(mobList)
{
    $('#mobileList').empty();
    $(mobList).each(function(){
        $('<option>'+this+'</option>').appendTo('#mobileList');
    });
}