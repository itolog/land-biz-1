$(function() {
		
  $(document).ready(function() {


      function menuToggle(){
        var menu = $(".burger");
        var txtMenu = $(".navigation__li a");
        var closeMenu = $(".navigation");
    
        menu.on('click',function(){
                if(closeMenu.is(':visible')){
                    closeMenu.hide('slow');
                } else {
                    closeMenu.show('slow');  
                }   
        })
    }
    menuToggle();	

  });

  // 
  $("body").on("submit", ".form_newsletter", function(e) {
      var message="Укажите значения всех обязательных для заполнения полей!";
      var ret=0;
      if($(".name-block .field_value", this).val().length < 1) {
          $(".name-block .field_value", this).css("border-color", "red");
          ret=1;
      }
      if($(".phone-block .field_value", this).val().length < 1) {
          $(".phone-block .field_value", this).css("border-color", "red");
          ret=1;
      }
      if($(".email-block .field_value", this).val().length < 1) {
          $(".email-block .field_value", this).css("border-color", "red");
          ret=1;
      }
      if($("#p_p_acc", this).length > 0) {
          if($("#p_p_acc", this).prop("checked")==false) {
              $(".form_newsletter_pp", this).css("border", "1px solid red");
              ret=1;
          }
      }
      if(ret==1) {
          alert(message);
          return false;
      }
  }
  );
  $(".phone-block input", this).keydown(function (e) {
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !==-1 ||(e.keyCode==65 && ( e.ctrlKey===true || e.metaKey===true)) || (e.keyCode >=35 && e.keyCode <=40)) {
          return;
      }
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
      }
  }
  );
  $('body').on('change', '.surname-block input, .name-block input, .patronymic-block input, .phone-block input, .email-block input', function() {
      $(this).css('border-color', '');
  }
  );
  $('#Contact_date_of_birth').mask('00-00-0000', {
      placeholder: 'ДД-ММ-ГГГГ'
  }
  );
}

);