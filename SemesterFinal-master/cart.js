class Item{
  constructor(name,price,shipping){
    this.name = name;
    this.price = price;
    this.shipping = shipping;
  }
}

let hotwheels = new Item('hotwheels',4,2);
let Nerf = new Item('Nerf',10,4);
let Pants = new Item('Pants',15,1);


class Cart{
  constructor(List,Quant){
    this.itemList = List;// array
    this.itemQuantity = Quant;// ditto
    this.itemList = [];
    this.itemQuantity = [];
  };
  additem(i,q){
this.itemList.push(i);
this.itemQuantity.push(q);
  };
  totalCart(){
    let total = 0;
for(let c =0;c<this.itemList.length;c++){
let item =this.itemList[c].price;
total = total + item;
//return total;
console.log(total);
}
  };
  subCart(days){

  };
}
let amazon = new Cart(Nerf,1);
//amazon.additem(hotwheels,2);
amazon.totalCart();
