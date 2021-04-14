import { registerImage, changesRegister } from "./lazy.js";

const addButton = document.getElementById("add");
const cleanButton = document.getElementById("clean");
const foxContainer = document.getElementById("foxContainer");

changesRegister(foxContainer)

addButton.addEventListener("click", () => {
  const newImage = createImage()
  foxContainer.append(newImage);
  registerImage(newImage)
});

cleanButton.addEventListener("click", () => {
  [...foxContainer.childNodes].forEach(item => foxContainer.removeChild(item))
})

const URL = (number) => `https://randomfox.ca/images/${number}.jpg`;
const random = (max = 122, min = 1) =>
  Math.round(Math.random() * (max - min)) + min;
const createImage = () => {
  const img = document.createElement("img");
  const div = document.createElement("div");
  img.dataset.src = URL(random());
  img.style.width = "200px"
  img.style.minHeight = "100px"
  img.className = "bg-gray-500 mx-auto mt-2";
  div.appendChild(img);
  return div
};
