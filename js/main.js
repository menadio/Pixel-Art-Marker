// Get the user selected color
function selectedColor() {
    const color = $('#selectedColor').val();
    return color;
}

// Fill function
function fillBox(element) {
    $(element).css('background-color', selectedColor());
}

$(document).ready(function() {
    // Create the art canvas
    function makeGrid() {
        let numOfRow = 0; let numOfCol = 0;

        $('#submit').on('click', function() {

            numOfRow = $('#height').val();
            numOfCol = $('#width').val();
            const body = $('.grid-canvas');

            for (var i = 1; i <= numOfRow; i++) {
                let row = $('<tr id=\'' + i + '\'></tr>');
                
                for (col = 1; col <= numOfCol; col++) {
                    row.append('<td onclick="fillBox(this)" id=\'r' + i + 'c' + + col + '\'></td>');
                }

                body.append(row);
            }
        });
    }

    makeGrid();

    // Reset design canvas grid
    $('#reset').click(function() {
        let tr = $('tbody').children('tr');
        tr.remove();
    });
});