import { useState } from "react";
import ContractDetailDrawer from "../../contracts/components/ContractDetailDrawer";

type ContractService = {
  id: string;
  code: string;
  category: string;
  description: string;
  fee: number;
  auditType: "審計" | "非審計";
};

type ResponsibilityAssignment = {
  id: string;
  role: "lead" | "secondary";

  scopeType: "contract" | "service";

  serviceId?: string;

  quarter?: 1 | 2 | 3 | 4;

  accountantId: string;
  accountantName: string;
};

type ContractDetail = {
  contractNo: string;
  customerNo: string;
  customerName: string;

  startDate: string;
  endDate: string;

  engagementType: string;
  engagementStatus: string;
  acceptingAccountant: string;
  paymentNote: string;

  services: ContractService[];

  assignments: ResponsibilityAssignment[];
};

type ContractServiceSummary = {
  code: string;
  name: string;
};

type CustomerContract = {
  contractNo: string;
  startDate: string;
  endDate: string;
  services: ContractServiceSummary[];
  leadAccountant: string;
  secondaryAccountant: string;
};

const mockContracts: CustomerContract[] = [
  {
    contractNo: "CT-2026-0012",
    startDate: "2026/01/01",
    endDate: "2026/12/31",
    services: [
      { code: "A1", name: "財務報表查核" },
      { code: "B2", name: "稅務服務" },
      { code: "C3", name: "顧問服務" },
    ],
    leadAccountant: "王大明",
    secondaryAccountant: "李佳穎",
  },
  {
    contractNo: "CT-2025-0108",
    startDate: "2025/01/01",
    endDate: "2025/12/31",
    services: [
      { code: "A1", name: "財務報表查核" },
      { code: "B2", name: "稅務服務" },
    ],
    leadAccountant: "王大明",
    secondaryAccountant: "陳冠廷",
  },
  {
    contractNo: "CT-2024-0321",
    startDate: "2024/03/01",
    endDate: "2024/12/31",
    services: [
      { code: "C3", name: "顧問服務" },
      { code: "D5", name: "其他服務" },
    ],
    leadAccountant: "李佳穎",
    secondaryAccountant: "陳冠廷",
  },
];

const mockContractDetails: ContractDetail[] = [
  {
    contractNo: "CT-2026-0012",
    customerName: "瀚宇科技股份有限公司",
    customerNo: "C0001",
    startDate: "2026/01/01",
    endDate: "2026/12/31",
    engagementType: "一般委任",
    acceptingAccountant: "林柏宇",
    engagementStatus: "進行中",
    paymentNote: "依合約分期收款",

    services: [
      {
        id: "S2026-001",
        code: "A1",
        category: "審計服務",
        description: "財務報表查核",
        fee: 120000,
        auditType: "審計" as const,
      },
      {
        id: "S2026-002",
        code: "B2",
        category: "稅務服務",
        description: "稅務簽證",
        fee: 80000,
        auditType: "非審計" as const,
      },
      {
        id: "S2026-003",
        code: "C3",
        category: "顧問服務",
        description: "財務諮詢",
        fee: 60000,
        auditType: "非審計" as const,
      },
    ],

    assignments: [
      {
        id: "A2026-001",
        role: "lead" as const,
        scopeType: "contract" as const,
        quarter: 1 as const,
        accountantId: "ACC001",
        accountantName: "王大明",
      },
      {
        id: "A2026-002",
        role: "secondary" as const,
        scopeType: "contract" as const,
        quarter: 1 as const,
        accountantId: "ACC002",
        accountantName: "李佳穎",
      },
      {
        id: "A2026-003",
        role: "lead" as const,
        scopeType: "contract" as const,
        quarter: 2 as const,
        accountantId: "ACC001",
        accountantName: "王大明",
      },
      {
        id: "A2026-004",
        role: "secondary" as const,
        scopeType: "contract" as const,
        quarter: 2 as const,
        accountantId: "ACC002",
        accountantName: "李佳穎",
      },
      {
        id: "A2026-005",
        role: "lead" as const,
        scopeType: "contract" as const,
        quarter: 3 as const,
        accountantId: "ACC001",
        accountantName: "王大明",
      },
      {
        id: "A2026-006",
        role: "secondary" as const,
        scopeType: "contract" as const,
        quarter: 3 as const,
        accountantId: "ACC002",
        accountantName: "李佳穎",
      },
      {
        id: "A2026-007",
        role: "lead" as const,
        scopeType: "contract" as const,
        quarter: 4 as const,
        accountantId: "ACC001",
        accountantName: "王大明",
      },
      {
        id: "A2026-008",
        role: "secondary" as const,
        scopeType: "contract" as const,
        quarter: 4 as const,
        accountantId: "ACC002",
        accountantName: "李佳穎",
      },
      {
        id: "A2026-009",
        role: "lead" as const,
        scopeType: "service" as const,
        serviceId: "S2026-003",
        quarter: 4 as const,
        accountantId: "ACC004",
        accountantName: "張志豪",
      },
      {
        id: "A2026-010",
        role: "secondary" as const,
        scopeType: "service" as const,
        serviceId: "S2026-003",
        quarter: 4 as const,
        accountantId: "ACC005",
        accountantName: "陳怡君",
      },
    ],
  },

  {
    contractNo: "CT-2025-0108",
    customerName: "瀚宇科技股份有限公司",
    customerNo: "C0001",
    startDate: "2025/01/01",
    endDate: "2025/12/31",
    engagementType: "一般委任",
    acceptingAccountant: "林柏宇",
    engagementStatus: "完成",
    paymentNote: "已完成收款",

    services: [
      {
        id: "S2025-001",
        code: "A1",
        category: "審計服務",
        description: "財務報表查核",
        fee: 110000,
        auditType: "審計" as const,
      },
      {
        id: "S2025-002",
        code: "B2",
        category: "稅務服務",
        description: "稅務簽證",
        fee: 75000,
        auditType: "非審計" as const,
      },
    ],

    assignments: [
      {
        id: "A2025-001",
        role: "lead" as const,
        scopeType: "contract" as const,
        quarter: 1 as const,
        accountantId: "ACC001",
        accountantName: "王大明",
      },
      {
        id: "A2025-002",
        role: "secondary" as const,
        scopeType: "contract" as const,
        quarter: 1 as const,
        accountantId: "ACC003",
        accountantName: "陳冠廷",
      },
      {
        id: "A2025-003",
        role: "lead" as const,
        scopeType: "contract" as const,
        quarter: 2 as const,
        accountantId: "ACC001",
        accountantName: "王大明",
      },
      {
        id: "A2025-004",
        role: "secondary" as const,
        scopeType: "contract" as const,
        quarter: 2 as const,
        accountantId: "ACC003",
        accountantName: "陳冠廷",
      },
      {
        id: "A2025-005",
        role: "lead" as const,
        scopeType: "contract" as const,
        quarter: 3 as const,
        accountantId: "ACC001",
        accountantName: "王大明",
      },
      {
        id: "A2025-006",
        role: "secondary" as const,
        scopeType: "contract" as const,
        quarter: 3 as const,
        accountantId: "ACC003",
        accountantName: "陳冠廷",
      },
      {
        id: "A2025-007",
        role: "lead" as const,
        scopeType: "contract" as const,
        quarter: 4 as const,
        accountantId: "ACC001",
        accountantName: "王大明",
      },
      {
        id: "A2025-008",
        role: "secondary" as const,
        scopeType: "contract" as const,
        quarter: 4 as const,
        accountantId: "ACC003",
        accountantName: "陳冠廷",
      },
    ],
  },
];

