foreach ($read->getResult() as $rows): 
 $jSon['result'] = " 
 <div class='box_imoveis' style='display:block'>
 <p class='name'>$rows[descricao]</p>
 <div class='top-info'>
 <span class='empresa'>$rows[grupo_titulo]</span>
 <span class='cidade'></span>
 <span class='descricao'>$rows[descricao_ANU]</span>
 </div> 
 </div> 
 ";
 endforeach;
 
 $jSon['success'] = $Post['descricao'];


 $('.jumpMenu').on('change',function(){
 var form = $(this);
 var data = $(this).serialize();
 var base = "../_cdn/ajax/users";
$.ajax({
 url: base + '.ajax.php',
 data: data,
 type: 'POST',
 dataType: 'json',
 beforeSend: function () {
 form.find('.form_load').fadeIn(500);
 form.find('.ms').fadeOut(500, function () {
 $(this).remove();
 });
 },
 success: function (resposta) {
 if (resposta.error) {
 form.find('.trigger-box').html('<div class="ms trigger-error">' + resposta.error + '</div>');
 form.find('.trigger-error').fadeIn();
 } else {
 form.find('.trigger-box').html('<div class="ms trigger-success">' + resposta.success + '</div>');
 form.find('.trigger-success').fadeIn(); 
 
 $('.j_rows').remove();
 $('.j_result').show();
 
 $(".j_result").append(resposta.result);
 }
 form.find('.form_load').fadeOut(500);
 }
 });
 //console.log(data);
 return false;
