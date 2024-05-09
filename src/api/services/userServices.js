/**
 * Calcula la edad media de los usuarios proporcionados.
 * @param {Array} users - Un array de objetos donde cada objeto representa un usuario y contiene una propiedad `birthDate`.
 * @returns {Number} La edad media de los usuarios, o 0 si no hay usuarios.
 */
function calculateAverageAge(users) {
  // Utiliza `reduce` para sumar las edades de todos los usuarios. Comienza con un total de 0.
  const totalAge = users.reduce((acc, user) => {
    // Convierte la fecha de nacimiento del usuario en un objeto `Date`.
    const birthDate = new Date(user.birthDate);
    // Calcula la edad del usuario como la diferencia entre el año actual y el año de nacimiento.
    const age = new Date().getFullYear() - birthDate.getFullYear();
    // Añade la edad del usuario actual al total acumulado.
    return acc + age;
  }, 0);
  
  // Calcula la edad media dividiendo el total de edades por el número de usuarios.
  // Retorna 0 si el array de usuarios está vacío para evitar la división por cero.
  return users.length > 0 ? totalAge / users.length : 0;
}

// Exporta la función `calculateAverageAge` para que pueda ser utilizada en otras partes de la aplicación.
module.exports = { calculateAverageAge };
