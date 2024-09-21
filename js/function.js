function getInputValueById(id){
const inputValue = document.getElementById(id).value;
const inputConvert = parseFloat(inputValue)
return inputConvert;
}
function getTextValueById(id){
  const textValue = document.getElementById(id).innerText;
  textConvertValue = parseFloat(textValue);
  return textConvertValue;
}
function showSectionById(id){
  document.getElementById('addMoney-form').classList.add('hidden');
  document.getElementById('cashOut-form').classList.add('hidden');
  document.getElementById('show-txn-history').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');

};
