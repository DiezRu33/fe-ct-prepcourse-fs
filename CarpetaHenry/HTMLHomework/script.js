function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  // retorna palabras ordenadas (menor a mayor: longitud)
  let arregloString = [];
  let cuentaCaracteres = 0;

  arrayOfStrings.sort(( a, b) => b.length - a.length)

  console.log(arrayOfStrings)
}

sortArray((['You', 'are', 'beautiful', 'looking']))