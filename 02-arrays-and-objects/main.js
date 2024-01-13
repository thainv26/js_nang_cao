//01-array-basics
// let x;
// const numbers = [12, 45, 33, 29, 39, 102];
// const mixed = [12, 'Hello', true, null];
// const monsters = new Array('hero', 'god', 'magician');
// x = numbers[0];

// x = numbers[0] + numbers[3];

// x = `My favorite monsters is an ${monsters[2]}`;

// x = numbers.length;

// monsters[2] = 'blue eye';
// monsters[3] = 'cyber end';


// monsters[monsters.length] = 'osiris';
// monsters[monsters.length] = 'obelisk';
// monsters[monsters.length] = 'ra';

// x = monsters;

// console.log(x);



//02-array-methods
// let x;

// const arr = [20, 38, 100, 29, 900];

// push() - Đẩy một giá trị vào cuối mảng
// x = arr.push(800);

// pop() - Lấy giá trị cuối cùng ra khỏi mảng
// x=arr.pop();

// unshift() - Thêm một giá trị vào đầu của mảng
// x=arr.unshift(1000);

// shift() - Loại bỏ giá trị đầu tiên
// x=arr.shift();

// reverse() - Đảo ngược một mảng
// x=arr.reverse();

// includes() - Kiểm tra xem một giá trị có trong mảng hay không
// x = arr.includes(445);

// indexOf() - Trả về chỉ số của phần tử đầu tiên trùng khớp
// x = arr.indexOf(28);

// Trả về mảng dưới dạng chuỗi
// x = arr.toString();
// x = arr.join();

// slice() trả về các phần tử được chọn trong một mảng, dưới dạng một mảng mới. Slice nhận vào chỉ số của phần tử đầu tiên và chỉ số của phần tử cuối cùng để bao gồm trong mảng mới.
// x = arr.slice(1, 4);

// splice() hoạt động giống như slice() ngoại trừ nó nhận vào chỉ số của phần tử đầu tiên và số phần tử sau đó như một đối số thứ hai. Nó cũng làm thay đổi mảng gốc trong khi slice() không thay đổi.
// x = arr.splice(1, 4);

// Loại bỏ một phần tử/giá trị duy nhất - Các dòng sau đây sẽ làm thay đổi mảng gốc bằng cách loại bỏ phần tử có chỉ số là 4. x sẽ bằng một mảng mới với giá trị đó đã được loại bỏ.
// x = arr.splice(4, 2);

// Chaining methods - Một số phương thức có thể được liên kết (chained) tùy thuộc vào giá trị trả về.
// x = arr.slice(2, 6).reverse().toString().charAt(0);

// console.log(x);



//03-array-nesting-concat-spread
// let x;

// const spells = ['fireball', 'lightning bolt', 'healing'];
// const traps = ['pitfall', 'explosive trap', 'ice trap'];

// // Ghép mảng

// // Ghép mảng traps vào bên trong mảng spells
// spells.push(traps);

// // Bây giờ chúng ta có thể truy cập 'explosive trap' như sau
// x = spells[3][1];

// // Tạo một biến mới và nhóm cả hai mảng vào bên trong
// const allCards = [spells, traps];

// x = allCards[1][2];

// // concat() - Nối mảng
// x = spells.concat(traps);

// // spread operator (...) - Nối với
// x = [...spells, ...traps];

// // flat() - Làm phẳng một mảng
// const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
// x = arr.flat();

// // Các phương thức tĩnh của đối tượng Array

// // isArray() - Kiểm tra xem có phải là mảng hay không
// x = Array.isArray(spells);

// // from() - Tạo một mảng từ một giá trị giống như mảng
// x = Array.from('12345');

// // of() - Tạo một mảng từ một tập hợp các giá trị
// const card1 = 'Dark Magician';
// const card2 = 'Blue-Eyes White Dragon';
// const card3 = 'Red-Eyes Black Dragon';

// x = Array.of(card1, card2, card3);

// console.log(x);



//04-array-challenge
// Challenge 1

// const arr = [1, 2, 3, 4, 5];

// // Đảo ngược mảng, thêm số 9 vào đầu, và thêm số 0 vào cuối
// arr.unshift(9);
// arr.push(0);
// arr.reverse();

// console.log(arr);

// // Challenge 2

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// // Solution 1: Nối mảng arr1 và arr2, sau đó loại bỏ phần tử thứ 3
// const arr3 = arr1.slice(0, 2).concat(arr2);

// // Solution 2: Sử dụng spread operator để nối mảng, sau đó loại bỏ phần tử thứ 3
// const arr4 = [...arr1, ...arr2];
// arr4.splice(2, 1);

// console.log(arr4);



