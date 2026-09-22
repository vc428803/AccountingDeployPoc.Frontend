type ContractBasicInfo = {
  contractNo: string;
  status: string;
  startDate: string;
  endDate: string;
  engagementType: string;
  acceptingAccountant: string;
  paymentNote: string;
};

type ContractBasicInfoSectionProps = {
  value: ContractBasicInfo;
  onChange: (value: ContractBasicInfo) => void;
};

export default function ContractBasicInfoSection({
  value,
  onChange,
}: ContractBasicInfoSectionProps) {
  const updateField = (field: keyof ContractBasicInfo, fieldValue: string) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-900">委任基本資料</h2>

        <p className="mt-1 text-sm text-slate-500">填寫本次委任 / 合約的基本資料。</p>
      </div>

      <div className="grid gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
        <Field label="合約編號" required>
          <input
            value={value.contractNo}
            onChange={(event) => updateField("contractNo", event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="例如：CT20260001"
          />
        </Field>

        <Field label="委任狀態" required>
          <select
            value={value.status}
            onChange={(event) => updateField("status", event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">請選擇</option>
            <option value="進行中">進行中</option>
            <option value="已完成">已完成</option>
            <option value="暫停">暫停</option>
          </select>
        </Field>

        <Field label="委任期間" required>
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={value.startDate}
              onChange={(event) => updateField("startDate", event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <span className="text-slate-400">～</span>

            <input
              type="date"
              value={value.endDate}
              onChange={(event) => updateField("endDate", event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </Field>

        <Field label="委任性質" required>
          <select
            value={value.engagementType}
            onChange={(event) => updateField("engagementType", event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">請選擇</option>
            <option value="一般委任">一般委任</option>
          </select>
        </Field>

        <Field label="接案會計師" required>
          <select
            value={value.acceptingAccountant}
            onChange={(event) => updateField("acceptingAccountant", event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">請選擇</option>
            <option value="ACC001">王大明</option>
            <option value="ACC002">陳美玲</option>
          </select>
        </Field>

        <Field label="收款備註">
          <input
            value={value.paymentNote}
            onChange={(event) => updateField("paymentNote", event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="例如：依合約約定分期請款"
          />
        </Field>
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
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </span>

      {children}
    </label>
  );
}
