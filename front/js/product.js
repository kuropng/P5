let canap = null
const choiceColors = document.querySelector('#colors')
const choiceQuantity = document.querySelector('#quantity')
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
  canap = arrayCanape[0]

  console.log(canap)

  const boxImg = document.querySelector('.item__img')
  const choiceColors = document.querySelector('#colors')

  let choice = document.createElement('option')
  let imgProduit = document.createElement('img')

  document.querySelector('#description').innerHTML = canap.description
  document.querySelector('#title').innerHTML = canap.name
  document.querySelector('#price').innerHTML = canap.price

  imgProduit.src = canap.imageUrl
  imgProduit.alt = canap.altTxt

  boxImg.appendChild(imgProduit)

  for (let i = 0; i < canap.colors.length; i++) {
    const color = canap.colors[i];

    let choice = document.createElement('option')
    choice.innerText = color;
    choice.value = color;

    choiceColors.appendChild(choice)
    
  }

  const btn = document.querySelector('#addToCart')

  
  btn.addEventListener('click', addLocalStorage)

  console.log(canapes)

}

const addLocalStorage = (event) => {
  const canapLs = window.localStorage.getItem('Basket')
  let canapeBasket = canap;
  canapeBasket.color = choiceColors.value;
  canapeBasket.quantity = choiceQuantity.value;

  console.log(canapLs)

  
  // si il n'y a pas de canapé j'en crée un 
  if (canapLs === null){
    const insertInLs = [canapeBasket]
    window.localStorage.setItem('Basket', JSON.stringify(insertInLs))
  } 
  // si il y a un déjà un canapé , si il est différent on en met un autre dans le tableau 
   else{
    const insertInLs = JSON.parse(localStorage.getItem('Basket'));
    insertInLs.push(canapeBasket)
    window.localStorage.setItem('Basket', JSON.stringify(insertInLs))
  }

  // let foundProduct = canapes.find(p => p.id === product.id && p.colors === product.colors)
  // if (foundProduct != undefined) {
  //   foundProduct.quantity++;
  // } else {
  //   product.quantity = 1;
  //   canapes.push(product);
  // }
  console.log(canapeBasket)
}