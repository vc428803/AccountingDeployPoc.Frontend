type Quarter = "Q1" | "Q2" | "Q3" | "Q4";

type ContractInfo = {
  id: string;
  contractNo: string;
  customerName: string;
};

type SignModalProps = {
  contract: ContractInfo;
  quarter: Quarter;
  onClose: () => void;
};

export default function SignModal({ contract, quarter, onClose }: SignModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="font-semibold text-slate-900">確認簽署</h2>

            <p className="mt-1 text-sm text-slate-500">
              {contract.contractNo} · {quarter}
            </p>
          </div>

          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-700">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 p-5">
          <div>
            <p className="text-xs text-slate-500">客戶名稱</p>

            <p className="mt-1 text-sm font-medium text-slate-900">{contract.customerName}</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">簽署季度</p>

            <p className="mt-1 text-sm font-medium text-slate-900">{quarter}</p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">簽署角色</label>

            <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm">
              <option value="lead">主簽</option>
              <option value="secondary">副簽</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">備註</label>

            <textarea
              rows={3}
              placeholder="可輸入本次簽署備註..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-slate-200 px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            取消
          </button>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            確認簽署
          </button>
        </div>
      </div>
    </div>
  );
}
