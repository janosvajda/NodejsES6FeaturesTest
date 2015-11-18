var firstPromise = function () {
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('First completed.');
        resolve({result: '123'});
    }, 1000);
});
return promise;
};

var secondPromise = function (param1) {
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Second completed. Parameter: ', param1);
        resolve({result: 'from second'});
    }, 1000);
});
return promise;
};

var thirdPromise = function (param1) {
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Third completed. Parameter:', param1);
        resolve({result: 'THIRD'});
    }, 1000);
});
return promise;
};

firstPromise()
.then(secondPromise)
.then(thirdPromise).then(
function (param1) {
    console.log("Third resolved: ", param1);
}
);