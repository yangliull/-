$(function(){
	$('.btn-success').on('click', function(){
		var $name = $('#firstname').val();
		var $psd = $('#lastname').val();
		var $n = 'aaa';
		var $flag = 0;
		$.get(
			'data.json',
			$n,
			function(data){
				for(var i = 0; i < data.length; i++){
					if($name == data[i].username && $psd == data[i].psd){
						window.location.href = 'index.html?#'+ $name;
					}else{
						$flag++;
					}
				}
				if($flag > data.length - 1){
					alert('请输入正确用户名和密码');
					$('#firstname').val('');
					$('#lastname').val('');
				}
			},
			'json'
		);
	});

});