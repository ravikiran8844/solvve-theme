$("#signin").click(function(e){
  e.preventDefault(),$("#CustomerEmail, #CustomerPassword").removeClass("frm_error");
  var email = $("#CustomerEmail").val(),password = $("#CustomerPassword").val(),emailrg = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
  if(!emailrg.test(email)){
    $("#CustomerEmail").addClass("frm_error");
  }  
  if(password.length<6){
    $("#CustomerPassword").addClass("frm_error");
  }
  if((emailrg.test(email))&&(password.length>=6)){
    $("#customer_login").submit();
  }
});
$(".recover_btn").click(function(e){
  var recEmail = $("#RecoverEmail").val(),emailrg = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,state = false;
  if(!emailrg.test(recEmail)){
    $("#RecoverEmail").addClass("frm_error"),state  = false;
  }
  else if(emailrg.test(recEmail))
  {    
    state  = true;
  }
  return state;
});
$("#signup").click(function(e){
  $("#FirstName, #LastName, #Email, #CreatePassword").removeClass("frm_error");
  var fname = $("#FirstName").val(),lname = $("#LastName").val(),email = $("#Email").val(),password = $("#CreatePassword").val(),emailrg = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,state = '';
  if(fname.length<1){
    $("#FirstName").addClass("frm_error"),state  = false;
  }
  if(lname.length<1){
    $("#LastName").addClass("frm_error"),state  = false;
  }
  if(!emailrg.test(email)){
    $("#Email").addClass("frm_error"),state  = false;
  }  
  if(password.length<6){
    $("#CreatePassword").addClass("frm_error"),state  = false;
  }
  if((fname.length>1)&&(lname.length>1)&&(emailrg.test(email)) && (password.length>=6)){
    state  = true;
  }
  return state;
});
$(".actv_but").click(function(e){
  $("#CustomerPassword, #CustomerPasswordConfirmation").removeClass("frm_error");
  var password = $("#CustomerPassword").val(),confpassword = $("#CustomerPasswordConfirmation").val(),state = '';
  if(password.length<6){
    $("#CustomerPassword").addClass("frm_error"),state  = false;
  }
  if(confpassword.length<6){
    $("#CustomerPasswordConfirmation").addClass("frm_error"),state  = false;
  }
  if(confpassword != password) {
    $("#CustomerPassword, #CustomerPasswordConfirmation").addClass("frm_error"),state  = false;
  }
  if(((confpassword.length>=6) && (password.length>=6))&&(confpassword == password)){
    state  = true;
  }
  return state;
});
$(".csreset_pass").click(function(e){
  console.log("checked");
  $("#CustomerPassword, #CustomerPasswordConfirmation").removeClass("frm_error");
  var password = $("#CustomerPassword").val(),confpassword = $("#CustomerPasswordConfirmation").val(),state = '';
  if(password.length<6){
    $("#CustomerPassword").addClass("frm_error"),state  = false;
  }
  if(confpassword.length<6){
    $("#CustomerPasswordConfirmation").addClass("frm_error"),state  = false;
  }
  if(confpassword != password) {
    $("#CustomerPassword, #CustomerPasswordConfirmation").addClass("frm_error"),state  = false;
  }
  if(((confpassword.length>=6) && (password.length>=6))&&(confpassword == password)){
    state  = true;
  }
  return state;
});
$(".reset_pass").click(function(e){
  $("#ResetPassword, #PasswordConfirmation").removeClass("frm_error");
  var password = $("#ResetPassword").val(),confpassword = $("#PasswordConfirmation").val(),state = '';
  if(password.length<6){
    $("#ResetPassword").addClass("frm_error"),state  = false;
  }
  if(confpassword.length<6){
    $("#PasswordConfirmation").addClass("frm_error"),state  = false;
  }
  if(confpassword != password) {
    $("#ResetPassword, #PasswordConfirmation").addClass("frm_error"),state  = false;
  }
  if(((confpassword.length>=6) && (password.length>=6))&&(confpassword == password)){
    state  = true;
  }
  return state;
});
