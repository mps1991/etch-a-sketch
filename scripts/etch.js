rows = 16;
cols = 16;

$(document).ready(function() {
	makeGrid(30, 30);

  $('.cell').hover(function() {
    $(this).animate({"background-color": "black"}, 400);
  });
});

function makeGrid(rows, cols) {
	var $gridholder = $("#gridholder");
  $gridholder.css("width", 21 * rows + 1);
  $gridholder.css("height", 21 * cols + 1);

  for (var y = 0; y < rows; y++) {
    var $gridrow = $("<div class='gridrow'></div>");
    $gridrow.attr("id", "row" + y);
    $gridholder.append($gridrow);
    for (var x = 0; x < cols; x++) {
      var $cell = $("<div class='cell'></div>");
      $cell.attr("id", "cell" + (cols * y + x));
      $gridrow.append($cell);
    }
  }
}

function clear() {
  var side = prompt("Please enter new side length", 16);
  makeGrid(side, side);
};
