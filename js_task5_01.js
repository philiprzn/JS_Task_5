calculator ={
    result : 0,
    add : function (num1, num2){
        return this.result += num1;
    },
    substract : function (num1, num2) {
        return this.result -= num1
    },
    divide : function (num1, num2) {
        return this.result /= num1
    },
    multiply : function (num1, num2) {
        return this.result *= num1
    },
    getResult : function () {
        return this.result;
    },
    reset : function () {
        return this.result = 0;
    },
};


// console.log(calculator.add(3));
calculator.add(4);
calculator.substract(1);
console.log(calculator.getResult());

// add : function (num1){
//         // return function (num2){
//         //     return this.result = num1 + num2
//         // };
//     return this.result += num1;
// },

// add : function (num1) {
//     return function (num) {
//         return this.result = num1 + num;
//     };
// },


//     var f = function (a,b){
//         return function(c){
//             return a+c;
//         }
//     }
//     var newF = f(2);
// newF(2); // 4

