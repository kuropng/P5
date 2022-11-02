fetch('http://localhost:3000/api/products')

.then (function(response) {

  if (response.ok) {
    console.log(response)
    return response.json()
  }

})

.then (function(data)  {
  pageProduits(data)
})

function pageProduits(canapes){
  const url = new URL(window.location.href)
  const id = url.searchParams.get("id");
  const arrayCanape = canapes.filter(produit => produit._id === id);
  const canape = arrayCanape[0]

  console.log(canape)

  const boxImg = document.querySelector('.item__img')
  const choiceColors = document.querySelector('#colors')

  let choice = document.createElement('option')
  let imgProduit = document.createElement('img')

  document.querySelector('#description').innerHTML = canape.description
  document.querySelector('#title').innerHTML = canape.name
  document.querySelector('#price').innerHTML = canape.price

  imgProduit.src = canape.imageUrl
  imgProduit.alt = canape.altTxt

  boxImg.appendChild(imgProduit)

  for (let i = 0; i < canape.colors.length; i++) {
    const color = canape.colors[i];

    let choice = document.createElement('option')
    choice.innerText = color;
    choice.value = color;

    choiceColors.appendChild(choice)
    
  }

  console.log(canapes)

}