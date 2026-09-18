import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CustomerForm from "../components/CustomerForm";
import CustomerContractHistory from "../components/CustomerContractHistory";
import type { CustomerFormValues } from "../schemas/customerSchema";

export default function CustomerDetailPage() {
  const { customerId } = useParams();
  const originalCustomerData: CustomerFormValues = {
    customerNo: customerId ?? "",
    customerName: "瀚宇科技股份有限公司",
    uniformNo: "87654321",
    taxRegistrationNo: "987654321",
    industry: "資訊服務業",
    organizationType: "股份有限公司",
    organizationSubType: "一般企業",
    registeredAddress: "新北市板橋區中山路一段100號10樓",
    contactAddress: "新北市板橋區中山路一段100號10樓",
    responsiblePerson: "張志豪",
    taxBureau: "財政部北區國稅局",
    contacts: [
      {
        name: "陳怡君",
        title: "財務經理",
        phone: "02-2955-8899",
        email: "yijun.chen@example.com",
      },
    ],
  };
  const [activeTab, setActiveTab] = useState<"basic" | "engagements">("basic");
  const [isEditing, setIsEditing] = useState(false);
  const [customerData, setCustomerData] = useState<CustomerFormValues>(originalCustomerData);
  const form = useForm<CustomerFormValues>({
    defaultValues: customerData,
  });

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-slate-500">客戶管理 / {customerId}</p>

        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">客戶資料</h1>
            <p className="mt-1 text-sm text-slate-500">客戶編號：{customerId}</p>
          </div>

          {activeTab === "basic" && !isEditing && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              編輯資料
            </button>
          )}
          {activeTab === "basic" && isEditing && (
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  form.reset(customerData);
                  setIsEditing(false);
                }}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                取消修改
              </button>

              <button
                type="button"
                onClick={form.handleSubmit((data) => {
                  console.log("Updated Customer:", data);

                  setCustomerData(data);
                  form.reset(data);
                  setIsEditing(false);
                })}
                className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              >
                儲存修改
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="border-b border-slate-200">
        <nav className="flex gap-6">
          <button
            type="button"
            onClick={() => setActiveTab("basic")}
            className={`border-b-2 px-1 py-3 text-sm font-medium transition-colors ${
              activeTab === "basic"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            基本資料
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("engagements")}
            className={`border-b-2 px-1 py-3 text-sm font-medium transition-colors ${
              activeTab === "engagements"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            委任 / 案件紀錄
          </button>
        </nav>
      </div>

      {activeTab === "basic" && <CustomerForm mode={isEditing ? "edit" : "view"} form={form} />}
      {activeTab === "engagements" && <CustomerContractHistory />}
    </div>
  );
}
