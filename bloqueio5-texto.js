// Se você quiser bloquear apenas o que estiver abaixo de uma “div” por exemplo, dê um ID ou crie uma css class para ela. 
// Você poderia utilizar exatamente o script anterior trocando “document” pelo ID ou pela class do seu componente, mas 
// vamos fazer algo mais específico para bloquear:
// Copiar, Recortar e Colar
// Menu de contexto do clique com o botão direito
// Foco
// Seleção de texto

function block() {
    $('#component').bind('contextmenu', function(event) {
        event.preventDefault();
    });
 
    $('#component').bind('selectstart dragstart', function(event) {
        event.preventDefault();
        return false;
    });
 
    $("#component").bind("cut copy paste", function() {
        return false;
    });
 
    $('#component').focus(function() {
        $(this).blur();
    });
}
