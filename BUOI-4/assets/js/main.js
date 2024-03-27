//Khoi tao 1 object

// let user_1 = {};

// user_1.name = "Nguyen Van A";
// user_1.email = "a@gmail.com";

// console.log(user_1);

// let user_2 = {
//     name: "Nguyen Van B",
//     age: 20,
//     email: "b@gmail.com",
// }

// console.log(user_2);




// Truy cap vao phan tu cua Object

// let user_3 = {
//     name: "Nguyen Van C",
//     email: "nguyenvanc@gmail.com",
//     age: 20
// }

// // Nen dung cach nay
// console.log(user_3.name);
// console.log(user_3.email);
// console.log(user_3.age); 

// // Khong nen
// console.log(user_3["name"]);


// Gan gia tri cua thuoc tinh trong object

// let user_4 = {
//     name: "nguyenvanteo",
//     age: 25,
//     email: "teo@gmail.com",
// }
// user_4.name = "nguyen thi a";
// user_4.email = "nguyenthia@gmail.com";

// // Gan gia tri moi cua 1 thuoc tinh trong object
// user_4.address = "Hanoi";

// // Xoa 1 thuoc tinh trong object
// delete user_4.age;

// console.log(user_4);





// Phuong thuc lam viec voi array: map()

// let arrNumber = [1,2,3,4,5];

//value: gia tri phan tu
// index: chi so phan tu
// arrNumber.map((value, index) => {
//     console.log("Gia tri cua phan tu la", value);
//     console.log("Chi so cua phan tu la", index);
// })



// Phuong thuc filter trong array

// Cach truyen thong
// let oddNumber = [11,12,13,14,15,16];

// let result_1 = [];
// oddNumber.forEach((item, index) => {
//     // console.log(item);

//     if((item % 2) !=0) {
//         // console.log("Day la so le", item)

//         result_1.push(item);
//     }
// });

// console.log(result_1);

// Su dung filter()
// let oddNumber_2 = [11,12,13,14,15,16];

// const isOdd = oddNumber_2.filter((value, index) => {
//     // console.log("Gia tri cua cac phan tu trong mang: ", value);
//     // console.log("Chi so cua cac gia tri la: ", index);

//     return (value % 2) != 0; //Tra ve PT le
// });

// const isOdd = oddNumber_2.filter(value => (value % 2) != 0);

// console.log(isOdd);



// phuong thuc reduce()
// let number = [1,2,3,4,5];

// const result_2 = number.reduce((total, value) => {
//     console.log(total);
//     // console.log(value);
//     return total = total + value;
// }, 0);




// Phuong thuc find() + findIndex()
// let arr = [1,2,3,4,5,6,7];

// let result_4 = arr.findIndex((value, index)=> {
//     // console.log(value);

//     return value > 4
// });

// console.log(result_4);

// some() >< every()



// Vong lap trong object
let student = {
    name: "nguyen van a",
    age: 25,
    email: "nguyenvana@gmail.com",
    address: 'hanoi'
};

// let keys = Object.keys(student);

// console.log(keys);
// keys.forEach((value, index) => {
//     console.log(value);
//     console.log(index);

//     console.log(student[`${value}`]);
// })

for(const key in student) {
    // console.log(key);
    console.log(student[key]);
}