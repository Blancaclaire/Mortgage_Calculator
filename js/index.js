document.addEventListener('DOMContentLoaded', function(){
changeContent();

});


function changeContent() {
    const preview = document.getElementById('empty-result');
    const realResult = document.getElementById('real-result');
    const submitButtomn= document.getElementById('subB');
    const form =document.getElementById('mortgage-form');

    submitButtomn.addEventListener('click', function(event){
        event.preventDefault();
        preview.classList.remove('active');
        realResult.classList.add('active');

        calculator();


        // form.submit();
    });

}

function calculator(){

const MortgageAmount = document.getElementById('mortgageAmount').value;
console.log('La cantidad es ' + MortgageAmount);

const MortgageTerm= document.getElementById('mortgageTerm').value;
console.log('La cantidad es ' + MortgageTerm);

const InterestRate = document.getElementById('mortgageInterest').value;
console.log('La cantidad es ' + InterestRate);


const InputType = document.querySelector('.mortgagetype').value;
console.log('la cantidad es ' + InputType);

if(!MortgageAmount){
    alert('falta algo');
}

}