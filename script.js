$(document).ready(function() {
    var animationInProgress = false;

    function addShape(type, color) {
        var shape = $('<div class="shape"></div>').css({
            'background-color': color,
            'border-radius': type === 'circle' ? '50%' : '0'
        });

        $('.shapeContainer').append(shape);

        if ($('.shape').length % 5 === 0) {
            $('.shapeContainer').append('<br>');
        }

        shape.animate({left: 0}, 500);
    }

    function removeShape() {
        if ($('.shape').length === 0 || animationInProgress) return;
        
        animationInProgress = true;

        var lastShape = $('.shape').last();
        lastShape.fadeOut(500, function() {
            lastShape.remove();
            animationInProgress = false;
        });
    }

    $('#addShapeBtn').click(function() {
        if (animationInProgress) return;

        var type = $('#shapeType').val();
        var color = $('#shapeColor').val();
        addShape(type, color);
    });

    $('#removeShapeBtn').click(function() {
        removeShape();
    });
});

