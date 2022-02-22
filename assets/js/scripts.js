(function ($) {
    "use strict";
    $(window).on('load', function() {
        setTimeout(function(){
            $('body').addClass('loaded')
        }, 1000);
    })
    var button = $("#confirm-member");
    var inputted_member = $('#name-input');
    var member_container = $('#input_team');
    var congrats = $('#congrats_modal');
    var name_container = $('#team-chosen');
    var ready_button = $('#confirm-team')
    var header = $('#masthead');
    var array_of_name = [];
    var i = 3;

    button.click(function(){
        array_of_name.push(inputted_member.val());
        name_container.append(`
               <div class="col-6">- ${inputted_member.val()}</div>
               <div class="col-6 float-right" style="color: red !important">X</div>
        `)
        inputted_member.val("");
        if(array_of_name.length==3){
            ready_button.removeClass('not-ready');
            ready_button.addClass('ready');
            inputted_member.css('display', 'none');
            button.css('display', 'none');
            ready_button.text(`Team's ready!`);
            ready_button.removeAttr("disabled");

        } else {
            ready_button.text(`Need more ${i-1} people`)
            ready_button.prop('disabled', true);
        }
        i--;
    })
    ready_button.click(function(){
        header.css('display', 'none');
        member_container.css('display','none');
        congrats.removeAttr('hidden');
    })
})(jQuery);
