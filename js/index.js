$(document).ready(function(){
	//login
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

	//轮播图
	var oBcontainner = document.getElementById('bcontainner');
	var oBannerimgs = document.getElementById('bannerimgs');
	var aImg = oBannerimgs.getElementsByTagName('img');

	var oImglist = document.getElementById('imgsList');
	var aBanLi = oImglist.getElementsByTagName('li');

	var oCont = document.getElementById('cont');
	var aContLi = oCont.getElementsByTagName('li');

	oBannerimgs.appendChild(aImg[0].cloneNode());		
	oBannerimgs.style.width = aImg.length*aImg[0].offsetWidth+'px';

	var index = 0;
	var timer;

	function playInterval() {
		timer = setInterval(function(){
			index++;					
			if(index==aImg.length){
				oBannerimgs.style.left = 0;				
				index = 1;				
			}			
		 	play(index);
		},2000);
	}
	function play(idx) {					
		for(var j=0;j<aBanLi.length;j++) {
			aBanLi[j].className = "";
			aContLi[j].className = "";
		}		
		aBanLi[idx==aBanLi.length?0:idx].className = "selected";
		aContLi[idx==aBanLi.length?0:idx].className = "show";
		$('#bannerimgs').animate({left:-(idx*aImg[0].offsetWidth)},1000,function(){});
	}

	for(var i=0;i<aBanLi.length;i++) {
		aBanLi[i].index = i;
		aBanLi[i].onclick = function() {
			index=this.index;			
			play(index);		
		}
	}	
	playInterval();
	oBcontainner.onmouseover = function() {
		clearInterval(timer);
	}
	oBcontainner.onmouseout = function() {
		playInterval();
	}		
	//活动展区
	var oImg = document.getElementById('photoimgs');
	var aPhoneLi = oImg.getElementsByTagName('li');	
	oImg.innerHTML += oImg.innerHTML;
	oImg.style.width = aPhoneLi.length*2*(aPhoneLi[0].offsetWidth) + 'px';
	
	//回到顶部
	var top = document.getElementById('top');
        top.onclick = function (){
            var starTime = Date.now();
            var startTop = document.body.scrollTop;
            requestAnimationFrame(function f() {
                var p = Math.min(1,(Date.now()-starTime)/500);
                document.body.scrollTop = startTop*(1-p);
                if(p<1){
                    requestAnimationFrame(f);
                }
            })
        };
});