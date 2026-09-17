import { useState } from "react";
import { type UseFormReturn, useFieldArray } from "react-hook-form";
import { Plus, X } from "lucide-react";

import type { CustomerFormValues } from "../schemas/customerSchema";

type Props = {
  form: UseFormReturn<CustomerFormValues>;
  readOnly?: boolean;
};

export default function CustomerContactsSection({ form, readOnly = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const { control } = form;

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "contacts",
  });

  const handleSave = () => {
    if (editingIndex === null) {
      append(draft);
    } else {
      update(editingIndex, draft);
    }

    setDraft({
      name: "",
      title: "",
      phone: "",
      email: "",
    });

    setEditingIndex(null);
    setIsOpen(false);
  };

  const handleEdit = (index: number) => {
    const contact = fields[index];

    setDraft({
      name: contact.name,
      title: contact.title,
      phone: contact.phone,
      email: contact.email,
    });

    setEditingIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">聯絡人</h2>

            <p className="mt-1 text-sm text-slate-500">可建立多筆客戶聯絡人資料</p>
          </div>

          {!readOnly && (
            <button
              type="button"
              onClick={() => {
                setEditingIndex(null);

                setDraft({
                  name: "",
                  title: "",
                  phone: "",
                  email: "",
                });

                setIsOpen(true);
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              <Plus size={16} />
              新增聯絡人
            </button>
          )}
        </div>

        <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <TableHead>姓名</TableHead>
                <TableHead>職稱</TableHead>
                <TableHead>電話</TableHead>
                <TableHead>電郵</TableHead>

                {!readOnly && <TableHead>操作</TableHead>}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {fields.map((contact, index) => (
                <tr key={contact.id}>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.title}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.email}</TableCell>

                  {!readOnly && (
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleEdit(index)}
                          className="text-sm font-medium text-slate-700 hover:text-slate-900"
                        >
                          編輯
                        </button>

                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-sm font-medium text-red-600 hover:text-red-700"
                        >
                          刪除
                        </button>
                      </div>
                    </TableCell>
                  )}
                </tr>
              ))}

              {fields.length === 0 && (
                <tr>
                  <td
                    colSpan={readOnly ? 4 : 5}
                    className="px-4 py-8 text-center text-sm text-slate-400"
                  >
                    尚無聯絡人資料
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="關閉"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/30"
          />

          <aside className="absolute right-0 top-0 h-full w-full max-w-lg overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <h2 className="text-lg font-semibold text-slate-900">
                {editingIndex === null ? "新增聯絡人" : "編輯聯絡人"}
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-5 p-5">
              <DrawerField label="姓名">
                <input
                  value={draft.name}
                  onChange={(e) =>
                    setDraft((current) => ({
                      ...current,
                      name: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
                />
              </DrawerField>

              <DrawerField label="職稱">
                <input
                  value={draft.title}
                  onChange={(e) =>
                    setDraft((current) => ({
                      ...current,
                      title: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
                />
              </DrawerField>

              <DrawerField label="電話">
                <input
                  value={draft.phone}
                  onChange={(e) =>
                    setDraft((current) => ({
                      ...current,
                      phone: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
                />
              </DrawerField>

              <DrawerField label="電郵">
                <input
                  type="email"
                  value={draft.email}
                  onChange={(e) =>
                    setDraft((current) => ({
                      ...current,
                      email: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
                />
              </DrawerField>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-200 p-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700"
              >
                取消
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white"
              >
                {editingIndex === null ? "新增" : "儲存變更"}
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function TableHead({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">{children}</th>;
}

function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-3 text-sm text-slate-700">{children}</td>;
}

function DrawerField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>

      {children}
    </label>
  );
}
