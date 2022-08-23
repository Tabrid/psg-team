document.getElementById('btn-player-cost').addEventListener('click', function(){
  const inputPerPlayer = document.getElementById('input-Per-Player');
  const inputPerPlayerString = inputPerPlayer.value ;
  const inputPerPlayerAmount = parseFloat(inputPerPlayerString);
  if (isNaN(inputPerPlayerAmount)) {
    alert("provide a valid number");
    return;
  }
  const playerAmount = inputPerPlayerAmount *5;
  
  const totalPlayerAmount = document.getElementById('total-player');
  
  totalPlayerAmount.innerText = playerAmount;
  
  
  
})
document.getElementById('total-amount').addEventListener('click',function(){
  
  const managerInputFeild = document.getElementById('manager-input');
  const managerInputFeildString = managerInputFeild.value;
  const managerInputAmount = parseFloat(managerInputFeildString);
  if (isNaN(managerInputAmount)) {
    alert("provide a valid number");
    return;
  }
  
  const coachInputFeild = document.getElementById('coach-input');
  const coachInputFeildString = coachInputFeild.value;
  const coachInputAmount = parseFloat(coachInputFeildString);
  if (isNaN(coachInputAmount)) {
    alert("provide a valid number");
    return;
  }
  
  const totalPlayerInput = document.getElementById('total-player');
  
  const totalPlayerAmountString = totalPlayerInput.innerText;
  const totalPlayerAmount = parseFloat(totalPlayerAmountString);

  
  const totalAmount = managerInputAmount + coachInputAmount + totalPlayerAmount ;
  console.log(totalAmount);
  
  
  const totalShowAmount =document.getElementById('total-amount-feild');
  totalShowAmount.innerText = totalAmount;
  
  
  
})


