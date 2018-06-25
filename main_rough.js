$(document).ready(function() {
    /**
     * Grid Height = number of row
     * Grid Width = number of columns
     * 
     * Consider declare a constant that holds tr tag
     * Make desing canvas by appending td to tr
     */

    // Create the grid canvas for art
    function makeGrid() {
        let numOfRow = 0; let numOfCol = 0;

        // $('#submit').on('click', function() {

        //     numOfRow = $('#height').val();
        //     numOfCol = $('#width').val();
            
        //     for (var i = 1; i <= numOfRow; i++) {
        //         let row = $('.grid-canvas').append('<tr>');
        //         for (col = 1; col <= numOfCol; col++) {
        //             $('tr').append('<td></td>');
        //         }
        //     }
        // }); 

        $('#submit').on('click', function() {

            numOfRow = $('#height').val();
            numOfCol = $('#width').val();
            const body = $('.grid-canvas');

            for (var i = 1; i <= numOfRow; i++) {
                let row = $('<tr id=\'' + i + '\'></tr>');
                
                for (col = 1; col <= numOfCol; col++) {
                    row.append('<td id=\'' + col + '\'></td>');
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

    //A function that changes, the background color of a cell on click.
    var target = document.getElementsById("td[]");
    $('target').click(function() {
        // console.log(target.cellIndex);
        alert(id + ' It works!');
    });

    // $('.grid-canvas td').click(function() {
    //     var col = $(this).parent().children().index($(this));
    //     var row = $(this).parent().parent().children().index($(this).parent());
    //     alert('Row: ' + row + ', Column: ' + col);
    //     console.log('I just clicked on a table cell.');
    // });
    
    // $('td').click(function() {
    //     alert('It works!');
    // })
})
