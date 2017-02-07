$(document).ready(function() {
  var gridSize = 16;

  drawGrid(gridSize);

  $("#shakebutton").click(function() {
    gridSize = prompt("How many squares?");
    $(".square").remove();
    $(".row").remove();
    drawGrid(gridSize);
  })
});

function drawGrid(gridSize)
{
  var containerWidth = $("#container").width();
  var containerHeight = $("#container").height();
  var squareHeight = containerHeight / gridSize;
  var squareWidth = containerWidth / gridSize;

  for (var row = 0; row < gridSize; row++)
  {
    var $rowDiv = $('<div class="row" id="row' + row + '"></div>');
    $("#container").append($rowDiv);
    for (var column = 0; column < gridSize; column++)
    {
      var $columnDiv = $('<div class="square" id="square' + row + '-' + column + '"></div>');
      $rowDiv.append($columnDiv);
    }
  }

  $(".row").height(squareHeight);
  $(".square").height(squareHeight);
  $(".square").width(squareWidth);

  $(".square").hover(function() {
    $(this).addClass("highlight");
  });
}
