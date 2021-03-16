 // jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
    var img = document.getElementById('blinking_cow');

var interval = window.setInterval(function(){
    if(img.style.visibility == 'hidden'){
        img.style.visibility = 'visible';
    }else{
        img.style.visibility = 'hidden';
    }
}, 1000); //the 1000 here is milliseconds and determines how often the interval should be run.