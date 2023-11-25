function usdToCad(cad){
    var usd = parseFloat(cad * 1.36).toFixed(3);
    return usd
}

function cadToUsd(usd){
    var cad = parseFloat(usd * 0.73).toFixed(3); 
    return cad
}

function updateValue() {
    amount = document.getElementById("amount").value;
    currency = document.getElementById("currency").value;
    Converted=document.getElementById("Converted");
    Converted_to=document.getElementById("Converted_to");
   if(currency=="usd")
   {
    Converted.value=usdToCad(amount);
    Converted_to.value="cad";
   }
   else{
    Converted.value=cadToUsd(amount);
    Converted_to.value="usd";
   }
}
