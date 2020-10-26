function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'tom';
// let user = [0 1, 2];
console.log(sayHello(user));

// 布尔
let isDone: boolean = false;

// 数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month.`;

// 空值
function alertName(): void {
    alert('My name is Tom');
}

let unusable: void = undefined;

// null 和 undefined
let u: undefined = undefined;
let n: null = null;

let num: number = undefined;
let undef: undefined;
let nums: number = undef;

// 任意值
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

// 调用方法
let anyThing2: any = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

// 未声明类型的变量
let something; // 等同于 let something: any
something = 'one';
something = 1;

something.setName('Tom');

// 类型推论
let myFavoriteNumber2 = 'seven'; // 等同于 let myFavoriteNumber2: string = 'seven'

// 联合类型
let sn: string | number;
sn = 's';
sn = 7;

// 当 ts 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问所有类型的共同属性
function getLen(something: string | number): number {
    return something.length; // Property 'length' does not exist on type 'string | number'. Property 'length' does not exist on type 'number'.
}

let sn2: string | number;
sn2 = 'sn2';
console.log(sn2.length); // 5
sn2 = 7;
console.log(sn2.length); // Property 'length' does not exist on type 'number'.

