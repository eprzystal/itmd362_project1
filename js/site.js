// jQuery 3.x-style ready event and locally scoped $

$('.luck').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
});