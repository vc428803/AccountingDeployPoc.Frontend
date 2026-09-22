type ServiceDepartmentValue = {
  primaryDepartmentId: string;
  primaryStaffId: string;
  collaborationDepartmentId: string;
  collaborationStaffId: string;
};

type ServiceDepartmentSectionProps = {
  value: ServiceDepartmentValue;
  onChange: (value: ServiceDepartmentValue) => void;
};

const inputClassName =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

export default function ServiceDepartmentSection({
  value,
  onChange,
}: ServiceDepartmentSectionProps) {
  const updateField = (field: keyof ServiceDepartmentValue, fieldValue: string) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* 區塊標題 */}
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-900">服務部門</h2>

        <p className="mt-1 text-sm text-slate-500">
          設定本案件的主服務部門、協同服務部門及相關人員。
        </p>
      </div>

      <div className="grid gap-5 p-5 md:grid-cols-2">
        {/* 主服務部門 */}
        <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50/50 p-4">
          <h3 className="font-medium text-slate-900">主服務部門</h3>

          <Field label="部門" required>
            <select
              value={value.primaryDepartmentId}
              onChange={(event) => updateField("primaryDepartmentId", event.target.value)}
              className={inputClassName}
            >
              <option value="">請選擇部門</option>
              <option value="AUDIT">審計部</option>
              <option value="TAX">稅務部</option>
              <option value="ADVISORY">顧問部</option>
            </select>
          </Field>

          <Field label="人員" required>
            <select
              value={value.primaryStaffId}
              onChange={(event) => updateField("primaryStaffId", event.target.value)}
              className={inputClassName}
            >
              <option value="">請選擇人員</option>
              <option value="EMP001">張雅婷</option>
              <option value="EMP002">王志明</option>
            </select>
          </Field>
        </div>

        {/* 協同服務部門 */}
        <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50/50 p-4">
          <h3 className="font-medium text-slate-900">協同服務部門</h3>

          <Field label="部門">
            <select
              value={value.collaborationDepartmentId}
              onChange={(event) => updateField("collaborationDepartmentId", event.target.value)}
              className={inputClassName}
            >
              <option value="">請選擇部門</option>
              <option value="AUDIT">審計部</option>
              <option value="TAX">稅務部</option>
              <option value="ADVISORY">顧問部</option>
            </select>
          </Field>

          <Field label="人員">
            <select
              value={value.collaborationStaffId}
              onChange={(event) => updateField("collaborationStaffId", event.target.value)}
              className={inputClassName}
            >
              <option value="">請選擇人員</option>
              <option value="EMP003">陳志明</option>
              <option value="EMP004">林佳穎</option>
            </select>
          </Field>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

function Field({ label, required = false, children }: FieldProps) {
  return (
    <div className="min-w-0">
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {children}
    </div>
  );
}
