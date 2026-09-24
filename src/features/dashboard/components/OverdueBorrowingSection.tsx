type OverdueBorrowing = {
  id: string;
  borrower: string;
  itemName: string;
  borrowDate: string;
  dueDate: string;
  overdueDays: number;
};

const mockBorrowings: OverdueBorrowing[] = [
  {
    id: "1",
    borrower: "林怡君",
    itemName: "建興科技 2025 年度查核底稿",
    borrowDate: "2026/08/25",
    dueDate: "2026/09/10",
    overdueDays: 14,
  },
  {
    id: "2",
    borrower: "王俊傑",
    itemName: "宏達國際 合約文件",
    borrowDate: "2026/09/01",
    dueDate: "2026/09/15",
    overdueDays: 9,
  },
  {
    id: "3",
    borrower: "陳美玲",
    itemName: "合順創新 財務資料",
    borrowDate: "2026/09/05",
    dueDate: "2026/09/20",
    overdueDays: 4,
  },
];

export default function OverdueBorrowingSection() {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-slate-900">逾期未還借閱</h2>

          <p className="mt-1 text-sm text-slate-500">顯示目前已超過歸還期限的借閱資料。</p>
        </div>

        <button
          type="button"
          className="whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          查看全部
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">借閱人</th>
              <th className="px-4 py-3 font-medium">借閱項目</th>
              <th className="px-4 py-3 font-medium">借閱日期</th>
              <th className="px-4 py-3 font-medium">應歸還日</th>
              <th className="px-4 py-3 font-medium">逾期天數</th>
            </tr>
          </thead>

          <tbody>
            {mockBorrowings.map((borrowing) => (
              <tr key={borrowing.id} className="border-t border-slate-200 hover:bg-slate-50/60">
                <td className="whitespace-nowrap px-4 py-4 font-medium text-slate-900">
                  {borrowing.borrower}
                </td>

                <td className="px-4 py-4 text-slate-700">{borrowing.itemName}</td>

                <td className="whitespace-nowrap px-4 py-4 text-slate-600">
                  {borrowing.borrowDate}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-slate-600">{borrowing.dueDate}</td>

                <td className="whitespace-nowrap px-4 py-4">
                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700">
                    逾期 {borrowing.overdueDays} 天
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
