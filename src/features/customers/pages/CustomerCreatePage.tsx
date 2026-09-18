import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import CustomerForm from "../components/CustomerForm";
import { customerSchema, type CustomerFormValues } from "../schemas/customerSchema";

export default function CustomerCreatePage() {
  const navigate = useNavigate();
  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(customerSchema),

    defaultValues: {
      customerNo: "",
      customerName: "",
      uniformNo: "",
      taxRegistrationNo: "",
      industry: "",
      organizationType: "",
      organizationSubType: "",

      registeredAddress: "",
      contactAddress: "",
      responsiblePerson: "",
      taxBureau: "",

      contacts: [],
    },
  });

  const onSubmit = (data: CustomerFormValues) => {
    console.log("Customer Form Data:", data);

    // 目前先模擬新增成功
    const mockCustomerId = "C20260002";

    navigate(`/customers/${mockCustomerId}`);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <p className="text-sm text-slate-500">客戶管理 / 新增客戶</p>

        <h1 className="mt-1 text-2xl font-semibold text-slate-900">新增客戶</h1>

        <p className="mt-1 text-sm text-slate-500">建立新承接客戶基本資料</p>
      </div>

      <CustomerForm mode="create" form={form} />

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => navigate("/customers")}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          取消
        </button>

        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
        >
          儲存
        </button>
      </div>
    </form>
  );
}
