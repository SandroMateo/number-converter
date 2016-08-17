// function binary(input) {
//   if(input === 0 || input === 1) {
//     return input;
//   }
//   else if(input % 2 === 0) {
//     return Math.pow(10, input/2);
//   }
//   else {
//     return Math.pow(10, parseInt(input/2)) + 1;
//   }
// }
// function trinary(input) {
//   if(input === 0 || input === 1 || input === 2) {
//     return input;
//   }
//   else if(input % 3 === 0) {
//     return Math.pow(10, input/3);
//   }
//   else if(input % 3 === 1) {
//     return Math.pow(10, parseInt(input/3)) + 1;
//   }
//   else {
//     return Math.pow(10, parseInt(input/3)) + 2;
//   }
// }
function converter(input, value) {
  if (input === 0) {
    return input;
  }
  else {
    for (var i = 0; i < value - 1; i++) {
      if(input % value === i) {
        return Math.pow(10, parseInt(input/value)) + input % value;
      }
    }
  }
}


$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNum = parseInt($("#inputNumber").val());
    var conValue = parseInt($("#num-type").val());
    var output = converter(inputNum, conValue);
    $("#output").text(output);
    // if($("#num-type").val() === "2") {
    //   var output = binary(inputNum);
    //   $("#output").text(output);
    // }
    // else if($("#num-type").val() === "3") {
    //   var output = trinary(inputNum);
    //   $("#output").text(output);
    // }

  });
});
