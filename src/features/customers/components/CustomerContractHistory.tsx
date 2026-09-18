export default function CustomerContractHistory() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div>
        <h2 className="text-base font-semibold text-slate-900">合約 / 歷史紀錄</h2>

        <p className="mt-1 text-sm text-slate-500">查看此客戶歷次合約與其服務項目</p>
      </div>

      <div className="mt-6 rounded-lg border border-dashed border-slate-300 p-10 text-center text-sm text-slate-400">
        合約紀錄列表將顯示於此
      </div>
    </section>
  );
}
