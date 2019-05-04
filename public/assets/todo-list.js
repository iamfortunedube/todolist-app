$(document).ready(function(){
    console.log("Inside document");
    $('form').on('submit', function(){

        var item = $('form input');
        var todo = {item: item.val()};

        console.log("Outside");
        
        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data){

                location.reload();
            }
        });
        return false;
    });

    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, '-');
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data){
                location.reload();
            }
        });
    });
});