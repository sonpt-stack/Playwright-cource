
// 1. Khai báo type cho giao dịch
type Transaction = {
  transactionId: string;
  amount: number;
  currency: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
};

// Khai báo mảng giao dịch
const transactions: Transaction[] = [
  { transactionId: 'TXN001', amount: 500000, currency: 'VND', status: 'SUCCESS' },
  { transactionId: 'TXN002', amount: 1500000, currency: 'VND', status: 'PENDING' },
  { transactionId: 'TXN003', amount: 50000, currency: 'VND', status: 'FAILED' },
  { transactionId: 'TXN004', amount: 2500000, currency: 'VND', status: 'SUCCESS' },
  { transactionId: 'TXN005', amount: 0, currency: 'USD', status: 'SUCCESS' },
];

// 2. Sử dụng console.log để in ra thông tin theo yêu cầu
console.log('--- BÀI 3 ---');

// Số lượng giao dịch
console.log('Số lượng giao dịch:', transactions.length);

// Giao dịch đầu tiên
console.log('Giao dịch đầu tiên:', transactions[0]);

// Mã giao dịch thứ 3
console.log('Mã giao dịch thứ 3:', transactions[2].transactionId);

// Trạng thái của giao dịch cuối
console.log('Trạng thái của giao dịch cuối:', transactions[transactions.length - 1].status);

// Tổng tiền của giao dịch 1 và giao dịch 2
const totalAmount1And2 = transactions[0].amount + transactions[1].amount;
console.log('Tổng tiền của giao dịch 1 và giao dịch 2:', totalAmount1And2);

console.log('\n--- BÀI 4 ---');

// 1. map lấy danh sách mã giao dịch -> ["TXN001", ..., "TXN005"]
const transactionIds = transactions.map((t) => t.transactionId);
console.log('Danh sách mã giao dịch:', transactionIds);

// 2. filter lấy các giao dịch SUCCESS
const successTransactions = transactions.filter((t) => t.status === 'SUCCESS');
console.log('Các giao dịch SUCCESS:', successTransactions);

// 3. Sử dụng cả filter và map để lấy ID của các giao dịch SUCCESS và có currency === "VND"
const successVndIds = transactions
  .filter((t) => t.status === 'SUCCESS' && t.currency === 'VND')
  .map((t) => t.transactionId);
console.log('ID các giao dịch SUCCESS và VND:', successVndIds);

// 4. Lấy giao dịch FAILED đầu tiên bằng filter(...) rồi in transactionId của nó -> TXN003
const failedTransactions = transactions.filter((t) => t.status === 'FAILED');
const firstFailedId = failedTransactions[0]?.transactionId;
console.log('Mã giao dịch FAILED đầu tiên:', firstFailedId);