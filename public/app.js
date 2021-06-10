var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// lesson 18 generics
// wrong way of adding Generics...
var addUID = function (obj) { return (__assign(__assign({}, obj), { uid: Math.floor(Math.random() * 100000) })); };
console.log(addUID({ name: 'yoshi' }));
console.log(addUID({ name: 'mario', fighter: true }));
console.log(addUID(['a', true]));
// ...because
var notWorking = addUID({ name: 'a', age: 49 });
// console.log(notWorking.name); // error TS2339: Property 'name' does not exist on type '{ uid: number; }'.
// correct generic
var addUIDright = function (obj) { return (__assign(__assign({}, obj), { uid: Math.floor(Math.random() * 100000) })); };
var working = addUIDright({ name: '10', win: true });
console.log(working.name);
var res1 = {
    uid: 1,
    resourceName: 'person',
    data: 'string'
};
var res2 = {
    uid: 2,
    resourceName: 'shopping list',
    data: ['test']
};
console.log(res1);
console.log(res2);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var res21 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'Game of Thorns' }
};
var res22 = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: 'Mike'
};
console.log(res21);
console.log(res22);
// tuples
var arr = ['ruy', 25, true];
console.log(arr);
arr[0] = false;
console.log(arr);
arr[1] = 'yoshi';
console.log(arr);
arr = [65, 54.3, 'giygas'];
var tup = ['ryu', 25, true];
tup[0] = 'ken';
console.log(tup);
// app
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from "./classes/ListTemplate.js";
var form = document.querySelector('.new-item-form'); // as operator is assuring, that the variable is not null
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var values = [tofrom.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values)))();
    }
    list.render(doc, type.value, 'end');
});
