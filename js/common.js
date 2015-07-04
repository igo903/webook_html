$(function(){
	$('.language .others a').click(function(){
		$('.language > a').text($(this).text());
	});
});