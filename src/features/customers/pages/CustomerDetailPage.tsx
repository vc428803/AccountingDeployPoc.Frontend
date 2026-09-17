import { useState } from "react";
import { useParams } from "react-router-dom";
import CustomerBasicInfo from "../components/CustomerBasicInfo";
import CustomerEngagementHistory from "../components/CustomerEngagementHistory";

type TabType = "basic" | "engagements";

export default function CustomerDetailPage() {
  const { customerId } = useParams();
  const [activeTab, setActiveTab] = useState<TabType>("basic");

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-slate-500">
          客戶管理 / 客戶詳細資料
        </p>

        <h1 className="mt-1 text-2xl font-semibold text-slate-900">
          客戶詳細資料
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          客戶編號：{customerId}
        </p>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5">
          <div className="flex gap-6">
            <button
              type="button"
              onClick={() => setActiveTab("basic")}
              className={
                activeTab === "basic"
                  ? "border-b-2 border-blue-600 px-1 py-4 text-sm font-medium text-blue-600"
                  : "px-1 py-4 text-sm font-medium text-slate-500 hover:text-slate-900"
              }
            >
              基本資料
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("engagements")}
              className={
                activeTab === "engagements"
                  ? "border-b-2 border-blue-600 px-1 py-4 text-sm font-medium text-blue-600"
                  : "px-1 py-4 text-sm font-medium text-slate-500 hover:text-slate-900"
              }
            >
              委任 / 案件紀錄
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          {activeTab === "basic" && <CustomerBasicInfo />}

          {activeTab === "engagements" && customerId && (
            <CustomerEngagementHistory customerId={customerId} />
          )}
        </div>
      </section>
    </div>
  );
}