$(function(){
  function buildHTML(data){
    console.log(data.created_at)
    if (data.image) {
      var html =  
      `<div class="message">
        <div class="message__upper-info">
          <div class="message__upper-info__talker">
            ${data.user_name}
          </div>
          <div class="message__upper-info__date">
            ${data.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="message__text">
            ${data.content}
          </p>
        </div>
        <img src=${data.image} >
      </div>`
      return html;

    } else {
      var html = 
      `<div class="message">
        <div class="message__upper-info">
          <div class="message__upper-info__talker">
            ${data.user_name}
          </div>
          <div class="message__upper-info__date">
            ${data.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="message__text">
            ${data.content}
          </p>
        </div>
      </div>`
      return html;
    }
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    console.log(formData);
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data.created_at)
      var html = buildHTML(data);
      $(".messages").append(html);
      $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight});
      $("form")[0].reset();
      $(".submit-btn").prop("disabled", false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  });
});