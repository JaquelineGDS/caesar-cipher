window.cipher = {
  

function mod(n, p){
    if ( n < 0 )
        n = p - Math.abs(n) % p;

    return n % p;
}

function getencode(){
  
  let message = document.getElementById('Tareacodemessage').value;
  let displacement = parseInt(document.getElementById('key1').value);
  
  var resultEncode = encode(message, displacement);

  document.getElementById('Tareadecodemessage').value = resultEncode; 

}

function encode(string, offset){
    var result = "";
    let code = 0;

    for(let i = 0; i < string.length; i++){
         code = string.charCodeAt(i);

        if (code >= 65 && code <= 65 + 26){
            code -= 65;
            code = mod(code + offset, 26);
            code += 65;
        } else if (code >= 97 && code <= 97 + 26){
            code -= 97;
            code = mod(code + offset, 26);
            code += 97;
        }

        result += String.fromCharCode(code);
    }

    return result;
}

function getdecode(){
  
  let message = document.getElementById('Tareadecodemessage').value;
  let displacement = parseInt(document.getElementById('key2').value);
 
  var resultDecode = decode(message, displacement);

  document.getElementById('Tareacodemessage').value = resultDecode; 

}

function decode(string, offset){
    var result = "";
    let code = 0;

    for(let i = 0; i < string.length; i++){
         code = string.charCodeAt(i);

        if (code >= 65 && code <= 65 + 26){
            code -= 65;
            code = mod(code - offset, 26);
            code += 65;
        } else if (code >= 97 && code <= 97 + 26){
            code -= 97;
            code = mod(code - offset, 26);
            code += 97;
        }

        result += String.fromCharCode(code);
    }

    return result;
}




 
};
