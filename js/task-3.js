class Storage {
    constructor(array) {
        this.items = array;
    }

    getItems = function () {
        return this.items;
    }
    addItem = function (item) {
        this.items.push(item);
    }
    removeItem = function (item) {
        const empty = [];
        for (const arg of this.items) {
            if (arg === item) continue;
            empty.push(arg);
        }
        this.items = empty;
        // if (this.items.includes(item) === true) {
        //     const removeIndex = this.items.indexOf(item);
        //     return this.items.splice(removeIndex, 1);
        // }
    }
}
const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// const Storage = function (array) {
//     this.items = array;
// }
// Storage.prototype.getItems = function () {
//     return this.items;
// }
// Storage.prototype.addItem = function (item) {
//     this.items.push(item);
// }
// Storage.prototype.removeItem = function (item) {
//     const removeIndex = this.items.indexOf(item);
// this.items.splice(removeIndex, 1);
// }
// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
// ]);
// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// console.log(items);

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]