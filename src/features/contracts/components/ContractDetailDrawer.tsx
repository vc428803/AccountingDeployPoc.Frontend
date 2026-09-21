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

  customerName: string;
  customerNo: string;

  startDate: string;
  endDate: string;

  engagementType: string;
  engagementStatus: string;

  acceptingAccountant: string;

  paymentNote: string;

  services: ContractService[];

  assignments: ResponsibilityAssignment[];
};

type Props = {
  open: boolean;
  contract: ContractDetail | null;
  onClose: () => void;
};

export default function ContractDetailDrawer({ open, contract, onClose }: Props) {
  if (!open || !contract) {
    return null;
  }

  const getAssignment = (role: "lead" | "secondary", quarter?: 1 | 2 | 3 | 4) => {
    return contract.assignments.find(
      (assignment) =>
        assignment.role === role &&
        assignment.scopeType === "contract" &&
        assignment.quarter === quarter,
    );
  };

  const leadAccountant =
    contract.assignments.find(
      (assignment) => assignment.role === "lead" && assignment.scopeType === "contract",
    )?.accountantName ?? "-";

  const secondaryAccountant =
    contract.assignments.find(
      (assignment) => assignment.role === "secondary" && assignment.scopeType === "contract",
    )?.accountantName ?? "-";

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="關閉合約詳細內容"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/30"
      />

      <aside className="absolute right-0 top-0 h-full w-full max-w-2xl overflow-y-auto bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">合約詳細內容</h2>

            <p className="mt-1 text-sm text-slate-500">{contract.contractNo}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100"
          >
            關閉
          </button>
        </div>

        <div className="space-y-6 p-6">
          <section>
            <h3 className="border-l-4 border-blue-600 pl-3 text-sm font-semibold text-slate-900">
              基本資訊
            </h3>

            <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
              <InfoRow label="合約編號" value={contract.contractNo} />

              <InfoRow
                label="客戶名稱 / 編號"
                value={`${contract.customerName} / ${contract.customerNo}`}
              />

              <InfoRow label="委任期間" value={`${contract.startDate} ~ ${contract.endDate}`} />

              <InfoRow label="委任性質" value={contract.engagementType} />

              <InfoRow label="接案會計師" value={contract.acceptingAccountant} />

              <InfoRow label="主簽會計師" value={leadAccountant} highlight />

              <InfoRow label="副簽會計師" value={secondaryAccountant} highlight />

              <InfoRow label="委任狀態" value={contract.engagementStatus} />

              <InfoRow label="收款備註" value={contract.paymentNote} />
            </div>
          </section>

          <section>
            <h3 className="border-l-4 border-blue-600 pl-3 text-sm font-semibold text-slate-900">
              合約服務項目明細
            </h3>

            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full min-w-[700px]">
                <thead className="bg-slate-50">
                  <tr>
                    <TableHead>服務代碼</TableHead>
                    <TableHead>大分類</TableHead>
                    <TableHead>子分類 / 說明</TableHead>
                    <TableHead>公費金額</TableHead>
                    <TableHead>審計 / 非審計</TableHead>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {contract.services.map((service) => (
                    <tr key={service.id}>
                      <TableCell>
                        <span className="font-semibold text-blue-700">{service.code}</span>
                      </TableCell>

                      <TableCell>{service.category}</TableCell>

                      <TableCell>{service.description}</TableCell>

                      <TableCell>
                        {service.fee.toLocaleString("zh-TW", {
                          style: "currency",
                          currency: "TWD",
                          maximumFractionDigits: 0,
                        })}
                      </TableCell>

                      <TableCell>{service.auditType}</TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="border-l-4 border-blue-600 pl-3 text-sm font-semibold text-slate-900">
              Q1 ~ Q4 主簽 / 副簽責任分配
            </h3>

            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full min-w-[600px]">
                <thead className="bg-slate-50">
                  <tr>
                    <TableHead>角色</TableHead>
                    <TableHead>Q1</TableHead>
                    <TableHead>Q2</TableHead>
                    <TableHead>Q3</TableHead>
                    <TableHead>Q4</TableHead>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-slate-100">
                    <TableCell>主簽會計師</TableCell>

                    <TableCell>{getAssignment("lead", 1)?.accountantName ?? "-"}</TableCell>

                    <TableCell>{getAssignment("lead", 2)?.accountantName ?? "-"}</TableCell>

                    <TableCell>{getAssignment("lead", 3)?.accountantName ?? "-"}</TableCell>

                    <TableCell>{getAssignment("lead", 4)?.accountantName ?? "-"}</TableCell>
                  </tr>

                  <tr>
                    <TableCell>副簽會計師</TableCell>

                    <TableCell>{getAssignment("secondary", 1)?.accountantName ?? "-"}</TableCell>

                    <TableCell>{getAssignment("secondary", 2)?.accountantName ?? "-"}</TableCell>

                    <TableCell>{getAssignment("secondary", 3)?.accountantName ?? "-"}</TableCell>

                    <TableCell>{getAssignment("secondary", 4)?.accountantName ?? "-"}</TableCell>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
}

function InfoRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[140px_1fr] border-b border-slate-100 last:border-b-0 ${
        highlight ? "bg-blue-50" : ""
      }`}
    >
      <div className="bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600">{label}</div>

      <div
        className={`px-4 py-3 text-sm ${
          highlight ? "font-semibold text-blue-700" : "text-slate-800"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function TableHead({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">{children}</th>;
}

function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-3 text-sm text-slate-700">{children}</td>;
}
