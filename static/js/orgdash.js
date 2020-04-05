$(function(){

  $.ajax({
      url:'/get_alert',
      type:'post',
      data:"",
      success:function(msg){
        var count = msg['count'];
        $('#alertcount').html(count);
        var r = "record";
        for (var i=0;i<count;i++){
          $("#alertTable").append("<tr><td class='body-item mbr-fonts-style display-7'>"+msg[r+i]['type']+"</td><td class='body-item mbr-fonts-style display-7'>"+msg[r+i]['location']+"</td><td class='body-item mbr-fonts-style display-7'>"+msg[r+i]['priority']+"</td><td class='body-item mbr-fonts-style display-7'>"+msg[r+i]['phone']+"</td></tr>");
        }
      }
  });

  $('#newAlert').submit(function(e){
      e.preventDefault();
      email = $('#email_div').data('email');
      data = $('#newAlert').serialize();
      data['email'] = email;
      $.ajax({
          url:'/add_new_alert',
          type:'post',
          data:data,
          success:function(){
              $('#newAlertSuccess').removeAttr('hidden');
              $('#newAlertForm')[0].reset();
          },
          error:function(){
              $('#newAlertFailure').removeAttr('hidden');
          }
      });
  });


});
