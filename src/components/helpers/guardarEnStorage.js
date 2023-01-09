export const guardarEnStorage = (clave, elemento) => {
  //obtener los elementos que ya estan en localStorage
  let elementos = JSON.parse(localStorage.getItem(clave));
  //comprobar sin es un array
  if (Array.isArray(elementos)) {
    //añadir dentro del array un elemento nuevo
    elementos.push(elemento);
  } else {
    //crear un array con la nueva peli
    elementos = [elemento];
  }
  //guardar en el localStorage
  localStorage.setItem(clave, JSON.stringify(elementos));
  //devolver objeo guardado
  return elemento;
};
