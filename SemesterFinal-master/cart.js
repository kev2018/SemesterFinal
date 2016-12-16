class Cart{
  constructor(List,Quant){
    this.itemList = List;// array
    this.itemQuantity = Quant;// ditto
  }
  additem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalCart(){
    let total = 0;
    for(let c =0;c<this.itemList.length;c++){
      let item =(this.itemList[c].price)*this.itemQuantity[c];
        total += item;
        }
        return total;
  }
  subCart(d){
    let subcart = new Cart([],[]);
    for(let t=0;t<this.itemList.length;t++){
      if(this.itemList[t].shipping == d){
        subcart.push(this.itemList[t].name);
        subcart.push(this.itemQuantity[t]);
        }
      }
      return subcart;
    }
}