//05-object-literals
// let x;

// // Tạo một đối tượng
// const person = {
//   name: 'Phạm Hà',
//   age: 19,
//   isAdmin: true,
//   address: {
//     street: '123 Gamuda',
//     city: 'Hà Nội',
//     state: 'VN',
//   },
//   hobbies: ['reads', 'musics'],
// };

// // Truy cập các thuộc tính của đối tượng
// x = person.name; // Dùng dấu chấm
// x = person['age']; // Dùng dấu ngoặc vuông
// x = person.address.state;
// x = person.hobbies[0];

// // Cập nhật các thuộc tính
// person.name = 'Hà';
// person['isAdmin'] = false;

// // Xóa thuộc tính
// delete person.age;

// // Tạo thuộc tính mới
// person.hasChildren = true;

// // Thêm các hàm
// person.greet = function () {
//   console.log(`Xin chào, tôi tên là ${this.name}`);
// };

// person.greet();

// // Khóa với nhiều từ
// const person2 = {
//   'first name': 'Hà',
//   'last name': 'Phạm',
// };

// x = person2['first name'];

// console.log(x);



//06-object-spread-methods
// let result;

// // Create object using the object constructor
// const task = new Object();

// task.id = 1;
// task.name = 'Buy Milk';
// task.completed = false;

// result = task;

// // Object Nesting
// const person = {
//   address: {
//     coords: {
//       lat: 42.9384,
//       lng: -71.3232,
//     },
//   },
// };

// result = person.address.coords.lat;

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// // Spread operator
// const obj3 = { ...obj1, ...obj2 };
// // Equivalent to using ...
// const obj4 = Object.assign({}, obj1, obj2);

// // Array of objects
// const tasks = [
//   { id: 1, name: 'Buy Milk' },
//   { id: 2, name: 'Pickup kids from school' },
//   { id: 3, name: 'Take out trash' },
// ];

// result = tasks[0].name;

// // Get array of object keys
// result = Object.keys(task);

// // Get length of an object
// result = Object.keys(task).length;

// // Get array of object values
// result = Object.values(task);
// // Get array of object key/value pairs
// result = Object.entries(task);

// // Check if object has a property
// result = task.hasOwnProperty('age');

// console.log(result);



//07-destructuring-naming
// Đặt các thuộc tính của đối tượng với tên giống như một biến
// const firstName = 'Ha';
// const lastName = 'Pham';
// const age = 19;

// const person = {
//   firstName,
//   lastName,
//   age,
// };

// console.log(person.age);

// // Phân rã (Destructuring) các thuộc tính của đối tượng

// const todo = {
//   id: 1,
//   title: 'go to school',
//   user: {
//     name: 'Ha',
//   },
// };

// const {
//   id: todoId, //đổi tên ma thành todoId
//   title,
//   user: { name },  // phân rã cấp nhiều cấp
// } = todo;

// console.log(todoId);

// // Phân rã mảng và sử dụng toán tử rest/spread
// const numbers = [23, 67, 33, 49, 52];

// const [first, second, ...rest] = numbers;

// console.log(first, second, rest);



//08-json-intro
// const post = {
//     id: 1,
//     title: 'Post ',
//     body: 'This is the dogs',
//   };
  
//   // Convert to JSON string
//   const str = JSON.stringify(post);
  
//   console.log(str.id);
  
//   // Parse JSON
//   const obj = JSON.parse(str);
  
//   console.log(obj.id);
  
//   // JSON & arrays
//   const posts = [
//     {
//       id: 1,
//       title: 'Post One',
//       body: 'This is the cats',
//     },
//     {
//       id: 2,
//       title: 'Post Two',
//       body: 'This is the birds',
//     },
//   ];
  
//   const str2 = JSON.stringify(posts);
  
//   console.log(str2);


//09-object-challenge
// Step 1
// const library = [
//     {
//       title: 'The dark side of dimension',
//       author: 'yugioh',
//       status: {
//         own: true,
//         reading: false,
//         read: false,
//       },
//     },
//     {
//       title: 'GX',
//       author: 'yuki judai',
//       status: {
//         own: true,
//         reading: false,
//         read: false,
//       },
//     },
//     {
//       title: 'yugioh',
//       author: 'yami yugi',
//       status: {
//         own: true,
//         reading: false,
//         read: false,
//       },
//     },
//   ];
  
//   // Step 2
//   library[0].status.read = true;
//   library[1].status.read = true;
//   library[2].status.read = true;
  
//   // Step 3
//   const { title: firstBook } = library[0];
  
//   console.log(firstBook);
  
//   // Step 4
//   const libraryJSON = JSON.stringify(library);
  
//   console.log(libraryJSON);