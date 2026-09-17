const customer = {
  customerNo: "C0001",
  customerName: "範例科技股份有限公司",
  uniformNo: "12345678",
  taxRegistrationNo: "123456789",
  industry: "資訊服務業",
  organizationType: "股份有限公司",
  organizationSubType: "一般企業",

  registeredAddress: "台北市中正區範例路100號",
  contactAddress: "台北市中正區範例路100號",
  responsiblePerson: "王大明",
  taxBureau: "財政部臺北國稅局",

  contacts: [
    {
      id: 1,
      name: "陳小姐",
      title: "財務經理",
      phone: "02-1234-5678",
      email: "chen@example.com",
    },
    {
      id: 2,
      name: "林先生",
      title: "會計主任",
      phone: "02-2345-6789",
      email: "lin@example.com",
    },
  ],
};

function InfoItem({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div>
      <div className="text-xs font-medium text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-sm text-slate-900">
        {value || "—"}
      </div>
    </div>
  );
}

export default function CustomerBasicInfo() {
  return (
    <div className="space-y-6">
      {/* 基本資料 */}
      <section>
        <h2 className="mb-4 text-base font-semibold text-slate-900">
          基本資料
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <InfoItem
            label="客戶編號"
            value={customer.customerNo}
          />

          <InfoItem
            label="客戶名稱"
            value={customer.customerName}
          />

          <InfoItem
            label="統一編號"
            value={customer.uniformNo}
          />

          <InfoItem
            label="稅籍編號"
            value={customer.taxRegistrationNo}
          />

          <InfoItem
            label="行業別"
            value={customer.industry}
          />

          <InfoItem
            label="組織類型"
            value={customer.organizationType}
          />

          <InfoItem
            label="子選項 / 說明"
            value={customer.organizationSubType}
          />
        </div>
      </section>

      <div className="border-t border-slate-200" />

      {/* 聯絡資訊 */}
      <section>
        <h2 className="mb-4 text-base font-semibold text-slate-900">
          聯絡資訊
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <InfoItem
            label="登記地址"
            value={customer.registeredAddress}
          />

          <InfoItem
            label="聯絡地址"
            value={customer.contactAddress}
          />

          <InfoItem
            label="負責人"
            value={customer.responsiblePerson}
          />

          <InfoItem
            label="所屬國稅局"
            value={customer.taxBureau}
          />
        </div>
      </section>

      <div className="border-t border-slate-200" />

      {/* 聯絡人 */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-900">
            聯絡人
          </h2>

          <span className="text-sm text-slate-500">
            共 {customer.contacts.length} 筆
          </span>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                  姓名
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                  職稱
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                  電話
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                  電郵
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {customer.contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="px-4 py-3 text-sm text-slate-900">
                    {contact.name}
                  </td>

                  <td className="px-4 py-3 text-sm text-slate-600">
                    {contact.title}
                  </td>

                  <td className="px-4 py-3 text-sm text-slate-600">
                    {contact.phone}
                  </td>

                  <td className="px-4 py-3 text-sm text-slate-600">
                    {contact.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}