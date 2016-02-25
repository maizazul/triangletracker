var triangletracker = function(a,b,c) {
  var sumab = a+b;
  var sumbc = b+c;
  var sumac = a+c;
     if ((sumab <= c) || (sumbc <= a) || (sumac <= b)){
        return "not a triangle"
     }
     else if ((a === b) && (b === c) && (c === a)){
        return "equilateral";
     } else if ((a === b) && (c !== a)){
        return "isosceles"
     } else if ((a === c) && (b !== c)) {
        return "isosceles"
     } else if ((a !== b) && (b === c)){
        return "isosceles"
     } else if ((a !== b) && (b !== c)){
        return "scalene"
     }
  };

$(document).ready(function() {
  $("form#rate").submit(function(event) {
    var a = parseInt($("input#side1").val());
    var b = parseInt($("input#side2").val());
    var c = parseInt($("input#side3").val());

    var result = triangletracker(a,b,c);

    $("#triangletype").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
