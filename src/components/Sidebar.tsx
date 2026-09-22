import { NavLink } from "react-router-dom";
import { Home, Users, ClipboardList, Clock3, BarChart3, Settings } from "lucide-react";
import bakertillyLogo from "../assets/brand/bakertilly-logo.png";

const navItems = [
  { to: "/", label: "首頁", icon: Home },
  { to: "/customers", label: "客戶管理", icon: Users },
  { to: "/cases", label: "案件管理", icon: ClipboardList },

  // 工作追蹤：以合約為單位追蹤 Q1～Q4 簽署狀況
  { to: "/work-tracking", label: "工作追蹤", icon: Clock3 },

  { to: "/reports", label: "報表分析", icon: BarChart3 },
  { to: "/settings", label: "系統設定", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 bg-slate-900 text-white lg:block">
      <div className="flex h-20 items-center bg-white px-5">
        <img src={bakertillyLogo} alt="Baker Tilly" className="h-9 w-auto object-contain" />
      </div>

      <nav className="space-y-1 p-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white",
              ].join(" ")
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
