## 1. Kiểu dữ liệu cơ bản & Union Types
// // let name: string = 'sonpt';
// // let age: number = 28;

// // let name2: string = "sonpt2";
// // let age2: number = 30;

// // console.log(name, name2);

// // let person1 = { name: "sonpt", age: 32, address: "hanoi" };

// // type Person = {
// //   name: string;
// //   age: number;
// //   address: string;
// // };
## 2. Định nghĩa Object với type
// //object có nhiều thuộc tính, có thể dùng type để định nghĩa kiểu dữ liệu cho object
// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };
## 3. Mảng (Array) & Mảng chứa Object
// type gender = "male" | "female";

// let gender:gender = "male";

// const person2: Person = {
//   name: "sonpt",
//   age: 32,
//   address: "hanoi"
// };    

// array: mảng có nhiều phần tử, có thể dùng type để định nghĩa kiểu dữ liệu cho array

// listTransacrtion bao gồm nhiều phần tử, mỗi phần tử là một object có 3 thuộc tính: id, amount, type

// type Transaction = {
//   transid: number;
//   transactionAmount: number;
//   transactionType: string;
// };


// let TonghopTransaction: Transaction[] = [
//   {
//     transid: 1,
//     transactionAmount: 100,
//     transactionType: "credit"},
//   {
//     transid: 2,
//     transactionAmount: 200,
//     transactionType: "debit"},]

// console.log(TonghopTransaction[0].transactionAmount);


// type Transaction = {
//     transId: string;
//     amount: number;
//     createDate: string;
//     transRef: string;
//     contractType: string;
// };
// let multipleTransactions: Transaction[] = [
//     {
//         transId: "123456",
//         amount: 100.50, 
//         createDate: "20/06/2026",
//         transRef: "ABC123",
//         contractType: "3B",
//     },
//     {
//         transId: "789012",
//         amount: 250.75,
//         createDate: "25/06/2026",
//         transRef: "XYZ789",
//         contractType: "3B",
//     }
// ]

// console.log(multipleTransactions);

## 4.Các hàm xử lý Mảng thông dụng: Hàm filter và map

// filter: lọc ra các phần tử thỏa mãn điều kiện
// map: tạo ra một mảng mới từ mảng cũ, có thể thay đổi giá trị của các phần tử trong mảng mới

// const meetings:string[] = ["nguoi1", "nguoi2", "nguoi3", "nguoi4"];

// let testArray = meetings.filter(name => name !== "nguoi2");

// console.log(testArray);

// let newArray = meetings.map(name  => name.toUpperCase());



// - kiểu dữ liệu object
// - type ( định nghĩa dữ liệu có hoặc không thêm dấu ?)
// - array và cách truy vấn



// Khai báo các biến cho một giao dịch, ghi rõ kiểu:

## 5. Bài tập áp dụng

// const transactionId: string = "TXN001";
// const amount: number = 500000;
// const currency: string = "VND";
// const status: string = "SUCCESS";


// // Giá trị: TXN001, 500000, VND, SUCCESS.

// console.log(`transaction ${transactionId}: ${amount} ${currency} ${status}`);

// Bai 2:

type PaymentData = {
  transactionId: string;
  amount: number;
  currency: string;
  status: string;
};

const payment1: PaymentData = {
  transactionId: "TXN001",
  amount: 500000,
  currency: "VND",
  status: "SUCCESS",
};

console.log(payment1.transactionId,    payment1.amount, payment1.currency, payment1.status);

console.log(`giaodich ${payment1.transactionId}: ${payment1.amount} ${payment1.currency} ${payment1.status}`);

