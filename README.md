### Listas Fáciles
Para hacer unas listas faciles solo nececitamos crear el tag <details> que contenga todo el <ol>, en caso que tenga un titulo deberia estar dentro del tag <summary>.

<details open>
	<summary>
		INSTALACIÓN
	</summary>
	<ol>
		<li>Empezando</li>
		<li>Agregar React a un sitio web</li>
		<li>Crear una nueva aplicación React</li>
		<li>CDN Links</li>
		<li>Canales de lanzamientos</li>
	</ol>
</details>


### Intersection Observer (que el elemento actue cuando este visible)
Es un ejercicio en el que uno permite reproducir un contenido cuando el usuario accede a el mediante scroll, y este pase las reglas para que se desencadene, para ello solo necesitas lo siquiente en un tag <video id="video"/>

<script>
//obtener el tag multimedia
const $video = document.querySelector('#video')
//establecer las reglas
const observerConfig = {
      //root:, //tamaño del viewer
      rootMargin: '0px 0px 0px 0px', //anteponerse al video
      threshold: 1 //% del video dentro de lo visto
    }
//declarar la accion que quieres al activar o desactivar
function callbackObserver(entries, observer) {
      //console.log("se llamo al callback")
      //entries son los datos que obtenemos del video
      //isIntersecting es un estado en el que sabemos si la config se cumple o no
      if (entries[0].isIntersecting) {
        $video.play()
      } else {
        $video.pause()
      }
    }
//obtener una constante ejecutable donde tengas tu callback y tus reglas
    const observerObject = new IntersectionObserver(callbackObserver, observerConfig) //hereda del observer
//declarar que es lo que quieres observar
    observerObject.observe($video)


</script>

### Web Share Api
Es la actividad de 'navigation' que te permite compartir algunas cosas de manera movil

Para poder usarlo debe ser usado en un navegador movil, debe estar en un servidor, puede ser con LiveServer, y debe ser sostenido por medio de un tunel que puede ser ngrok.

Una vez tengas todo lo anterior lo que debes hacer es intentarlo mediante tu navegador.

### fetch
https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch

Fetch es una manera de hacer peticiones pero no es la unica, era mi faborita por lo simple, pero resulta que se le puede agregar complegidad dependiendo de los headers que requiera la api a la que deseas acceder, y aun mas complegidad con el manejo de errores, pero sigue siendo mi faborita.

<script>
// los headers son para autorizar el obtener los datos
/*fetch('url', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'asdasdas': 'asdasds'
      }
    })

    fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'asdasdas': 'asdasds'
      },
      body: JSON.stringify({
        name: 'adrian',
        age: 28
      })
    })*/
</script>


### Promesas
Las promesas nos permiten trabajar de manera asincrona, lo que pasa es que todas las funciones sincronas se corren al principio, despues siguen las asincronas, y se obtiene su resultado cuando ellas pues lo tengan, a veces se tardan un poco. 

La idea de las promesas es saber cuando termina una funcion y poder declarar el siguiente paso o poder esperar a algo para hacer lo siguiente. La manera de declarar que acabo la promesa es con resolve y reject, resolve es cuando termina bien  y reject es cuando obtenemos un error.


<script>
  function buy(thingToBuy, time = 2000) { // funcion
    return new Promise((resolve, reject) => { // Promesa
      setTimeout(() => {  //delay
        renderMessage(`${thingToBuy} ✅`) //contenido de la funcion
        resolve(`${thingToBuy} ✅`)
      }, time) // seteando el tiempo
    })
  }

  buy('hola') //de esta manera corremos la promesa
  .then(data => console.log('hola')) // de esta manera podemos esperar hasta que termine la funcion y haga esto
</script>



### Async Await