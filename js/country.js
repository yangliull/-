$(function(){
		var name = window.location.hash.substring(1);
		var $uls = $('#wrap1 ul');
		var $minUl = getMinul();
		var start = false; //判断循环的内容是否加载完毕
		var p = 1;
		function getInfo(){
				$.get("country.json",function(res){
				var page = res.length/12;
				if(p<page+1){
					for(var i=(p-1)*12;i<12*p;i++){
						var obj = res[i];
						var html = '<li><a href="detail.html?#'+name+'">'+'<img src="'+obj.img+'.jpg" alt="load"/>'+'</a><p>'+obj.contents+'</p></li>';
						$minUl = getMinul();
						$minUl.append(html);
					}
					p++;
				}	
				$minUl = getMinul();
				start = true;
			},"json");
		}
		getInfo();
		//计算最短ul
		function getMinul(){
			var $minUl = $uls.eq(0);
			for(var i=1;i<$uls.length;i++){
				if($uls.eq(i).height()<$minUl.height()){
					$minUl = $uls.eq(i);
				}
			}
			return $minUl;
		}
		//满足滚动条件时加载
		$(window).on('scroll',function(){
			// var $minUl = getMinul(),
			var	scrollTop = $(window).scrollTop(),
				winHeight = $(window).height();
			if(scrollTop+winHeight>=$minUl.height() && start){
				getInfo();
				start = false;
			}
		});
	});