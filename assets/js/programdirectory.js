  // $("#search").bind("keyup", function () {
  //   var text = $(this).val().toLowerCase();
  //   var program = $("#program");

  //   //first, hide all:
  //   program.parent().hide();

  //   //show only those matching user input:
  //   program.filter(function () {
  //     return $(this).text().toLowerCase().indexOf(text) == 0;
  //   }).parent().show();
  // });
  // $("form.filter").on('click', function (event) {
  //   event.preventDefault();
  //   var comp = new FormData(this);
  //   const filter = {
  //     bank: comp.get('bank'),
  //     telco: comp.get("telco"),
  //     sacco: comp.get("sacco"),
  //   }
  //   console.log(filter)
  //   if (filter[comp.get('bank')].checked === true) {
  //     alert('checked')
  //   }
  // })
  var filterInput = document.getElementById("search");
  const head = document.querySelectorAll('tbody tr');

  filterInput.addEventListener('keyup', function (event) {
    const q = event.target.value;
    head.forEach(head =>{
      head.querySelector('th').textContent.toLowerCase().startsWith(q)
       ? head.style.display = ''
      : head.style.display = 'none'
    })
  })