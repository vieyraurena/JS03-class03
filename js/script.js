/**
 * Ejercicio #3:
 *
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 */

/*
  EJERCICIO A: --------------------------------------------
  
  Selecciona y console.log el <h3> que dice "Esto
  es una lista"
*/

const list = document.querySelector('h3');
console.log(list);

/*
  EJERCICIO B: --------------------------------------------
  
  Selecciona y loguea el primer y el ultimo elemento
  de la lista
*/

const item = document.querySelectorAll('li');
console.log(item[0]);
console.log(item[3]);

/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/
  
const email = document.getElementsByTagName('input');
console.log(email[2]);

/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/

const JavaScript = document.querySelectorAll('tr');
console.log(JavaScript[2]);

/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/

const css = document.getElementsByTagName('tr')
const itemCss =  document.getElementsByTagName('td');
console.log(itemCss[4]);