function mod(n, m) {
    return ((n % m) + m) % m;
}

function getData(message, key, functionExecute, areaResult,textAreaReset,keyReset){
  
  var string = document.getElementById(message).value;
  var displacement = parseInt(document.getElementById(key).value);
  var result = functionExecute(string, displacement);
  
  document.getElementById(areaResult).value = result; 
  document.getElementById(textAreaReset).value = ""; 
  document.getElementById(keyReset).value = "";
}

function encode(string, offset){
    var result = "";
    let code = 0;
    let number = 0;

    for(let i = 0; i < string.length; i++){
         code = string.charCodeAt(i);
        if (code >= 65 && code <= 90){
            number = mod((code - 65 + offset), 26) + 65;
        } else if (code >= 97 && code <= 122){
            number = mod((code - 97 + offset), 26) + 97;
        }
        result += String.fromCharCode(number);
    }
    return result;
}

function decode(string, offset){
    
    var result = "";
    let code = 0;
    let number = 0;

    for(let i = 0; i < string.length; i++){
         code = string.charCodeAt(i);
        if (code >= 65 && code <= 90){
            number = mod((code - 65 - offset), 26) + 65;
        } else if (code >= 97 && code <= 122){
            number = mod((code - 97 - offset), 26) + 97;
        }
        result += String.fromCharCode(number);
    }
    return result;
}