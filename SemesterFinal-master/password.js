class Password{
  constructor(publickey,privatekey){
    this.pubkey = publickey;// string 8-25 chars
    this.privkey = privatekey;// 'XXXX-XXXX-XXXX'
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
  }

  validPrivateKey(){
    
  }
  static makePrivateKey(){
    let key ='';
    let limit = 14;
    for(let a=0;a<limit;a++){
      if(a==4||a==9){
        key += '-';
      }
      else{
      key += String(Math.floor(Math.random()*10));
    }
  }
console.log(key);
  }
}
let wtf = new Password('aaaaaaaa','a234-1234-1234');
//Password.makePrivateKey();

wtf.validPrivateKey();
