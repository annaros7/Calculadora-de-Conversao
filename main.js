function calcular() {
    var v1 = document.getElementById('valor1');
    var v2 = document.getElementById('valor2');
    var gerar = document.getElementById('gerador');
    var res = document.getElementById('res');
    var n1 = Number(v1.value);
    var n2 = Number(v2.value);

    var varFinal = (n1*1000)/n2;

    let varFinalArred = varFinal.toFixed(2)

    res.innerHTML = varFinalArred
}