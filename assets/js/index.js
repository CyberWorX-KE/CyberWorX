$("#search").bind("keyup", function() {
  var text = $(this).val().toLowerCase();
  var program = $("#program");

  //first, hide all:
  program.parent().hide();

  //show only those matching user input:
  program.filter(function () {
      return $(this).text().toLowerCase().indexOf(text) == 0;
  }).parent().show();
});