import { Bell, UserCircle } from "lucide-react";

export default function TopHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <div className="text-sm font-medium text-slate-700">
          正風聯合會計師事務所
        </div>
      </div>

      <div className="flex items-center gap-4 text-slate-500">
        <Bell size={18} />
        <div className="flex items-center gap-2">
          <UserCircle size={20} />
          <span className="text-sm">使用者</span>
        </div>
      </div>
    </header>
  );
}