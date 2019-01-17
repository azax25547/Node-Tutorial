const sum = (n1,n2) =>n1+n2;


class SomeObject {
    constructor(){
        console.log('object created')
    }
}
//import single module
//module.exports = sum;

//import multiple functions
module.exports.sum = sum;
module.exports.PI = 3.14;
module.exports.SomeObject = SomeObject;
OR
/*
* module.exports = {
*   sum : sum,
*   PI : PI,
*   SomeObject = SomeObject
*   }
*/


