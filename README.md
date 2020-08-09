### EVALUACIÓN FINAL MODULO 3 
### Guía de personajes de Rick y Morty.

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

## Partes del ejercicio.

# 1 Listado de personajes.
 
 Vamos a utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve
 información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:
 - Foto
 - Nombre
 - Especie

# 2 filtrado de los personajes.
 
 Consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. 

# 3 Componentes del listado de personajes
 
 El listado debe tener los siguientes componentes como mínimo:
 * Componente para los filtros
 * Componente para el listado
 * Componente para la tarjeta de cada personaje del listado
 * Componente para el detalle de cada personaje

# 4 Detalle de personajes

 Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información
 aparecerá a pantalla completa.
 En la pantalla de detalle
 aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que
 aparece y si está vivo o muerto.

# 5 Ultimos detalles.

 * Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se
   debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
 * El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o
   minúsculas.
 * Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el
   texto que tenía anteriormente
