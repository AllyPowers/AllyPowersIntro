window.onload = function(){
	$(document).ready(function(){
		
		$("#menu").click(function(){
			$("#menu").hide(500);
			$("#menu-section").css({"display":"block","transform":"translate(0px,0px)"});
/* 			var h=$(".title-nav").css("top");
			alert(h); */
		});
		$(".close").click(function(){
			$("#menu-section").css({"display":"block","transform":"translate(240px,0px)"});
			$("#menu").show(500);
		});
	});
}
