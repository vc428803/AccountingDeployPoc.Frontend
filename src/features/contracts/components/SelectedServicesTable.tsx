export type SelectedServiceItem = {
  id: string;
  serviceCode: string;
  serviceName: string;
  estimatedFee: number | "";
  note: string;
};

type SelectedServicesTableProps = {
  services: SelectedServiceItem[];
};

export default function SelectedServicesTable({ services }: SelectedServicesTableProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900">已加入的服務項目</h2>

      <div className="mt-4">
        {services.length === 0 ? (
          <p className="text-sm text-slate-400">尚未加入服務項目。</p>
        ) : (
          <div className="space-y-2">
            {services.map((service) => (
              <div key={service.id} className="rounded-lg border border-slate-200 p-3">
                <div className="font-medium text-slate-900">
                  {service.serviceCode}｜{service.serviceName}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
