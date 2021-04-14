const isIntersecting = (entry) => entry.isIntersecting; // API: dentro de la pantalla
const loadImage = (entry) => {
  const nodo = entry.target; // identifica el nodo donde existe
  const img = entry.target.firstChild; // obteniendo el nodo img dentro del div
  img.src = img.dataset.src; // asignando el atributo
  updateConsole();
  intersectionObserver.unobserve(nodo);
};

/** Define & Create IntersectionObserver */
const intersectionObserver = new IntersectionObserver((elementArray) => {
  elementArray // de todos los elementos
    .filter(isIntersecting) // filtra los que tengan esta propiedad
    .forEach(loadImage); // del resultado ejecuta lo siguiente
});
export const registerImage = (image) => {
  intersectionObserver.observe(image); // observa la imagen y la retorna
};

/** Define & Create MutationObserver */
const mutationObserver = new MutationObserver(() => updateConsole());
export const changesRegister = (container) => {
  mutationObserver.observe(container, {
    attributes: false,
    childList: true,
    subtree: false,
  });
};

/** Update consola */
const updateConsole = () => {
  const creadas = foxContainer.childElementCount;
  const cargadas = [...foxContainer.children].filter((item) =>
    item.children[0].hasAttribute("src")
  ).length;
  console.log(`------------------------------`);
  console.log(`🦊 Total imagenes: ${creadas}`);
  console.log(`👀 Imagenes cargadas: ${cargadas}`);
};
