
function checkPass(){

    let password = document.getElementById(`password`).value;
    let confirmPassword = document.getElementById(`confirmPassword`).value;
    
    if(password !== confirmPassword){
        alert(`does not match`);
        return false;
    }

}

const rangeInput = document.getElementById('myRange');
const rangeValue = document.getElementById('idd');
  
rangeInput.addEventListener('input', () => {
    rangeValue.innerText = `${rangeInput.value}`;
  });