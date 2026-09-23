import { useState } from "react";

type PendingContract = {
  id: string;
  contractNo: string;
  customerName: string;
  period: string;
  services: string[];
  notifiedBy: string;
  notifiedAt: string;
  status: "待確認";
};

const mockContracts: PendingContract[] = [
  {
    id: "1",
    contractNo: "CT-2026-0012",
    customerName: "建興科技股份有限公司",
    period: "2026/01/01 ~ 2026/12/31",
    services: ["A1", "B1", "F1-1"],
    notifiedBy: "張志豪",
    notifiedAt: "2026/09/23 10:40",
    status: "待確認",
  },
  {
    id: "2",
    contractNo: "CT-2026-0013",
    customerName: "宏達國際貿易有限公司",
    period: "2026/01/01 ~ 2026/12/31",
    services: ["A1", "B1"],
    notifiedBy: "李佳穎",
    notifiedAt: "2026/09/23 09:20",
    status: "待確認",
  },
];

export default function PendingContractApprovalSection() {
  const [selectedContract, setSelectedContract] = useState<PendingContract | null>(null);

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-900">待主管確認合約</h2>

        <p className="mt-1 text-sm text-slate-500">顯示已由工作人員通知主管確認的合約。</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">合約編號</th>
              <th className="px-4 py-3 font-medium">客戶名稱</th>
              <th className="px-4 py-3 font-medium">委任期間</th>
              <th className="px-4 py-3 font-medium">服務摘要</th>
              <th className="px-4 py-3 font-medium">通知人</th>
              <th className="px-4 py-3 font-medium">通知時間</th>
              <th className="px-4 py-3 font-medium">狀態</th>
              <th className="px-4 py-3 font-medium">操作</th>
            </tr>
          </thead>

          <tbody>
            {mockContracts.map((contract) => (
              <tr key={contract.id} className="border-t border-slate-200 hover:bg-slate-50/60">
                <td className="whitespace-nowrap px-4 py-4 font-medium text-blue-600">
                  {contract.contractNo}
                </td>

                <td className="px-4 py-4 font-medium text-slate-900">{contract.customerName}</td>

                <td className="whitespace-nowrap px-4 py-4 text-slate-600">{contract.period}</td>

                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {contract.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-4 py-4 text-slate-700">{contract.notifiedBy}</td>

                <td className="whitespace-nowrap px-4 py-4 text-slate-600">
                  {contract.notifiedAt}
                </td>

                <td className="px-4 py-4">
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                    {contract.status}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <button
                    type="button"
                    onClick={() => setSelectedContract(contract)}
                    className="rounded-lg border border-blue-200 px-3 py-2 font-medium text-blue-600 hover:bg-blue-50"
                  >
                    查看
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedContract && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">合約資訊</h3>

                <p className="mt-1 text-sm text-slate-500">{selectedContract.contractNo}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedContract(null)}
                className="text-sm text-slate-500 hover:text-slate-900"
              >
                關閉
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="text-slate-500">客戶名稱</p>
                <p className="mt-1 font-medium text-slate-900">{selectedContract.customerName}</p>
              </div>

              <div>
                <p className="text-slate-500">委任期間</p>
                <p className="mt-1 text-slate-900">{selectedContract.period}</p>
              </div>

              <div>
                <p className="text-slate-500">服務項目</p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedContract.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-slate-500">通知資訊</p>
                <p className="mt-1 text-slate-900">
                  {selectedContract.notifiedBy} ・ {selectedContract.notifiedAt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
