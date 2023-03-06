  function sendMail() {
   let fields = {
    name: document.querySelector("#name").value,
    tel: document.querySelector("#tel").value,
   };
   let body = '姓名：' + fields.name + '<br>'
              + '電話：' + fields.tel + '<br>';
   Email.send({
    SecureToken: "你的token",
    To: '收件者',
    From: "寄件者",
    Subject: "主旨",
    Body: body,
   }).then(
    message => alert(message)
   );
  }