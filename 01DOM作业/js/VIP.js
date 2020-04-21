(function(){
	var oAdmin=document.getElementById('admin');
	var oPassword=document.getElementById('password');
	var oClick=document.getElementById('click');  
	oClick.onclick=function(){
		if(oAdmin.value=''||oPassword.value=''){
			alert("用户名或密码不能为空");
		}else if{
			alert("登陆成功");
		}
	}
})