export default function CustomerContractHistory() {
  const [selectedContractNo, setSelectedContractNo] = useState<string | null>(null);
  const contracts = [...mockContracts].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );

  const selectedContract =
    mockContractDetails.find((contract) => contract.contractNo === selectedContractNo) ?? null;

  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-900">最近合約紀錄</h2>

            <p className="mt-1 text-sm text-slate-500">此區顯示此客戶底下的歷史合約摘要</p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            ＋ 新增案件
          </button>
        </div>

        <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[920px]">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200">
                <TableHead>合約編號</TableHead>
                <TableHead>委任期間</TableHead>
                <TableHead>服務項目摘要</TableHead>
                <TableHead>主簽會計師</TableHead>
                <TableHead>副簽會計師</TableHead>
                <TableHead>操作</TableHead>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {contracts.map((contract) => (
                <tr key={contract.contractNo} className="hover:bg-slate-50">
                  <TableCell>
                    <span className="font-medium text-slate-900">{contract.contractNo}</span>
                  </TableCell>

                  <TableCell>
                    <div className="whitespace-nowrap">{contract.startDate}</div>

                    <div className="mt-1 whitespace-nowrap text-xs text-slate-400">
                      ～ {contract.endDate}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="space-y-2">
                      {contract.services.map((service) => (
                        <div key={service.code} className="flex items-center gap-2">
                          <span className="inline-flex min-w-9 justify-center rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                            {service.code}
                          </span>

                          <span className="text-xs text-slate-600">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </TableCell>

                  <TableCell>{contract.leadAccountant}</TableCell>

                  <TableCell>{contract.secondaryAccountant}</TableCell>

                  <TableCell>
                    <button
                      type="button"
                      onClick={() => setSelectedContractNo(contract.contractNo)}
                      className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      查看
                    </button>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span>
            顯示 1 - {contracts.length}，共 {contracts.length} 筆
          </span>

          <span>依委任期間新至舊排列</span>
        </div>
      </section>

      <ContractDetailDrawer
        open={selectedContract !== null}
        contract={selectedContract}
        onClose={() => setSelectedContractNo(null)}
      />
    </>
  );
}

function TableHead({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">{children}</th>;
}

function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-4 align-top text-sm text-slate-700">{children}</td>;
}
