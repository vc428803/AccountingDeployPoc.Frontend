import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SignerAssignmentSection, { type SignerOption } from "../components/SignerAssignmentSection";
import ServiceSearchSection, { type ServiceCatalogItem } from "../components/ServiceSearchSection";
import SelectedServicesTable, {
  type SelectedServiceItem,
} from "../components/SelectedServicesTable";

const mockLeadSigners: SignerOption[] = [
  {
    id: "ACC001",
    employeeNo: "A001",
    name: "王大明",
    title: "會計師",
  },
  {
    id: "ACC002",
    employeeNo: "A028",
    name: "陳美玲",
    title: "會計師",
  },
  {
    id: "ACC003",
    employeeNo: "A032",
    name: "張志明",
    title: "會計師",
  },
];

const mockSecondarySigners: SignerOption[] = [
  {
    id: "ACC004",
    employeeNo: "A015",
    name: "李佳穎",
    title: "會計師",
  },
  {
    id: "ACC005",
    employeeNo: "A027",
    name: "林小惠",
    title: "會計師",
  },
];

const mockServiceCatalog: ServiceCatalogItem[] = [
  {
    id: "A1",
    code: "A1",
    category: "審計服務",
    name: "公開發行公司（含子公司）財務報表查核簽證",
  },
  {
    id: "B1",
    code: "B1",
    category: "核閱服務",
    name: "公開發行公司（含子公司）財務報表核閱",
  },
  {
    id: "C1",
    code: "C1",
    category: "其他確信服務",
    name: "永續報告書確信案件",
  },
  {
    id: "F1-1",
    code: "F1-1",
    category: "稅務相關服務",
    name: "公開發行公司（含子公司）營利事業所得稅查核簽證",
  },
];

export default function ContractCreatePage() {
  const navigate = useNavigate();
  const { customerId } = useParams();
  const [selectedServices, setSelectedServices] = useState<SelectedServiceItem[]>([]);

  const handleAddService = (service: ServiceCatalogItem) => {
    setSelectedServices((current) => {
      const alreadyExists = current.some((item) => item.serviceCode === service.code);

      if (alreadyExists) return current;

      return [
        ...current,
        {
          id: service.id,
          serviceCode: service.code,
          serviceName: service.name,
          estimatedFee: "",
          note: "",
        },
      ];
    });
  };
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

      {/* 客戶摘要 */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-semibold text-slate-900">客戶摘要</h2>

        <p className="mt-2 text-sm text-slate-500">客戶編號：{customerId}</p>
      </section>

      {/* 委任基本資料 */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-semibold text-slate-900">委任基本資料</h2>

        <p className="mt-2 text-sm text-slate-400">
          下一步加入合約編號、委任期間、委任性質、接案會計師等欄位。
        </p>
      </section>

      {/* 主簽 / 副簽人員設定 */}
      <SignerAssignmentSection
        leadSigners={mockLeadSigners}
        secondarySigners={mockSecondarySigners}
      />

      <ServiceSearchSection services={mockServiceCatalog} onAddService={handleAddService} />

      <SelectedServicesTable services={selectedServices} />
    </div>
  );
}
