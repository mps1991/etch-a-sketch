$(document).ready(function() {
  makeGrid(16);

  $("#clearbutton").click(function() {
    var intRegex = /^\d+$/;
    var size = 0;

    do {
      size = prompt("Please enter an integer for side length", 16);
    } while (!intRegex.test(size))

    makeGrid(size);
    $(document).ready();
  });
});

function makeGrid(size) {
  var $gridholder = $("#gridholder");
  $gridholder.empty();
  $gridholder.css("width", 21 * size + 1);
  $gridholder.css("height", 21 * size + 1);
  console.log($(".cell").width());

  for (var y = 0; y < size; y++) {
    var $gridrow = $("<div class='gridrow'></div>");
    //$gridrow.attr("id", "row" + y);
    $gridholder.append($gridrow);
    for (var x = 0; x < size; x++) {
      var $cell = $("<div class='cell'></div>");
      //$cell.attr("id", "cell" + (size * y + x));
      $gridrow.append($cell);
    }
  }

  $('.cell').hover(function() {
    $(this).animate({"background-color": "black"}, 400);
  });
}

function clear() {
  var side = prompt("Please enter new side length", 16);
  makeGrid(side, side);
};
