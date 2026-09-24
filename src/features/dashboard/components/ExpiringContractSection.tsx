type ExpiringContract = {
  id: string;
  contractNo: string;
  customerName: string;
  expiryDate: string;
  department: string;
  remainingDays: number;
};

const mockContracts: ExpiringContract[] = [
  {
    id: "1",
    contractNo: "CT-2026-0018",
    customerName: "連興實業股份有限公司",
    expiryDate: "2026/10/15",
    department: "審計一部",
    remainingDays: 21,
  },
  {
    id: "2",
    contractNo: "CT-2026-0021",
    customerName: "誠信顧問有限公司",
    expiryDate: "2026/10/20",
    department: "審計二部",
    remainingDays: 26,
  },
  {
    id: "3",
    contractNo: "CT-2026-0028",
    customerName: "合順創新科技股份有限公司",
    expiryDate: "2026/10/28",
    department: "稅務部",
    remainingDays: 34,
  },
];

export default function ExpiringContractSection() {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-slate-900">即將到期的委任合約</h2>

          <p className="mt-1 text-sm text-slate-500">顯示近期即將到期的委任合約。</p>
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
              <th className="px-4 py-3 font-medium">合約編號</th>
              <th className="px-4 py-3 font-medium">客戶名稱</th>
              <th className="px-4 py-3 font-medium">到期日</th>
              <th className="px-4 py-3 font-medium">主辦部門</th>
              <th className="px-4 py-3 font-medium">剩餘天數</th>
            </tr>
          </thead>

          <tbody>
            {mockContracts.map((contract) => (
              <tr key={contract.id} className="border-t border-slate-200 hover:bg-slate-50/60">
                <td className="whitespace-nowrap px-4 py-4 font-medium text-blue-600">
                  {contract.contractNo}
                </td>

                <td className="px-4 py-4 font-medium text-slate-900">{contract.customerName}</td>

                <td className="whitespace-nowrap px-4 py-4 text-slate-600">
                  {contract.expiryDate}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-slate-700">
                  {contract.department}
                </td>

                <td className="whitespace-nowrap px-4 py-4">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    {contract.remainingDays} 天
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
