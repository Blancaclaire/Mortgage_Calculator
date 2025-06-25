document.addEventListener('DOMContentLoaded', function () {
    changeContent();

});


function changeContent() {
    const preview = document.getElementById('empty-result');
    const realResult = document.getElementById('real-result');
    const submitButtomn = document.getElementById('subB');
    const form = document.getElementById('mortgage-form');

    submitButtomn.addEventListener('click', function (event) {
        event.preventDefault();
        preview.classList.remove('active');
        realResult.classList.add('active');

        calculator();
        visibilityControl();

        // form.submit();
    });

}

function calculator() {


    const MortgageAmount = document.getElementById('mortgageAmount').value;
    console.log('La cantidad es ' + MortgageAmount);

    const MortgageTerm = document.getElementById('mortgageTerm').value;
    console.log('La cantidad es ' + MortgageTerm);

    try {
        const InterestRate = document.getElementById('mortgageInterest').value;
        console.log('La cantidad es ' + InterestRate);
    }

    catch {
        console.log(errorM)
    }
}


function visibilityControl() {


    const wrappers = document.querySelectorAll('.input-wrapper');

    wrappers.forEach(wrapper => {
        const input = wrapper.querySelector('input');
        const symbol = wrapper.querySelector('.input-symbol');
        const errorM = wrapper.querySelector('.errorMessaje');

        if (input.value.trim() === "") {
            symbol.classList.add('empty');
            input.classList.add('empty');
            errorM.classList.add('active');

        }
    });
    
    const InputType = document.querySelector('.mortgagetype:checked');
    if(!InputType){
        console.log('que pasooooo')
    }

}

