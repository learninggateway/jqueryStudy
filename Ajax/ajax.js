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
    });

    $('#postBtn').click(function(){
        $.ajax('https://jsonplaceholder.typicode.com/posts/',{
            type:'POST',
            //data:JSON.stringify({"userId": 11,"id": 101,"title": "Test","body": "Test"}),
            data:{"userId": 11,"id": 101,"title": "Test","body": "Test"},
            beforeSend:function(){
                $('#loader').css({display:'block'});
            },
            success:function(data){
                $('#result').html(data.id);
                $('#loader').css({display:'none'});
            },
            error:function(){
                alert('Error');
            }
        });
    });

    $("#AjaxpostBtn").click(function(){
        $.post("https://jsonplaceholder.typicode.com/posts",
        {"userId": 11,"id": 101,"title": "Test","body": "Test"},
        function(data, status){
          alert("Data: " + data.id + "\nStatus: " + status);
        });
      });

});
