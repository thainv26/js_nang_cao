// // Kiểu số
// console.log(100);

// // kiểu chữ
// console.log('Hello World');

// //hiện thị nhiều kiểu giá trị
// console.log(200,"hello world" , true);

// // khai báo
// const a=10;
// console.log(a);

// //hiện thị dạng lỗi
// console.error('alert');

// //hiện thị dạng cảnh báo
// console.warn(true);

// //hiện thị dạng bảng
// console.table({ name: 'Brad', email: 'brad@gmail.com' });

// // Nhóm bảng
// console.group('simple'); //start
// console.log('x');
// console.error('Alert');
// console.warn('Warning');
// console.groupEnd(); //end

// // Css vào log
// const styles = 'padding: 10px; background-color: white; color: green';
// console.log('%cHello World', styles);

////////////////////////////////////
// const first_name="thai";
// const last_name="nguyen";
// const age=20;
// const person={first_name,last_name,age};
// console.log(person);

///////////////////////////
// let x;

// //Thành 1 chuỗi
// x = 5 + '5';

// //cộng
// x = 5 + Number('6');

// //nhân
// x = 5 * '5';   
// // sai : x= 5 * 'a';

// // null không có giá trị => null = 0
// x = 5 + null;

// x = Number(null);

// //true = 1
// x = Number(true);

// //false = 0
// x = Number(false);


// // Undefined is coerced to 0 (falsy)
// x = 5 + undefined;

// console.log(x, typeof x);

//////////////////////////
// //khai báo
// const namee = 'John';
// const age = 31;

// // Nối chuỗi
// let x = 'Hello, my name is ' + namee + ' and I am ' + age + ' years old';
// console.log(x);

// const s = new String('Hello World');
// x=s.length;  //đến số lượng chữ
// console.log(x);

//////////////////////////////////
// const myString = 'hôm nay trời đẹp';
// // // charAt(0) lấy vị trí đầu tiên
// // // toUpperCase() in hoa 
// // // substring(1) lấy từ vị trí thứ 2

// // // cách 1
// // let myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// // //cách 2
// // let myNewString = myString[0].toUpperCase() + myString.substring(1);

// // cách 3
// let myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
// console.log(myNewString);

/////////////////////////////////////
// let x;
// const num =new Number (55);

// // x=num.toString()
// // x=num.toString().length;

// // x = num.toFixed(2); // KQ: 5.00
// // x = num.toExponential(3); //KQ: 5.000e+0
// // x = num.toLocaleString('en-US');

// // x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;
// console.log(x);

/////////////////////////////
// let d;
// d= new Date; //lấy date
// d=d.toString();

// // Chỉnh sửa date 
// d = new Date(2021, 0, 10, 12, 30, 0);
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');
// d = Date.now(); //lấy date hiện tại
// console.log(d);