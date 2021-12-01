<script type="text/javascript">

 $(function() {
    // Adiciona o captcha. 
    Recaptcha.create("6LfyUe0SAAAAAKexAYn01ad_B8ck8JVc25cuo_qb", "captcha", {
    callback: Recaptcha.focus_response_field, theme:"white", lang:readCookie('IDIOMA')})
  });

  $(document).ready(function() {

    // Valida e submete o form de consulta de protocolo.
    $("#searchProtocolForm").on("submit", function() {

      if ($("#protocolNumber").val() == "") {
        alert("O preenchimento do número do protocolo é obrigatório");
      } else if ($("#recaptcha_response_field").val() == "" ) {
        alert("O preenchimento do texto de confirmação é obrigatório!");
      } else {

        $(".fa-search").removeClass("fa-search");
        $(".fa").addClass("fa-spinner");
        $(".fa-spinner").addClass("fa-spin");
        $("#submit_form").attr("disabled","disabled");

        $.ajax({
          type: "POST",
          url: "./search.php",
          data: $("#searchProtocolForm").serialize(),
          success: function(data) {
            $("#tile2").html(data);
          }
        });
      }

      return true; 
    })
 
  });

</script>
