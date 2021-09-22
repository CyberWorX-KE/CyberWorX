
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

 