
  var filterInput = document.getElementById("search");
  const head = document.querySelectorAll('tbody tr');

  filterInput.addEventListener('keyup', function (event) {
    const q = event.target.value;
    head.forEach(head =>{
      head.querySelector('th').textContent.toLowerCase().startsWith(q)
       ? head.style.display = ''
      : head.style.display = 'none'
    })
  });

 var check = document.querySelectorAll('.checkbox');
 const table = document.querySelectorAll('tbody tr');

for (i = 0; i < check.length; i++) {
  check[i].addEventListener("change", (e) =>{
    e.preventDefault();
    const filter = e.target.dataset.filter;
    console.log(filter)
    table.forEach((product) => {
      if(filter == "all"){
        product.style.display = ""
      }else{
        if (product.classList.contains(filter))
        {
          product.style.display = ""
        }else{
          product.style.display = "none"
        }
      }
    })
  })
}