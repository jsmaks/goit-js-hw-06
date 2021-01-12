
class StringBuilder {

    constructor(array) {
        this._value = array;
    }
    get value() {
        return this._value;
    }
    append = function (str) {
        return this._value += str;
    }
    prepend = function (str) {
        this._value = str + this.value
        return this.value;
    }
    pad = function (str) {
        this.append(str);
        this.prepend(str);
        return (this.value);
    }
}

const builder = new StringBuilder('.');

console.log(builder.value);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

/////////////////////////////////////////////////////////////////////////
// const StringBuilder = function (array) {
//     this.value = array;
// }
// StringBuilder.prototype.getValue = function () {
//     return this.value;
// }
// StringBuilder.prototype.append = function (str) {

//     return this.value += str;
// }
// StringBuilder.prototype.prepend = function (str) {
//     this.value = str + this.value
//     return this.value;
// }
// StringBuilder.prototype.pad = function (str) {
//     this.append(str);
//     this.prepend(str);
//     return (this.value);
// }


// const builder = new StringBuilder('.');
// console.log(builder);

// const values = builder.getValue();
// console.table(values);

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
////////////////////////////////////////////////////////////////////