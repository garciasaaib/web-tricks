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