function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  var es_par = Number.isSafeInteger(numero);
if(es_par == true) {
  return true;
} else {
  return false;
}

}

module.exports = esNumeroEntero;