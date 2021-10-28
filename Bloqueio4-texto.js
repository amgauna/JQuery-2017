// Bloqueando Cópia de Conteúdo de Página com jQuery
// CRTL+A (selecionar tudo)
// Menu de contexto do clique com o botão direito
// Selecionar texto com o mouse

function block() {
    jQuery.fn.extend({
        disableSelection : function() {
            return this.each(function() {
                this.onselectstart = function() {
                    return false;
                };
                this.unselectable = "on";
                jQuery(this).css('user-select', 'none');
                jQuery(this).css('-o-user-select', 'none');
                jQuery(this).css('-moz-user-select', 'none');
                jQuery(this).css('-khtml-user-select', 'none');
                jQuery(this).css('-webkit-user-select', 'none');
            });
        },
        disableSelectedAll : function() {
            return this.each(function() {
                this.onkeydown = function(event) {
                    if( event.ctrlKey \\&\\& (event.keyCode == 65 || event.keyCode == 97) ){
                        event.preventDefault();
                    }
                };
            });
        }
    });
     
    $(document).disableSelection();
 
    $(document).disableSelectedAll();
 
    $(document).bind('contextmenu', function(event) {
        event.preventDefault();
    });
}

