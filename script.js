function calcPorcent() {
  var valorElemento = document.getElementById("valor");
  var valor = parseFloat(valorElemento.value);
  var valorPct = document.getElementById("pct");
  var pct = parseInt(valorPct.value);

  var valor1 = (1 - pct / 100) * valor;
  var valor2 = (pct / 100) * valor;

  var valorMeu = document.getElementById("valor1");
  var valorMeut = "Valor Meu: " + valor1;
  valorMeu.innerHTML = valorMeut;

  var valorDele = document.getElementById("valor2");
  var valorDelet = "Valor Dele: " + valor2;
  valorDele.innerHTML = valorDelet;
}