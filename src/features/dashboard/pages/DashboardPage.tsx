export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">儀表板</h1>

        <p className="mt-1 text-sm text-slate-500">歡迎回來，這裡顯示目前需要關注的工作資訊。</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <DashboardCard title="待簽核提醒" value="3" description="目前有 3 筆待處理簽核" />

        <DashboardCard title="週期性委任到期提醒" value="5" description="近期有 5 筆委任即將到期" />

        <DashboardCard title="逾期未還借閱" value="2" description="目前有 2 筆逾期借閱" />
      </div>
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  value: string;
  description: string;
};

function DashboardCard({ title, value, description }: DashboardCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-600">{title}</p>

      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>

      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </section>
  );
}
