document.getElementById('cashOut-btn').addEventListener('click',function(e){
  e.preventDefault();
  const withdrawal = getInputValueById('cashOut-amount');
  const totalBalance = getTextValueById('currentBalance');
  const withdrawalPin = getInputValueById ('cashOut-pinNumber');
  if(isNaN(withdrawal) || withdrawal>totalBalance || withdrawal<=0){
    alert('invalid input or insufficient balance your wallet');
    return;
  }
  if(withdrawalPin === 1234){
   const withdrawalUpdateAmount = totalBalance - withdrawal;
   document.getElementById('currentBalance').innerText = withdrawalUpdateAmount;
 const div = document.createElement('div');
 div.style.backgroundColor='white';
 div.style.padding='6px';
 div.style.margin='10px';
 div.style.textAlign='center';
 div.style.borderRadius='8px';
 div.innerHTML =`<h4 class="text-2xl font-bold bg-yellow-50 ">Cash Out</h4>
 <p class="text-red-400"><span class="text-black">Exiting Balance is </span> Rs: ${totalBalance} <span class="text-black">Withdrawal Amount </span> Rs: ${withdrawal} <span class="text-black">and new Balance </span> Rs: ${withdrawalUpdateAmount} 
 </p>
 `
document.getElementById('txn-container').appendChild(div);

  }else{
    alert('Cash Out Failed! try again..');
  }
})