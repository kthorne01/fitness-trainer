var form = document.getElementById("contact-form");
$(document).ready(function(){
   $("#contact-btn").click(function(){
     $("#contact-form").toggle();
   });
   form.addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    if (!validateEmail(email)) {
      alert("Invalid email address!");
      return;
    }
    // Submit form if email is valid
    form.submit();
  });
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



