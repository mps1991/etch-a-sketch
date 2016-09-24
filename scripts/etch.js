$(document).ready(function() {
	makeGrid(16);

	$("#clearbutton").click(function() {
		makeGrid(prompt("Enter side length", 16));
		$(document).ready();
	});
});

function makeGrid(size) {
	var $gridholder = $("#gridholder");
	$gridholder.empty();
  $gridholder.css("width", 11 * size + 1);
  $gridholder.css("height", 11 * size + 1);
	console.log($(".cell").width());

  for (var y = 0; y < size; y++) {
    var $gridrow = $("<div class='gridrow'></div>");
    $gridrow.attr("id", "row" + y);
    $gridholder.append($gridrow);
    for (var x = 0; x < size; x++) {
      var $cell = $("<div class='cell'></div>");
      $cell.attr("id", "cell" + (size * y + x));
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
