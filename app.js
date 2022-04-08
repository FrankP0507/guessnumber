let userNum = document.getElementById("getNumber");
userNum.addEventListener("Keydown", function (e) {
    if (e.keyCode == 13) {
        run(e);
    }
});

userNum.focus();

function run() {
    document.getElementById("paragraph").innerHTML = "Hello world!";
    document.getElementById("paragraph").style.backgroundColor = "grey";
    document.getElementById("paragraph").style.color = "green";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumber();
    compareNumbers();
}


function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "grey";
    x.style.color = "green";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;
}


function userNumber() {
   let user = document.getElementById("getNumber").value;
   let y = document.getElementById("userNumber");
   y.innerHTML = user;
   y.style.color = "green";
   y.style.backgroundColor = "grey";
   y.style.padding = "20px"
   y.style.textAlign = "center";
   return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    if ( a!= b ) {
        z.innerHTML = "Numbers are not the same. Computer got" + b + " ,and user got " + a;
        z.style.color = "green";
        z.style.backgroundColor = "grey";
        z.style.padding = "20px"
        z.style.textAlign = "center";
    }else if (a == b) {
        z.innerHTML = "Numbers are the same. Computer got " + b + " ,and user got " + a;
        z.style.color = "green";
        z.style.backgroundColor = "grey";
        z.style.padding = "20px"
        z.style.textAlign = "center";
    }

} 