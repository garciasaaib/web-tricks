import hs from "hyperscript";

const form = document.getElementById("form");
const weatherContainer = document.getElementById("weatherContainer");
const span = document.getElementById("message");

const apiKey =
  "11aa90a392ece6a8fcbd795a5c7280b2"; /** this should be in ENV_VARS */
const api = (cityName) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=metric`;
const icon = (iconId) => `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${iconId}.svg`
  
// const cardList = [...Object.values(weatherContainer).map()]
// const cardList = () => [...Object.values(weatherContainer.children).map(item => item.key)]
const cardList = []

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const inputText = e.target[0].value;
  if (!inputText) return validateMessage("empty");
  const apiURL = api(inputText);
  const response = await fetch(apiURL);
  const data = await response.json();
  if (data.cod == 200) {
    console.log(cardList);
    const idExists = cardList.includes(data.sys.id)
    if (idExists) return validateMessage("double")
    cardList.push(data.sys.id)
    const card = createCard(data);
    weatherContainer.append(card);
    e.target[0].value = "";
    return validateMessage("clean");
  } else {
    e.target[0].value = "";
    return validateMessage("notExists");
  }
});

const validateMessage = (command) => {
  const messages = {
    notExists: "We did't find that city 😀",
    empty: "It cant be empty 😐, try again",
    double: "This city is already in your desk 😅",
    clean: "",
  };
  span.textContent = messages[command];
};

const createCard = (data) => {
  const cardIcon = icon(data.weather[0].icon)
  const cardTemp = Math.round(data.main.temp)
  const card = hs(
    "div.card.bg-indigo-50.rounded-lg.p-6.py-10",
    hs("div.text-left.w-48.mb-3", 
      hs("h5.text-gray-500.inline", data.name), 
      hs("p.text-indigo-50.bg-yellow-500.rounded-full.text-xs.px-2.ml-2.inline.align-text-middle", data.sys.country)),
    hs("div.flex.mb-4", 
      hs("p.text-5xl.font-bold.text-gray-800", cardTemp ), 
      hs("span.text-2xl", "°C")),
    hs("img", { src: cardIcon }),
    hs("p.text-blue-900.text-base.text-left", data.weather[0].description.toUpperCase())
  );

  return card;
};
