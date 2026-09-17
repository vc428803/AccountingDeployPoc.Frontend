import { Link } from "react-router-dom";

const engagements = [
  {
    id: "ENG0003",
    serviceCode: "A1",
    category: "財務報表查核",
    period: "2026/01/01 ~ 2026/12/31",
    status: "進行中",
    accountant: "王會計師",
  },
  {
    id: "ENG0002",
    serviceCode: "B1",
    category: "稅務服務",
    period: "2025/01/01 ~ 2025/12/31",
    status: "已完成",
    accountant: "陳會計師",
  },
];

type Props = {
  customerId: string;
};

export default function CustomerEngagementHistory({
  customerId,
}: Props) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            委任 / 案件紀錄
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            依最新紀錄排序
          </p>
        </div>

        <Link
          to={`/customers/${customerId}/engagements/new`}
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
        >
          新增案件
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                服務代碼
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                類別
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                委任期間
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                狀態
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                接案會計師
              </th>

              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500">
                操作
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {engagements.map((engagement) => (
              <tr key={engagement.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-sm text-slate-700">
                  {engagement.serviceCode}
                </td>

                <td className="px-4 py-4 text-sm text-slate-700">
                  {engagement.category}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {engagement.period}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {engagement.status}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {engagement.accountant}
                </td>

                <td className="px-4 py-4 text-right">
                  <Link
                    to={`/customers/${customerId}/engagements/${engagement.id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    查看 / 維護
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}