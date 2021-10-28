// How to detect copy, paste and cut behavior with jQuery

// To detect copy, paste and cut behavior, you just need to bind the corresponding event type.

$("#textA").bind('copy', function() {
    $('span').text('copy behaviour detected!')
});	
$("#textA").bind('paste', function() {
    $('span').text('paste behaviour detected!')
});	
$("#textA").bind('cut', function() {
    $('span').text('cut behaviour detected!')
});
If you are using jQuery 1.4x, it’s support the multiple events declaration like following :


$("#textA").bind({
	copy : function(){
		$('span').text('copy behaviour detected!');
	},
	paste : function(){
		$('span').text('paste behaviour detected!');
	},
	cut : function(){
		$('span').text('cut behaviour detected!');
	}
});

// Try it yourself
