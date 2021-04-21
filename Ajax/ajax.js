$(document).ready(function(){


    $('#btn').click(function(){
        $.ajax('https://jsonplaceholder.typicode.com/todos/1',{
            type:'GET',
            beforeSend:function(){
                $('#loader').css({display:'block'});
            },
            success:function(data){
                var _data='<b>UsersId:</b>'+data.userId+'<br><b>title:</b>'+data.title;
                var _table='<table border=1><tr><td>UserId</td><td>'+data.userId+'</td></tr><tr><td>Title</td><td>'+data.title+'</td></tr></table>'
                $('#result').html(_table);
                $('#loader').css({display:'none'});
            },
            error:function(){
                alert('Error');
            }
    });

    // $.ajax("www.google.com",{
    //     type:'GET',
    //     beforeSend:function(){},
    //     success:function(data){},
    //     error:function(){}
    // });

    });




});