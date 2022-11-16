class canape{
  constructor(id,name,color,price){
    this.id = id 
    this.name = name 
    this.color = color
    this.price = price  
  }
}

function saveBasket(canapes){

  localStorage.setItem("canapes", JSON.stringify(canapes))

}

function getBasket() {
  let canapes = localStorage.getItem("canapes")
  if(!canapes){
    return [];
  }else{
    return JSON.parse(canapes)
  }
}

function addBasket(product){
  let canapes = getBasket();
  let foundProduct = canapes.find(p => p.id === product.id && p.colors === product.colors)
  if (foundProduct != undefined) {
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    canapes.push(product);
  }
  saveBasket(canapes)
}

function removeFromBasket(product){
  let canapes = getBasket();
  
}
