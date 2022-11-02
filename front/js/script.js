fetch('http://localhost:3000/api/products')

.then (function(response) {

  if (response.ok) {
    console.log(response)
    return response.json()
  }

})

.then (function (data) {
  afficheCanapes(data)
})

function afficheCanapes(canapes){
  const section = document.querySelector('#items')

  for (let i = 0; i < canapes.length; i++) {

    const canape = canapes[i];

    let link = document.createElement('a')
    let article = document.createElement('article')
    let img = document.createElement('img')
    let title = document.createElement('h3')
    let text = document.createElement('p')

    link.setAttribute('href',`./product.html?id=${canape._id}`)

    img.src = canape.imageUrl
    img.alt = canape.altTxt

    title.innerHTML = canape.name
    title.classList.add('productName')

    text.innerHTML = canape.description
    text.classList.add('productDescription')

    section.appendChild(link)
    link.appendChild(article)
    article.appendChild(img)
    article.appendChild(title)
    article.appendChild(text)
  } 
  console.log(canapes)
}

