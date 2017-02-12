randomColor = false;
progressiveShading = false;
gridSize = 16;

$(document).ready(function() {
  drawGrid();

  $("#randomcolorsinput").click(function() {
    randomColor = !randomColor;
    $("#shadinginput").prop("disabled", randomColor);
  })

  $("#shadinginput").click(function() {
    progressiveShading = !progressiveShading;
  });

  $("#shakebutton").click(reset);

  $("#gridsizebutton").click(function() {
    var gridSizeInput = $("#gridsizeinput").val();
    if (parseInt(gridSizeInput) == NaN) {
      window.alert("Please enter a number.")
      $("gridsizeinput").val("");
    }
    else {
      gridSize = parseInt(gridSizeInput);
      reset();
    }
  });
});

function reset() {
  $("#container").effect("shake", "left", "10", "3");
  $("#container").children().remove();
  drawGrid();
}

function drawGrid() {
  var containerWidth = $("#container").width();
  var containerHeight = $("#container").height();
  var squareHeight = containerHeight / gridSize;
  var squareWidth = containerWidth / gridSize;

  for (var squareCount = 0; squareCount < gridSize * gridSize; squareCount++)
  {
    var $squareDiv = $('<div class="square"></div>');
    $("#container").append($squareDiv);
  }

  $(".square").css({ "height" : squareHeight + "px",
                      "width": squareWidth + "px"});
  $("#container").children('div').mouseover(paintPixel);
}

function paintPixel() {
  if (randomColor) {
    $(this).css("background-color", randomRGB());
  }
  else if (progressiveShading) {
    var newRGBValue = darkenRGB($(this).css("background-color"));
    $(this).css("background-color", newRGBValue);
  }
  else {
    $(this).css("background-color", "black");
  }
}

function randomRGB() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")"
}

function darkenRGB(rgb) {
  var rgbValue = parseInt(/[0-9]+/.exec(rgb)) - 20;
  if (rgbValue < 0)
    rgbValue = 0;

  return "rgb(" + rgbValue + ", " + rgbValue + ", " + rgbValue + ")";
}
