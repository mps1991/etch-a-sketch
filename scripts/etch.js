rows = 16;
cols = 16;

$(document).ready(function() {
  var $gridholder = $("#gridholder");
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

  $(".cell").click(function() {
    $(this).toggleClass("cellclicked");
  });

});
