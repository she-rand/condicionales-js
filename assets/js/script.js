const imagenBorde = document.querySelector("#imagenBorde");
const botonVerificar = document.querySelector("#botonVerificar");
const selector1 = document.querySelector("#selector1");
const selector2 = document.querySelector("#selector2");
const selector3 = document.querySelector("#selector3");
let contadorClicks=0;


console.log(imagenBorde.style.border);
imagenBorde.addEventListener("click", () => {
    contadorClicks=contadorClicks+1;
    if(contadorClicks%2==1){
        imagenBorde.style.border='thin solid red'

    }else{
        imagenBorde.style.border='thin solid white'


    }
});
botonVerificar.addEventListener("click", () => {

    let num1=parseInt(stickCant1.value)
    let num2=parseInt(stickCant2.value)
    let num3=parseInt(stickCant3.value)
    if(isNaN(num1)||isNaN(num2)||isNaN(num3)){
        resultadoStickers.textContent="Debe haber un número en cada input";
        return;
    }
    let total=num1+num2+num3;
    if(total>10){
        resultadoStickers.textContent="Demasiados stickers";

    }else{
        resultadoStickers.textContent=`La cantidad de stickers seleccionados es ${total}`;


    }


});


botonPassword.addEventListener("click", () => {

    let numSel1=selector1.value
    let numSel2=selector2.value
    let numSel3=selector3.value
    
    let password=numSel1+numSel2+numSel3;

    if(password==="911"){
        resultadoPassword.textContent="Password 1 correcto";

    }else if (password==="714") {
        resultadoPassword.textContent="Password 2 correcto";


    }else{
        resultadoPassword.textContent="Password incorrecto";


    }


});


