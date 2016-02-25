var factorial = function(a) {
  if (a === 0) {
    return 1;
  }

  return a * factorial(a-1);
  }


$(document).ready(function() {
  $("form#rate").submit(function(event) {
    var a = parseInt($("input#a").val());

    var result = factorial(a);

    $("#factorial").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
