import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const customers = [
  {
    id: "C0001",
    name: "範例科技股份有限公司",
    taxId: "12345678",
    industry: "資訊服務業",
    owner: "王大明",
    status: "啟用",
  },
  {
    id: "C0002",
    name: "測試國際有限公司",
    taxId: "87654321",
    industry: "製造業",
    owner: "陳小姐",
    status: "啟用",
  },
];

export default function CustomerListPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            客戶管理
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            查詢與維護客戶基本資料及案件紀錄
          </p>
        </div>

        <Link
  to="/customers/new"
  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
>
  <Plus size={18} />
  新增客戶
</Link>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="搜尋客戶編號、客戶名稱或統一編號"
              className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-slate-500"
            />
          </div>
          <button
            type="button"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            查詢
          </button>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  客戶編號
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  客戶名稱
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  統一編號
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  行業別
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  負責人
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  狀態
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  操作
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm text-slate-600">
                    {customer.id}
                  </td>

                  <td className="px-4 py-4 text-sm font-medium text-slate-900">
                    {customer.name}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {customer.taxId}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {customer.industry}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {customer.owner}
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      {customer.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-right">
                    <Link
  to={`/customers/${customer.id}`}
  className="text-sm font-medium text-blue-600 hover:text-blue-800"
>
  查看
</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}