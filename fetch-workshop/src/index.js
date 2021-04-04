/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Happy hacking :)");

const baseUrl = "https://platzi-avo.vercel.app";
const container = document.querySelector('#container')
container.className = 'flex flex-wrap justify-center '

/* web API intl: internasionalization
- format dates
- format money
*/
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-En', {
    style: 'currency', 
    currency: 'USD'
  }).format(price)
  return newPrice
}

/* web api
  conectarnos al servidor
  procesar la respuesta y convertirla en Json
  JSON -> Data -> Render in browser 
*/
window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then(responseJson => {
    const cards = []
    responseJson.data.forEach(item => {
      // crear titulo
      const title = document.createElement('h2')
      title.textContent = item.name
      title.className = "font-semibold"
      // title.style.fontSize = ""
      // title.className = 
      // crear imagen
      const image = document.createElement('img')
      image.src = `${baseUrl}${item.image}`
      image.className = "rounded-full m-2 w-auto "
      // crear precio      
      const price = document.createElement('label')
      price.textContent = formatPrice(item.price)
      price.className = 'text-gray-400 mb-2'
      // crear card
      const card = document.createElement('div')
      card.className = "card text-center rounded-md cursor-pointer shadow hover:bg-purple-300 flex justify-between flex-col w-40 m-2 hover:text-white hover:mb-1"
      card.append(image,title, price) 
      cards.push(card)
    })
    container.append(...cards)
  })