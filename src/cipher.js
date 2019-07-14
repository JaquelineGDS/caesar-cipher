document.querySelector('.btn-encode').addEventListener('click', () => controllerFunctions(encode));
document.querySelector('.btn-decode').addEventListener('click', () => controllerFunctions(decode));

const controllerFunctions = (functionExecute) => {
    const text = document.querySelector('.text').value;
    const offset = parseInt(document.querySelector('.offset').value);
    clear();
    const result = functionExecute(text, offset);
    document.querySelector('.text').value = result;
}

const mod = (n, m) => {
    return ((n % m) + m) % m;
}

const encode = (string, offset) => {
    let result = [];
    let number = 0;
    for (let i in string) {
       let ascCode = string.charCodeAt(i);
        if (ascCode >= 65 && ascCode <= 90) {
            number = mod((ascCode - 65 + offset), 26) + 65;
        } else if (ascCode >= 97 && ascCode <= 122) {
            number = mod((ascCode - 97 + offset), 26) + 97;
        } else{
            number = ascCode;
        }
        result.push(String.fromCharCode(number));
    }
    return result.join("");
}

const decode = (string, offset) => {
    let result = [];
    let number = 0;
    for (let i in string) {
       let ascCode = string.charCodeAt(i);
        if (ascCode >= 65 && ascCode <= 90) {
            number = mod((ascCode - 65 - offset), 26) + 65;
        } else if (ascCode >= 97 && ascCode <= 122) {
            number = mod((ascCode - 97 - offset), 26) + 97;
        } else{
            number = ascCode;
        }
        result.push(String.fromCharCode(number));
    }
    return result.join("");
}

const clear = () => {
    document.querySelector('.text').value = "";
    document.querySelector('.offset').value = "";
}