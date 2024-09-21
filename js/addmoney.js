document.getElementById('addMoney-btn').addEventListener('click',function(e){
  e.preventDefault();
const addAmount = getInputValueById('addAmount');
const pinNumber = getInputValueById('addPin');
if(isNaN(addAmount) || addAmount<=0){
  alert('invalid input!..')
  return;
}
if(pinNumber === 1234){
 const balance = getTextValueById('currentBalance');
 const newBalance = balance + addAmount ;
 document.getElementById('currentBalance').innerText = newBalance;
 const p = document.createElement('p');
 p.style.color="green";
 p.style.padding='6px';
 p.style.margin='10px';
 p.style.textAlign='center';
 p.style.backgroundColor='white';
 p.style.borderRadius='8px';
 p.innerText =` Exiting Balance is Rs:
  ${balance} Add Amount is Rs: ${addAmount} and new Balance Rs: ${newBalance}
 `
document.getElementById('show-txn-history').appendChild(p);
console.log(p)
}else{
  alert('Add Money not added! try again..');
}
})