$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});


//Function to add another Judge field
var counter = 1;
var limit = 1000;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else if(divName == 'dynamicInput1'){
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<br><br><br>Judge Name" + "<br><div class='col-xs-4'><input type='text' placeholder='Jane Doe' class='form-control' name='myInputs1[]'></div><br><br>" + "Judge Email:<br>" + "<div class='col-xs-4'><input type='email' placeholder='example@email.com' class='form-control name='email1[]'></div><br><br>" + "Special Category" + " <br><div class='col-xs-4'><input type='text' placeholder='example' class='form-control' name='category'></div><br><br>";
          document.getElementById(divName).appendChild(newdiv); 
          counter++;

     }
     else if(divName == 'dynamicInput2'){
        var newdiv = document.createElement('div');
          newdiv.innerHTML = "<br>Judge Name" + "<br><div class='col-xs-4'><input type='text' placeholder='Cristopher Joe' class='form-control' name='myInputs1[]'></div><br><br>" + "Judge Email:<br>" + "<div class='col-xs-4'><input type='email' placeholder='example@email.com' class='form-control name='email2[]'></div><br><br>";
          document.getElementById(divName).appendChild(newdiv); 
          counter++;
     }
     else if(divName == 'criteria'){
        var newdiv = document.createElement('div');
          newdiv.innerHTML = "<br><div class='col-xs-4'><input type='text' placeholder='example' class='form-control' name='category'></div><br>";
          document.getElementById(divName).appendChild(newdiv); 
          counter++;  
     }
}

$('.multi-field-wrapper').each(function() {
    var $wrapper = $('.multi-fields', this);
    $(".add-field", $(this)).click(function(e) {
        $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
    });
    $('.multi-field .remove-field', $wrapper).click(function() {
        if ($('.multi-field', $wrapper).length > 1)
            $(this).parent('.multi-field').remove();
    });
});