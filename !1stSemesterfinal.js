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

  };
  totalCart(){
    let total = 0;

  };
  subCart(days){

  };
}

class Password{
  constructor(publickey,privatekey){
    this.pubkey = publickey;// string 8-25 chars
    this.privkey = privatekey;// 'XXXX-XXXX-XXXX'
    this.pubkey = '';
    this.privkey ='';

  }
  validPublicKey(){
    if(this.pubkey.length <8){
      //false;
      console.log(false);
    }
    else if(this.pubkey.length >25){
      //false;
      console.log(false);
    }
    else{
      //true;
      console.log(true);
    }
  };
  validPrivateKey(){
    if(this.privkey[4]!=String.fromCharCode(45) && this.privkey[9]!=String.fromCharCode(45)){
    //false;
    console.log(false);  //console.log('Not correct format.');
    }
    else if(Number.isInteger(this.privkey[0,1,2,3,5,6,7,8,10,11,12,13]) == false){
    //false;
    console.log(false); //console.log('Not correct format.');
    }
    else if(this.privkey.length >14){
      //false;
      console.log(false);
    }
    else{
      //true;
      console.log(true);
    }
  };
  static makePrivateKey(){
    let key ='';
    let limit = 14;
  };
}
let yo = new Password('aaaaaaaa','1234-1234-1234');
console.log(yo.validPrivateKey());
console.log(yo.validPublicKey());
