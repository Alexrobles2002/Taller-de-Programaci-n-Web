var monto = document.getElementById("monto");
var porcentaje = document.getElementById("porcentaje");
var btncalcular = document.getElementById("btn-Calcular");
var resultado = document.getElementById("resultado");
var pagoTotal = document.getElementById("pagoTotal");

function Calcular(){
    let porcentaje1 = parseFloat(porcentaje.value);
    porcentaje1 = porcentaje1/100
    let monto1 = parseFloat(monto.value);
    if (monto1 <= 0 || porcentaje1 > 1 || porcentaje1 < 0){
        resultado.textContent = 'Ingrese monto o porcentaje válido';
        pagoTotal.textContent = 'Ingrese monto o porcentaje valido';
    }else{
        let total = (monto1*porcentaje1)+ monto1;
    resultado.textContent = 'Propina a recibir: S/' + monto1*porcentaje1;
    pagoTotal.textContent = 'Total a pagar: S/'+ total;
}

}
btncalcular.addEventListener('click', Calcular);