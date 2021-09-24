var form = document.getElementById("contact-forml");
    
async function handleSubmit(event) {
  event.preventDefault();
  var reason = document.getElementById("reason").options[document.getElementById("reason").selectedIndex].text;
  console.log(reason)
  rst = reason.match(/hacker/i);
  console.log(rst)
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
      if(rst == "hacker"){
        form.reset()
          alert("test successful, you can proceed to account creation.")
          window.location.href = "signup.html";

      }else{
          form.reset()
          alert("Thank you for your interest, we'll get back to you shortly. Have some fun on our blog in the meantime");
          window.location.href = "myreport.html";
         
      }
    
  }).catch(error => {
    alert("Oops! There was a problem submitting your query");
  });
}
form.addEventListener("submit", handleSubmit)