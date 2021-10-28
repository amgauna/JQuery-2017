// Bloquear o control-v em uma caixa de texto

// No seu HTML = <input type="text" id="texto"></input>

// No seu Javascript se você estiver usando jQuery na sua aplicação, você pode fazer da seguinte forma:

$(document).ready(function() {

    $("#texto").bind('paste', function(e) {
        e.preventDefault();
    });
});
