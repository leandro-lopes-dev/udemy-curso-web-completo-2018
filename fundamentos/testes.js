function myFunc(){
    console.log(this);
}

var myFunc2 = function (){
    console.log(this);
}

myFunc();
myFunc2();