$(document).ready(function () {
  $("#program").click(function () {
    $(".report").show();
  });
  $("#program").click(function () {
    $(".report").show();
  });
  $('#cancel_btn').click(function () {
    $(".report").hide();
  })
})

var filterInput = document.getElementById("search");
const head = document.querySelectorAll('tbody tr');

filterInput.addEventListener('keyup', function (event) {
  const q = event.target.value;
  head.forEach(head => {
    head.querySelector('th').textContent.toLowerCase().startsWith(q) ?
      head.style.display = '' :
      head.style.display = 'none'
  })
});

var check = document.querySelectorAll('.checkbox');
const table = document.querySelectorAll('tbody tr');

for (i = 0; i < check.length; i++) {
  check[i].addEventListener("change", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    console.log(filter)
    table.forEach((product) => {
      if (filter == "all") {
        product.style.display = ""
      } else if (product.classList.contains(filter)) {
        product.style.display = ""
      } else {
        product.style.display = "none"
      }

    })
  })
}
document.addEventListener("click", function (e) {
  e = e || window.event;
  var target = e.target.dataset.filter;
  console.log(target)
  if (target == "cancel") {
    document.forms['report'].submit();
    window.close();
  }else if(target == "send"){
    alert("Your report has been submitted")
    document.forms['report'].submit();
    window.load();
  }
  const report = $(".report");

  report.html(`
  <form class="report">
      <div>
        <input type="text" class="form-control" name="" placeholder="title">
      </div>
      <div>
        <input type="text" class="form-control" name="" placeholder=${target} readonly></input>
      </div>
      <div>
        <textarea type="text" class="form-control" name="" id="message" placeholder="message"></textarea>
      </div>
      <div>
      <input type="submit" class="btn btn-danger" data-filter="cancel" value="cancel">
      <input type="submit" class="btn btn-primary" data-filter="send" value="Send">
      </div>
    </form>
  `)
}, false)