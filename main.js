const form = document.getElementById('form-confirm');

let formValid = false;

function numbervalid (ValA, ValB){
    return ValB > ValA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let ValA = parseFloat(document.getElementById('valor-a').value);
    let ValB = parseFloat(document.getElementById('valor-b').value);
    
    formValid = numbervalid(ValA, ValB);
    
    if (formValid){
        alert('Formulário válido')
    } else {
        alert('Formulário inválido')
    }    
})