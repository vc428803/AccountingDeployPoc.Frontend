import type { UseFormReturn } from "react-hook-form";
import type { CustomerFormValues } from "../schemas/customerSchema";
import CustomerContactsSection from "./CustomerContactsSection";

type CustomerFormMode = "create" | "edit" | "view";

type CustomerFormProps = {
  mode: CustomerFormMode;
  form: UseFormReturn<CustomerFormValues>;
};

export default function CustomerForm({ mode, form }: CustomerFormProps) {
  const readOnly = mode === "view";

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-semibold text-slate-900">基本資料</h2>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <FormField label="客戶編號">
            <input
              type="text"
              readOnly={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            />
          </FormField>

          <FormField label="客戶名稱" error={errors.customerName?.message}>
            <input
              {...register("customerName")}
              type="text"
              readOnly={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            />
          </FormField>

          <FormField label="統一編號" error={errors.uniformNo?.message}>
            <input
              {...register("uniformNo")}
              type="text"
              maxLength={8}
              readOnly={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            />
          </FormField>

          <FormField label="稅籍編號" error={errors.taxRegistrationNo?.message}>
            <input
              {...register("taxRegistrationNo")}
              type="text"
              maxLength={9}
              readOnly={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            />
          </FormField>

          <FormField label="行業別">
            <select
              {...register("industry")}
              disabled={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            >
              <option value="">請選擇</option>
              <option value="資訊服務業">資訊服務業</option>
              <option value="製造業">製造業</option>
              <option value="批發零售業">批發零售業</option>
              <option value="專業服務業">專業服務業</option>
            </select>
          </FormField>

          <FormField label="組織類型">
            <select
              {...register("organizationType")}
              disabled={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            >
              <option value="">請選擇</option>
              <option value="股份有限公司">股份有限公司</option>
              <option value="有限公司">有限公司</option>
              <option value="行號">行號</option>
              <option value="其他">其他</option>
            </select>
          </FormField>

          <FormField label="子選項 / 說明">
            <input
              type="text"
              readOnly={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            />
          </FormField>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-semibold text-slate-900">聯絡資訊</h2>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormField label="登記地址">
            <input
              type="text"
              readOnly={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            />
          </FormField>

          <FormField label="聯絡地址">
            <input
              type="text"
              readOnly={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            />
          </FormField>

          <FormField label="負責人">
            <input
              type="text"
              readOnly={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            />
          </FormField>

          <FormField label="所屬國稅局">
            <select
              {...register("taxBureau")}
              disabled={readOnly}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
            >
              <option value="">請選擇</option>
              <option value="財政部臺北國稅局">財政部臺北國稅局</option>
              <option value="財政部北區國稅局">財政部北區國稅局</option>
              <option value="財政部中區國稅局">財政部中區國稅局</option>
              <option value="財政部南區國稅局">財政部南區國稅局</option>
              <option value="財政部高雄國稅局">財政部高雄國稅局</option>
            </select>
          </FormField>
        </div>
      </section>
      <CustomerContactsSection form={form} readOnly={readOnly} />
    </div>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>

      {children}

      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
