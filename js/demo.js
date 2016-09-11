$(".fixed-all").find(".top").click(function(){
	$("body").animate({scrollTop:"0px"},500);
});
$(window).scroll(function(){
	scrollY > 0 ? $(".fixed-all").css("display","block") : $(".fixed-all").css("display","none");
});
var $index = $(".index");
$(".imgs li:nth-of-type(1)").css("display","block");
$(".main1-text .slide-item").css("display","block");
var a = 1;
$(".index:nth-of-type("+ a +")").addClass("active");

$(".index").click(function(){
	for(i = 0;i < $index.length;i++){
		$(this).addClass("active").siblings().removeClass("active");
		var _index = $(this).index()+1;	
	};
	$(".imgs li:nth-of-type("+ _index + ")").css("display","none").fadeIn(500).siblings().css("display","none");
	$(".main1-text .slide-item:nth-of-type("+ _index + ")").css("display","none").fadeIn(500).siblings().css("display","none");
	$(".slide-item:nth-of-type("+ _index + ")").css("display","none").animate({top:"-30px",opacity:'show'},"slow");
	a = _index;
});

setInterval(function(){
	a++;
	if(a == 6){
		$(".index:nth-of-type(1)").click();
	}else{
		$(".index:nth-of-type("+a+")").click();
	}
},4000);