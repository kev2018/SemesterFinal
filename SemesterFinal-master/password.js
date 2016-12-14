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
    //if(this.privkey.charAt(4) != '-' || this.privkey.charAt(9)!= '-'){
    //false;
    //console.log(false);
    //console.log('Not correct format.');
  };
    /*else if(Number.isInteger(this.privkey[0,1,2,3,5,6,7,8,10,11,12,13]) == false){
    //false;
    console.log(false);
    //console.log('Not correct format.');
    }

    }
    else{
      //true;
      console.log(true);
    }
  };
  static makePrivateKey(){
    let key ='';
    let limit = 14;
  };*/
}
let wtf = new Password('aaaaaaaa','1234-1234-1234');
//wtf.validPrivateKey();
//yo.validPublicKey();
this.privkey.charAt(4);
