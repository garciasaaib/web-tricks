
import "./styles/styles.css";
console.log('verificando el hot module para recargar solo lo necesario y no toda la pagina');

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}