$(function(){
	var hash = window.location.hash;	
	var oheaderList = document.getElementById('headerList');
	var aHeaderLi = oheaderList.getElementsByTagName('li');	
	if(hash) {		
		aHeaderLi[0].innerHTML = '<a href="trast1.html">'+hash.substring(1)+'</a> &nbsp;,&nbsp;你好！';
		aHeaderLi[1].innerHTML = '<a href="index.html">退出</a>';
		$('#city>a').attr('href','city.html?'+hash);
		$('#country>a').attr('href','country.html?'+hash);
	}
	//nav滑动和点击事件
	var oUl = document.getElementById('navList');
	var aNavLi = oUl.getElementsByTagName('li');

	for(var i=0;i<aNavLi.length;i++) {		
		aNavLi[i].onmouseover = function() {			
			for(var j=0;j<aNavLi.length;j++) {
				aNavLi[j].className = "";
			}
			this.className = "selected";								
		};			
	}

	var oList = oUl.getElementsByTagName('a');
    var aList = [].slice.call(oList);
    for(p in aList){
        aList[p].onclick = function (e){
            var name = this.getAttribute('href').substring(1);
            var top = document.getElementById(name).offsetTop;            
            e.preventDefault();
            var starTime = Date.now();
            requestAnimationFrame(function f(){
                var p = Math.min(1,(Date.now()-starTime)/500);
                document.body.scrollTop = top*p;
                if(p<1){
                    requestAnimationFrame(f);
                }
            });
     	}
     }
});