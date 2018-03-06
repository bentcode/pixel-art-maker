/*
* @description Creates a table based on height and width parameters
* @param height - The height of the grid
* @param width - The width of the grid
*/
function makeGrid( height, width) {
	// Create the new table.
	let table = "<tbody>";
	let i = 0;
	while (i < height) {
		table += '<tr>';
		for (let j = 0; j < width; j++) {
			table += '<td></td>';
		}
		table += '</tr>';
		i++;
	}
	table += "</tbody>";

	// Clear out the prior table and add the new one.
	$("#pixel_canvas").empty();
	$("#pixel_canvas").append(table);
}

/*
* Event listeners 
*/

// Listen for submit events indicating that the user has select a new grid
$('#sizePicker').submit(function () {
	makeGrid($("#input_height").val(), $("#input_width").val());
	event.preventDefault();
});

// Listen for user grid selections.  Paint the current color to that location
$("#pixel_canvas").on('click', 'td', function() {
	$(this).css( "background-color", $("#colorPicker").val());
});