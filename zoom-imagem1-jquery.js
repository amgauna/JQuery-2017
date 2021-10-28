<script>
$(document).ready(function() {
    $('.img-responsive').on("click", function() {
        $(this).toggleClass('maxSize')
    });
});
.maxSize {
    height: 70%;
    width: 70%; }
</script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<br><img class="img-responsive" src="img/teste.png">
