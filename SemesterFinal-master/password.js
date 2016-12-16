class Password{
  constructor(publickey,privatekey){
    this.pubkey = publickey;// string 8-25 chars
    this.privkey = privatekey;// 'XXXX-XXXX-XXXX'
  }
  validPublicKey(){
    if(this.pubkey.length <8){
      return false;
    }
    else if(this.pubkey.length >25){
      return false;
    }
    else{
      return true;
    }
  }
  validPrivateKey(){
    if(this.privkey.charAt(4) != '-' || this.privkey.charAt(9)!= '-'){
      return false;
    }
    else if(Number.isNaN(Number(this.privkey.substring(0,4)))){
      return false;
    }
    else if(Number.isNaN(Number(this.privkey.substring(5,9)))){
      return false;
    }
    else if(Number.isNaN(Number(this.privkey.substring(10,14)))){
      return false;
    }
    else{
      return true;
    }

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
  return key;
  }
}
