function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'tom';
// let user = [0 1, 2];
console.log(sayHello(user));
// 布尔
var isDone = false;
// 数值
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// 字符串
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ". I'll be " + (myAge + 1) + " years old next month.";
// 空值
function alertName() {
    alert('My name is Tom');
}
var unusable = undefined;
// null 和 undefined
var u = undefined;
var n = null;
var num = undefined;
var undef;
var nums = undef;
// 任意值
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
// 调用方法
var anyThing2 = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
// 未声明类型的变量
var something; // 等同于 let something: any
something = 'one';
something = 1;
something.setName('Tom');
// 类型推论
var myFavoriteNumber2 = 'seven'; // 等同于 let myFavoriteNumber2: string = 'seven'
// 联合类型
var sn;
sn = 's';
sn = 7;
// 当 ts 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问所有类型的共同属性
function getLen(something) {
    return something.length; // Property 'length' does not exist on type 'string | number'. Property 'length' does not exist on type 'number'.
}
var sn2;
sn2 = 'sn2';
console.log(sn2.length); // 5
sn2 = 7;
console.log(sn2.length);
