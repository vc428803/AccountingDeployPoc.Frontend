import ApprovalTimeline from "../components/ApprovalTimeline";
import { useParams } from "react-router-dom";

const mockApprovalSteps = [
  {
    id: "1",
    order: 1,
    roleName: "主簽會計師",
    approverName: "王世勤",
    status: "approved" as const,
    approvedAt: "2026/09/23 11:05",
  },
  {
    id: "2",
    order: 2,
    roleName: "副簽會計師",
    approverName: "李佳穎",
    status: "in_progress" as const,
  },
  {
    id: "3",
    order: 3,
    roleName: "案件主管",
    approverName: "陳美玲",
    status: "pending" as const,
  },
  {
    id: "4",
    order: 4,
    roleName: "合夥會計師",
    approverName: null,
    status: "not_started" as const,
  },
];

export default function ContractApprovalPage() {
  const { contractId } = useParams();
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-slate-500">儀表板 / 合約簽核</p>
        <p className="text-sm text-slate-500">Contract ID：{contractId}</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">合約簽核</h1>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-slate-900">CT-2026-0012</h2>

              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                待簽核
              </span>
            </div>

            <p className="mt-2 font-medium text-slate-800">建興科技股份有限公司</p>
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            返回
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="text-xs text-slate-500">委任期間</p>
            <p className="mt-1 text-sm font-medium text-slate-900">2026/01/01 ~ 2026/12/31</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">主辦部門</p>
            <p className="mt-1 text-sm font-medium text-slate-900">審計一部</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">組織類型</p>
            <p className="mt-1 text-sm font-medium text-slate-900">上市公司</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">通知人</p>
            <p className="mt-1 text-sm font-medium text-slate-900">張志豪</p>
          </div>
        </div>
      </section>

      <ApprovalTimeline steps={mockApprovalSteps} />
    </div>
  );
}
