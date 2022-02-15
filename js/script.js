function doMane(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return doMane();
    }
}
function generatePin(){
    document.getElementById('pinInput').value = doMane();
}
// Number check this and click 
document.getElementById('keyPade').addEventListener('click', function(event){
    const clickNumebr = event.target.innerText;
    const showInput = document.getElementById('showInput');
    if(isNaN(clickNumebr)){
        if(clickNumebr == 'C'){
            showInput.value = "";
        }
    }
    else{
        const showStore = showInput.value;
        showInput.value = showStore + clickNumebr;
    }
});
// Submit btn work 
document.getElementById('submit').addEventListener('click', function (){
    console.log("Successfull!");
});
