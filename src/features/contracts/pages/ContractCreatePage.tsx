import { useNavigate, useParams } from "react-router-dom";

export default function ContractCreatePage() {
  const navigate = useNavigate();
  const { customerId } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-500">客戶管理 / {customerId} / 新增案件</p>

          <h1 className="mt-1 text-2xl font-semibold text-slate-900">新增案件</h1>

          <p className="mt-1 text-sm text-slate-500">建立此客戶的新委任 / 合約資料</p>
        </div>

        <button
          type="button"
          onClick={() => navigate(`/customers/${customerId}`)}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          返回客戶資料
        </button>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-semibold text-slate-900">客戶摘要</h2>

        <p className="mt-2 text-sm text-slate-500">客戶編號：{customerId}</p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-semibold text-slate-900">委任基本資料</h2>

        <p className="mt-2 text-sm text-slate-400">
          下一步加入合約編號、委任期間、委任性質、接案會計師等欄位。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-semibold text-slate-900">服務項目</h2>

        <p className="mt-2 text-sm text-slate-400">下一步加入多筆服務項目與公費資料。</p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-semibold text-slate-900">主簽 / 副簽責任分配</h2>

        <p className="mt-2 text-sm text-slate-400">下一步加入 Q1 ~ Q4 責任人設定。</p>
      </section>
    </div>
  );
}
