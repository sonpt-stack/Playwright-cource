Markdown
# Cách thêm và xóa phần tử trong Mảng (TypeScript / JavaScript)

## 1. Thêm phần tử vào mảng
- **`push()`**: Thêm 1 hoặc nhiều phần tử vào **cuối** mảng.
- **`unshift()`**: Thêm 1 hoặc nhiều phần tử vào **đầu** mảng.
- **`splice()`**: Thêm phần tử vào **vị trí bất kỳ**.

```typescript
let numbers: number[] = [2, 3, 4];

// Thêm vào cuối
numbers.push(5); // [2, 3, 4, 5]

// Thêm vào đầu
numbers.unshift(1); // [1, 2, 3, 4, 5]

// Thêm vào vị trí index = 2 (không xóa phần tử nào)
numbers.splice(2, 0, 99); // [1, 2, 99, 3, 4, 5]

2. Xóa phần tử khỏi mảng
pop(): Xóa phần tử ở cuối mảng và trả về phần tử đó.

shift(): Xóa phần tử ở đầu mảng và trả về phần tử đó.

splice(): Xóa 1 hoặc nhiều phần tử ở vị trí bất kỳ.
let fruits: string[] = ["Apple", "Banana", "Cherry", "Date"];

// Xóa ở cuối
fruits.pop(); // ["Apple", "Banana", "Cherry"]

// Xóa ở đầu
fruits.shift(); // ["Banana", "Cherry"]

// Xóa 1 phần tử tại index = 1 ("Cherry")
fruits.splice(1, 1); // ["Banana"]