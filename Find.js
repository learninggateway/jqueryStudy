$(document).ready(function(){

    $('p').find('span').css({'background-color':'red'});

    $('p').find('span').click(function(){

        var val=$(this).text();
        alert(val);
    });

    $('.container').find('div.box').click(function(){
        var _text=$(this).text();
        $('#result').text(_text);
    });

    $('#show').click(function(){
        var _values='';
        $('.container').find('div input:checked').each(function(){
            var _val=$(this).val();
            _values += _val+', ';
        });
        $('#Checkresult').text(_values);
    });

    $('.SelectAll').click(function(){

        if($(this).is(':checked')){
            alert(true);
            //todo: select all the checkbox
            //prop
        }
        else
        {
            alert(false);
            //todo : unselect all the checkbox
        }
    });
    
    //$('p').find('span').on('click',test);
    
});

// function test()
// {

// }