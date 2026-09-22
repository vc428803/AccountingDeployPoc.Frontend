import { Search, X } from "lucide-react";

export type SignerOption = {
  id: string;
  employeeNo: string;
  name: string;
  title: string;
};

type SignerAssignmentSectionProps = {
  leadSigners: SignerOption[];
  secondarySigners: SignerOption[];
};

export default function SignerAssignmentSection({
  leadSigners,
  secondarySigners,
}: SignerAssignmentSectionProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* 區塊標題 */}
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-900">主簽 / 副簽人員設定</h2>
        <p className="mt-1 text-sm text-slate-500">
          設定本案件主要參與的主簽與副簽會計師，可指派多人，供後續工作分配與追蹤參考。
        </p>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-2">
        <SignerPanel title="主簽會計師" buttonLabel="新增主簽" signers={leadSigners} />

        <SignerPanel title="副簽會計師" buttonLabel="新增副簽" signers={secondarySigners} />
      </div>
    </section>
  );
}

type SignerPanelProps = {
  title: string;
  buttonLabel: string;
  signers: SignerOption[];
};

function SignerPanel({ title, buttonLabel, signers }: SignerPanelProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
      <h3 className="font-medium text-slate-900">{title}</h3>

      <div className="mt-3 flex gap-2">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="輸入會計師姓名、員工編號或關鍵字..."
            className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="button"
          className="shrink-0 rounded-lg border border-blue-500 bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
        >
          + {buttonLabel}
        </button>
      </div>

      <p className="mt-4 text-xs font-medium text-slate-500">已指派人員（可多位）</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {signers.map((signer) => (
          <div
            key={signer.id}
            className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm"
          >
            <div>
              <div className="font-medium text-slate-800">{signer.name}</div>
              <div className="text-xs text-slate-500">
                {signer.employeeNo}｜{signer.title}
              </div>
            </div>

            {/* 下一步再接真正刪除事件 */}
            <button
              type="button"
              className="ml-1 text-slate-400 hover:text-red-500"
              aria-label={`移除 ${signer.name}`}
            >
              <X size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
