function check() {
    const num = document.getElementById("inp1").value;
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    for (let i = 0; i < arr.length; i++){
        let FIZZ = fizz(arr[i]);
        let BUZZ = buzz(arr[i]);
        let FizzBuzz = fizzbuzz(arr[i]);
        let number = arr[i]
        if (FIZZ == 1 && FizzBuzz != 1) {
            arr.splice(i, 1, "Fizz");
        }
        else if (BUZZ == 1 && FizzBuzz != 1) {
            arr.splice(i, 1, "Buzz");
        }
        else if (FizzBuzz == 1) {
            arr.splice(i, 1, "FizzBuzz");
        }
    }
    let str = "";
    let x =1;
        for(let i = 0 ; i<arr.length ; i++){
              str+=arr[i]+",";
              if(x==5){
                  str+="<br>";
                  x=0
              }
            x+=1;
        }
    let display = document.getElementById("text1");
    display.innerHTML = str;
    clrscr();
    rmv();
}

function fizz(x) {
    if (x % 3 == 0) {
        return 1;
    }
    else {
        return 0;
    }
}

function buzz(y) {
    if (y % 5 == 0) {
        return 1;
    }
    else {
        return 0;
    }
}


function fizzbuzz(z) {
    if (z % 3 == 0 && z % 5 == 0) {
        return 1;
    }
    else {
        return 0;
    }
}

function clrscr() {
    let x = document.getElementById("inp1");
    x.value = "";
}

function rmv(){
    let x = document.getElementById("inp1");
    x.remove();
    let y = document.getElementById("btn1");
    y.remove();
}