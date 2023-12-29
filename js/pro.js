$(document).ready(function(){
	$(".list").click(function(){
	  const dataValue = $(this).attr("data-filter")
	  if(dataValue == "all-items"){
		$(".item").show()
	  }else{
		$(".item").not("." + dataValue).hide()
		$(".item").filter("." + dataValue).show()
	  }
	}) 
  })
  $(".list").click(function(){
	$(this).addClass("active").siblings().removeClass("active")
  })