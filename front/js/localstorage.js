class canape{
  constructor(id,name,color,price){
    this.id = id 
    this.name = name 
    this.color = color
    this.price = price  
  }
}

function saveBasket(canape){

  localStorage.setItem("canape", JSON.stringify(canape))

}

function getBasket() {
  let canape = localStorage.getItem("canape")
  if(canape == null){
    return [];
  }else{
    return JSON.parse(canape)
  }
}

function addBasket(product){
  let canape = getBasket();
  let foundProduct = canape.find(p => p.id == product.id)
  if (foundProduct != undefined) {
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    canape.push(product);
  }
  saveBasket(canape)
}
