var numeroCartao = prompt("Digite o número do seu cartão!");
document.getElementById("cartao").innerHTML = numeroCartao;

function inverteInput(string) {
  var numInverso = string.split("").reverse();
  var array = [];
  for (var i = 0; i < numInverso.length; i++) {
    array.push(parseInt(numInverso[i]));
  }
  return array;
}
console.log(cartaoValido(numeroCartao));

function multiplicaIndicesPares(arr) {
  for (var i = 1; i < arr.length; i += 2) {
    var resultado = arr[i] * 2;
    if (resultado >= 10) {
      arr[i] = resultado - 9;
    } else {
      arr[i] = resultado;
    }
  }
  return arr;
}
function cartaoValido(string) {
  var stringReversa = inverteInput(string);
  var indicesParesMultiplica = multiplicaIndicesPares(stringReversa);
  var somaTotal = somaArray(indicesParesMultiplica);
  if (somaTotal % 10 === 0) {
    return "CARTÃO VÁLIDO!";
  } else {
    return "CARTÃO INVÁLIDO!";
  }
}

function somaArray(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
