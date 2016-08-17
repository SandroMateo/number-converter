function binary(input) {
  if(input === 0 || input === 1) {
    return input;
  }
  else if(input % 2 === 0) {
    return Math.pow(10, input/2);
  }
  else {
    return Math.pow(10, parseInt(input/2)) + 1;
  }
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNum = parseInt($("#inputNumber").val());
    var output = binary(inputNum);
    $("#output").text(output);
  });
});
