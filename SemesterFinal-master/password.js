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





  };
  validPrivateKey(){
    if(this.privkey.charAt(4) != '-' || this.privkey.charAt(9)!= '-'){
    false;
    console.log(false);
    console.log('Not correct format.');
  }
  };
    else if(){

    };
    else{
      true;
      console.log(true);
    };
  static makePrivateKey(){
    let key ='';
    let limit = 14;
    for(a=0;a<5;a++){
    key += 'Math.round(Math.random()*10)';
    }
    console.log(key);
  };
}
let wtf = new Password('aaaaaaaa','1234-1234-1234');
Password.makePrivateKey();
