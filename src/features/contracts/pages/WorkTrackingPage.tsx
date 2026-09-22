import { useState } from "react";
import SignModal from "../components/SignModal";

type Quarter = "Q1" | "Q2" | "Q3" | "Q4";

type SignRecord = {
  id: string;
  quarter: Quarter;
  role: "lead" | "secondary";
  signerName: string;
  signedAt: string;
};

type ContractTrackingItem = {
  id: string;
  contractNo: string;
  customerName: string;
  period: string;

  // 服務代碼只作為合約內容摘要，不拆成各自簽署流程
  services: string[];

  // 所有實際簽署紀錄
  signRecords: SignRecord[];
};

const mockContracts: ContractTrackingItem[] = [
  {
    id: "contract-001",
    contractNo: "CT-2026-0012",
    customerName: "建興科技股份有限公司",
    period: "2026/01/01 ~ 2026/12/31",
    services: ["A1", "B1", "F1-1"],
    signRecords: [
      {
        id: "sign-001",
        quarter: "Q1",
        role: "lead",
        signerName: "王大明",
        signedAt: "2026/02/03 10:24",
      },
      {
        id: "sign-002",
        quarter: "Q1",
        role: "secondary",
        signerName: "李佳穎",
        signedAt: "2026/02/05 14:31",
      },
      {
        id: "sign-003",
        quarter: "Q1",
        role: "lead",
        signerName: "陳美玲",
        signedAt: "2026/03/01 09:12",
      },
      {
        id: "sign-004",
        quarter: "Q2",
        role: "lead",
        signerName: "李佳穎",
        signedAt: "2026/05/20 11:08",
      },
    ],
  },
  {
    id: "contract-002",
    contractNo: "CT-2026-0013",
    customerName: "宏達國際貿易有限公司",
    period: "2026/01/01 ~ 2026/12/31",
    services: ["A1", "B1"],
    signRecords: [
      {
        id: "sign-005",
        quarter: "Q1",
        role: "lead",
        signerName: "王大明",
        signedAt: "2026/03/10 16:40",
      },
    ],
  },
];

const quarters: Quarter[] = ["Q1", "Q2", "Q3", "Q4"];

export default function WorkTrackingPage() {
  const [signTarget, setSignTarget] = useState<{
    contract: ContractTrackingItem;
    quarter: Quarter;
  } | null>(null);

  function handleSign(contract: ContractTrackingItem, quarter: Quarter) {
    setSignTarget({
      contract,
      quarter,
    });
  }
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">工作追蹤</h1>

        <p className="mt-1 text-sm text-slate-500">以合約為單位追蹤各季度簽署情況。</p>
      </div>

      {/* Search */}
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <input
            type="text"
            placeholder="搜尋合約編號、客戶名稱..."
            className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <select className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm">
            <option>所有客戶</option>
          </select>

          <select className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm">
            <option>2026 年度</option>
          </select>

          <select className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm">
            <option>所有季度</option>
            <option>Q1</option>
            <option>Q2</option>
            <option>Q3</option>
            <option>Q4</option>
          </select>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            查詢
          </button>
        </div>
      </section>

      {/* Contract tracking table */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="font-semibold text-slate-900">合約簽署進度</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[1200px] w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">合約編號</th>
                <th className="px-4 py-3 font-medium">客戶名稱</th>
                <th className="px-4 py-3 font-medium">委任期間</th>
                <th className="px-4 py-3 font-medium">服務項目摘要</th>

                {quarters.map((quarter) => (
                  <th key={quarter} className="min-w-[190px] px-4 py-3 font-medium">
                    {quarter}
                  </th>
                ))}

                <th className="min-w-[180px] px-4 py-3 font-medium">操作</th>
              </tr>
            </thead>

            <tbody>
              {mockContracts.map((contract) => (
                <tr key={contract.id} className="border-t border-slate-200 align-top">
                  <td className="px-4 py-4 font-medium text-blue-600">{contract.contractNo}</td>

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

                  {quarters.map((quarter) => (
                    <td key={quarter} className="px-4 py-4">
                      <QuarterCell
                        records={contract.signRecords.filter(
                          (record) => record.quarter === quarter,
                        )}
                        onSign={() => handleSign(contract, quarter)}
                      />
                    </td>
                  ))}

                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          console.log("view sign records", contract.id);
                        }}
                        className="whitespace-nowrap rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                      >
                        查看紀錄
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          console.log("view contract", contract.id);
                        }}
                        className="whitespace-nowrap rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        查看合約
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {signTarget && (
        <SignModal
          contract={signTarget.contract}
          quarter={signTarget.quarter}
          onClose={() => setSignTarget(null)}
        />
      )}
    </div>
  );
}

type QuarterCellProps = {
  records: SignRecord[];
  onSign: () => void;
};

function QuarterCell({ records, onSign }: QuarterCellProps) {
  const leadRecords = records.filter((record) => record.role === "lead");

  const secondaryRecords = records.filter((record) => record.role === "secondary");

  return (
    <div className="min-w-[165px] space-y-3">
      <SignerSummary label="主簽" names={leadRecords.map((record) => record.signerName)} />

      <SignerSummary label="副簽" names={secondaryRecords.map((record) => record.signerName)} />

      <button
        type="button"
        onClick={onSign}
        className="rounded-md border border-blue-500 bg-white px-2.5 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50"
      >
        我要簽
      </button>
    </div>
  );
}

type SignerSummaryProps = {
  label: string;
  names: string[];
};

function SignerSummary({ label, names }: SignerSummaryProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
          {label}
        </span>

        <span className="text-xs text-slate-500">{names.length} 人</span>
      </div>

      <p className="mt-1.5 text-xs leading-5 text-slate-700">
        {names.length > 0 ? names.join("、") : "尚無紀錄"}
      </p>
    </div>
  );
}
