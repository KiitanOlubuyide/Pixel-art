//creating the grid function
$('#sizePicker').submit(function (Grid) {
    Grid.preventDefault();
    var columns = $('#inputHeight').val();
    var rows = $('#inputWidth').val();
    makeGrid(rows, columns);       
});

//call the grid function that was made
function makeGrid(x, y) {
    $('tr').remove(); // to stop the submit button from creating more grids
    
    for (let length = 1; length <= x; length++) {
        $('#pixelCanvas').append('<tr id=layout' + length + '></tr>');
        for (let width = 1; width <=y; width++) {
            $('#layout' + length).append('<td></td>');
        }    
    }
    //define a click event for cell colors
    $('td').click(function addColor() {
        var color = $('#colorPicker').val();
        $(this).css('background-color', color);  
    });
}   