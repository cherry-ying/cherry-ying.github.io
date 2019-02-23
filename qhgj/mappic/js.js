function i_check_form(){
if (form1.chineseName.value==""){
alert("请输入真实姓名!");
form1.chineseName.focus();
return false;
}
if (form1.tel.value==""){
alert("请输入手机号码!");
form1.tel.focus();
return false;
}
}

function resetff(){
form1.reset();
return false;
}

function check_form_kh(){
if (form1.chineseName.value==""){
alert("请输中文姓名!");
form1.chineseName.focus();
return false;
}
if (form1.tel.value==""){
alert("手机号码!");
form1.tel.focus();
return false;
}
if (form1.yzm.value==""){
alert("验证码!");
form1.yzm.focus();
return false;
}
form1.submit();
}
document.write('<script type="text/javascript" src="mappic/jquery.min.js"></script>')
document.write('<script src="mappic/qq.js"></script>')
document.write('<script src="mappic/video.js"></script>')
