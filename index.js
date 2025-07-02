document.addEventListener('DOMContentLoaded', function () {
    changeContent();

    const MortgageAmount = document.getElementById('mortgageAmount');


});


function changeContent() {

    const submitButtomn = document.getElementById('subB');
    const ClearAllButton = document.querySelector('.clear');
    const form = document.getElementById('mortgage-form');

    submitButtomn.addEventListener('click', function (event) {
        event.preventDefault();

        visibilityControl();
        calculator();

    });

    ClearAllButton.addEventListener('click', function () {
        form.submit();
    })


}



function calculator() {

    const MortgageAmount = document.getElementById('mortgageAmount').value;
    const MortgageTerm = document.getElementById('mortgageTerm').value;
    const InterestRate = document.getElementById('mortgageInterest').value;
    const MortgageType = document.querySelector('.mortgagetype:checked');




    if (MortgageType && MortgageAmount && MortgageTerm && InterestRate) {

        //Cambia Result en caso de que esten todos los datos
        const preview = document.getElementById('empty-result');
        const realResult = document.getElementById('real-result');

        preview.classList.remove('active');
        realResult.classList.add('active');

        //Declaracion de variables
        let P = Number(MortgageAmount);//Cantidad del prestamo
        let r = (Number(InterestRate / 100) / 12);//Interes mensual
        let n = Number(MortgageTerm * 12);//numero total de pagos
        let M; //Pago Mensual 
        let T; //Total a pagar durante el plazo

        if (MortgageType.value.trim() === "Repayment") {
            if (r === 0) {
                // Caso especial: sin interés
                M = P / n;
                T = P;
            }
            else {
                M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
                T = M * n;
                console.log('El pago mensual es : ' + M.toFixed(2));
                console.log('El total es : ' + T.toFixed(2));
            }
        }
        else {
            //Interest Only
            M = P * r;
            T = (M * n) + P;
            console.log('El pago mensual es : ' + M.toFixed(2));
            console.log('El total es : ' + T.toFixed(2));
        }


        showResults(M, T);

    }

    else {
        console.warn('falta algun input en el DOM');
    }
};

function showResults(M, T) {

    let Month = document.querySelector('.monthly');

    Month.innerHTML = `
        <p class="result-subtitle">
        Your monthly repayments
        </p>
        <span class="coin">£</span>
        <span class="quantity"=>${M.toFixed(2)}</span>
    `

    let total = document.querySelector('.total');
    total.innerHTML = `
        <p class="result-subtitle">
        Total you´ll repay over the term
         </p>
        <span class="coin">£</span>
        <span class="quantity">${T.toFixed(2)}</span>`

};


function visibilityControl() {

    let isCompleted = true;
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
        else {
            symbol.classList.remove('empty');
            input.classList.remove('empty');
            errorM.classList.remove('active');
        }


    });


    // input MortgageType
    const InputType = document.querySelector('.mortgagetype:checked');
    const Mortgagetype = document.querySelector('.MortgageType');
    const errorMT = Mortgagetype.querySelector('.errorMessaje');
    if (!InputType) {
        errorMT.classList.add('active');
    }
    else {
        errorMT.classList.remove('active');
    }
}
