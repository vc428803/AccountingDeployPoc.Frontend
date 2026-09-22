import { Trash2 } from "lucide-react";

export type SelectedServiceItem = {
  id: string;
  serviceCode: string;
  serviceName: string;
  estimatedFee: number | "";
  note: string;
};

type SelectedServicesTableProps = {
  services: SelectedServiceItem[];

  // 更新某筆服務金額
  onChangeFee: (id: string, value: number | "") => void;

  // 更新某筆服務備註
  onChangeNote: (id: string, value: string) => void;

  // 移除服務
  onRemove: (id: string) => void;
};

export default function SelectedServicesTable({
  services,
  onChangeFee,
  onChangeNote,
  onRemove,
}: SelectedServicesTableProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-900">已加入的服務項目</h2>

        <p className="mt-1 text-sm text-slate-500">可調整各服務項目的預估金額與備註。</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs font-medium text-slate-500">
            <tr>
              <th className="px-4 py-3">服務代號</th>
              <th className="px-4 py-3">服務名稱</th>
              <th className="px-4 py-3">預估金額</th>
              <th className="px-4 py-3">備註</th>
              <th className="px-4 py-3 text-center">操作</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {services.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-400">
                  尚未加入服務項目。
                </td>
              </tr>
            ) : (
              services.map((service) => (
                <tr key={service.id}>
                  <td className="px-4 py-3 font-medium text-slate-900">{service.serviceCode}</td>

                  <td className="px-4 py-3 text-slate-700">{service.serviceName}</td>

                  <td className="px-4 py-3">
                    <input
                      type="number"
                      min="0"
                      value={service.estimatedFee}
                      onChange={(event) => {
                        const value = event.target.value;

                        onChangeFee(service.id, value === "" ? "" : Number(value));
                      }}
                      className="w-40 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      placeholder="0"
                    />
                  </td>

                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={service.note}
                      onChange={(event) => onChangeNote(service.id, event.target.value)}
                      className="w-full min-w-64 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      placeholder="輸入備註..."
                    />
                  </td>

                  <td className="px-4 py-3 text-center">
                    <button
                      type="button"
                      onClick={() => onRemove(service.id)}
                      className="inline-flex rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500"
                      aria-label={`刪除 ${service.serviceCode}`}
                    >
                      <Trash2 size={17} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
