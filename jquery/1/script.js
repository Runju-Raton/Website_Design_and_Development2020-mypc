// tag selector use of hide()
/* $(document).ready(function(){
    $('h1').hide();
}); */

// id selector use of hide()
/* $(document).ready(function(){
    $('#id').hide();
}); */

//class selector use of hide()
/* $(document).ready(function(){
    $('.class').hide();
}); */

//use of show function
/* $(document).ready(function(){
    $('.class').show();
});
 */


//hide function with button
/* $(document).ready(function(){
    $('.btn').click(function(){
        $('.paragraph').hide();
    });
}); */

//show function with button
/* $(document).ready(function(){
    $('.btn').click(function(){
        $('.paragraph').hide();
    });
}); */

//use of button and toggle function
$(document).ready(function(){
    $('.btn').click(function(){
        $('.paragraph').toggle();
    });
});