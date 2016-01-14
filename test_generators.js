"use strict";

function getFirst() {
    setTimeout(function(){
        gen.next('FIRST')
    }, 1000);
}

function getSecond() {
    setTimeout(function(){
        gen.next('SECOND')
    }, 4000);
}


function getThird() {
    setTimeout(function(){
        gen.next('THIRD')
    }, 1000);
}


function *testGenerator() {
    var a = yield getFirst();
    var b = yield getSecond();
    var c = yield getThird();
    
    console.log(a,b,c);

}

var gen = testGenerator();
gen.next();


console.log("TEST");