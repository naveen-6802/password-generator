let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"], noNum = [];
    
let incn = document.querySelector("#incnum");
let pswdLen = document.querySelector("#length");
let pswd1 = document.querySelector(".pswd1");
let pswd2 = document.querySelector(".pswd2");

//Pushing all characters into new array noNum
for(let i=0; i < characters.length; i++) {
    noNum.push(characters[i]);    
}
//Removing numbers from noNum array
noNum.splice(noNum.indexOf("0"), 10);

//Generating random password
const genRandomPswd = () => {
    let num = Math.floor(Math.random() * characters.length);
    let nN = Math.floor(Math.random() * noNum.length);
    if (incn.checked === false) {
        return noNum[nN];
    }
    else {
        return characters[num];
    }
}

//Showing password to the user
function genPswd() {
    
    document.querySelector("#mCm").style.display = "none";
    //Empty password fields if they have some value already to show newly generated password
    if (pswd1.value !== "" && pswd2.value !== "") {
        pswd1.value = "";
        pswd2.value = "";
    }
    else {
    }
    //If password lenght is not set by user then display 8 letter length password by default
    if(pswdLen.value === "") {
        for (let i = 0; i < 8; i++) {
            pswd1.value += genRandomPswd();
            pswd2.value += genRandomPswd();
        }
    }
    //If password length is set by user then
    else {
        //If the set length is between 8 to 15 then generate password according to the set length
        if(pswdLen.value === "8" || pswdLen.value === "9" || pswdLen.value === "10" || pswdLen.value === "11" || pswdLen.value === "12" || pswdLen.value === "13" || pswdLen.value === "14" || pswdLen.value === "15" ) {
            for (let i = 0; i < pswdLen.value; i++) {
                pswd1.value += genRandomPswd();
                pswd2.value += genRandomPswd();
            }
        }
        //Else(if length is lower than 8 or upper than 15 or something undefined), then show error message
        else {
            document.querySelector("#mCm").style.display = "block";
            document.querySelector("#cpyMsg").style.color = "red";
            document.querySelector("#cpyMsg").innerHTML = "Length should be between 8 to 15 !";
            setTimeout(function(){
                document.getElementById('mCm').style.display = 'none';
                document.getElementById('cpyMsg').style.color = 'rgb(37,80,250)';
            }, 1000);
        }
    }
}

//Copying passwords to clipboard

let copy1 = document.querySelector(".ii1");
let copy2 = document.querySelector(".ii2");
let copyText1 = document.querySelector(".pswd1");
let copyText2 = document.querySelector(".pswd2");

function copyToClipboard(copyText) {

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 15); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  //showing copied message
  document.querySelector("#mCm").style.display = "block";
  if(copyText.value === '') {
      document.querySelector("#cpyMsg").style.color = "red";
      document.querySelector("#cpyMsg").innerHTML = "There is nothing to copy ツ"; 
      setTimeout(function(){
            document.getElementById('cpyMsg').style.color = 'rgb(37,80,250)';
      }, 700);    
  }
  else {
      document.querySelector("#cpyMsg").innerHTML = "Copied to clipboard !!";
  }
  return copyText;
};

copy1.addEventListener("click", function() {
  copyToClipboard(copyText1);
  setTimeout(function(){
    document.getElementById('mCm').style.display = 'none';
  }, 600);
});

copy2.addEventListener("click", function() {
  copyToClipboard(copyText2);
  //hiding copied message after 0.5s
  setTimeout(function(){
    document.getElementById('mCm').style.display = 'none';
  }, 600);
});
