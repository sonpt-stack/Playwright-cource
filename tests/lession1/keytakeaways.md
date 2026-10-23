
## 1. Khái niệm về Biến (Variables)

* **Định nghĩa:** Biến đóng vai trò như một vùng nhớ (hoặc chiếc hộp chứa) dùng để lưu trữ dữ liệu tạm thời trong quá trình thực thi chương trình.
* **Ý nghĩa sử dụng:**
  * **Tái sử dụng:** Cho phép gọi lại dữ liệu nhiều lần thông qua tên biến.
  * **Dễ bảo trì:** Khi dữ liệu thay đổi, chỉ cần cập nhật ở một vị trí duy nhất khai báo biến.

---

## 2. Các từ khóa khai báo Biến

| Từ khóa | Đặc tính | Phạm vi & Trường hợp sử dụng |
| :--- | :--- | :--- |
| **`let`** | Có thể gán lại giá trị mới | Dùng cho các biến có giá trị thay đổi liên tục (ví dụ: biến đếm, tổng điểm). |
| **`const`** | Giá trị hằng số (không thể gán lại) | Dùng cho các giá trị cố định, không muốn thay đổi (ví dụ: URL API, cấu hình). |

---

## 3. Quy tắc đặt tên & Kiểu dữ liệu (Data Types)

* **Cú pháp đặt tên:** Ưu tiên chuẩn **`camelCase`** (chữ cái đầu viết thường, các từ tiếp theo viết hoa chữ cái đầu).
  * *Ví dụ:* `userName`, `totalPrice`, `isLoggedIn`.

* **Các kiểu dữ liệu cơ bản:**
  * **`number`**: Lưu trữ giá trị số (bao gồm cả số nguyên và số thực).
  * **`string`**: Chuỗi ký tự, đặt trong dấu ngoặc đơn `' '`, ngoặc kép `" "` hoặc template literal `` ` ``.
  * **`boolean`**: Kiểu logic, chỉ nhận 1 trong 2 giá trị: `true` hoặc `false`.

```typescript
// Khai báo chuẩn TypeScript đi kèm type annotation
const siteName: string = "Playwright Automation";
let totalRunCount: number = 10;
const isTestPassed: boolean = true;