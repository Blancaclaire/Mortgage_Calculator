document.addEventListener('DOMContentLoaded', function(){
changeContent();

console.log('pasa algo o no?')
});


function changeContent() {
    const preview = document.getElementById('empty-result');
    const realResult = document.getElementById('real-result');
    const submitButtomn= document.getElementById('subB');

    submitButtomn.addEventListener('click', function(event){
        event.preventDefault();
        console.log('el boton sabe que algo pasa')
        preview.classList.remove('active');
        realResult.classList.add('active');
    });


}