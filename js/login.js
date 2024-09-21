
document.getElementById('btn-login').addEventListener('click',function(e){
  e.preventDefault();
  const mobile = getInputValueById('mobileNumber');
  const password = getInputValueById('pinNumber');
  console.log(mobile,password)
  if(mobile === 9433850240 && password === 1234){
  
    alert('Login Successfully..');
    window.location.href = ('../home.html');


  }else{
    alert('Login Failed!.. try again..')
  }
})