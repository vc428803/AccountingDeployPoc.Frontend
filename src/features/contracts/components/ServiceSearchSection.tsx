import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export type ServiceCatalogItem = {
  id: string;
  code: string;
  name: string;
  category: string;
};

type ServiceSearchSectionProps = {
  services: ServiceCatalogItem[];
  onAddService: (service: ServiceCatalogItem) => void;
};

export default function ServiceSearchSection({
  services,
  onAddService,
}: ServiceSearchSectionProps) {
  const [keyword, setKeyword] = useState("");

  // 依服務代碼、名稱、大分類搜尋
  const filteredServices = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    if (!normalizedKeyword) return [];

    return services.filter((service) => {
      return (
        service.code.toLowerCase().includes(normalizedKeyword) ||
        service.name.toLowerCase().includes(normalizedKeyword) ||
        service.category.toLowerCase().includes(normalizedKeyword)
      );
    });
  }, [keyword, services]);

  const handleSelect = (service: ServiceCatalogItem) => {
    onAddService(service);

    // 加入後清空搜尋欄
    setKeyword("");
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-900">新增服務項目</h2>
        <p className="mt-1 text-sm text-slate-500">
          輸入服務代碼、服務名稱或關鍵字搜尋後加入案件。
        </p>
      </div>

      <div className="p-5">
        <div className="relative">
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="例如：A1、財報、稅簽、ESG..."
            className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {keyword && (
          <div className="mt-2 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleSelect(service)}
                  className="flex w-full items-center gap-4 border-b border-slate-100 px-4 py-3 text-left last:border-b-0 hover:bg-blue-50"
                >
                  <span className="w-20 shrink-0 font-medium text-blue-600">{service.code}</span>

                  <div>
                    <div className="text-sm font-medium text-slate-800">{service.name}</div>
                    <div className="mt-0.5 text-xs text-slate-500">{service.category}</div>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-4 text-sm text-slate-500">找不到符合的服務項目。</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
