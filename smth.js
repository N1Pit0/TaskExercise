
function checkPass(){

    let password = document.getElementById(`#password`).value;
    let confirmPassword = document.getElementById(`#confirmPassword`).value;
    
    if(password !== confirmPassword){
        alert(`does not match`);
        return false;
    }

}