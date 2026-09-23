import { useState } from "react";
import bakertillyLogo from "../../../assets/brand/bakertilly-logo.png";

type LoginFormProps = {
  onSuccess: () => void;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [employeeNo, setEmployeeNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setError("");

    if (!employeeNo || !password) {
      setError("請輸入員工編號與密碼");
      return;
    }

    // 模擬第一階段登入
    if (employeeNo !== "EMP001" || password !== "123456") {
      setError("員工編號或密碼錯誤");
      return;
    }

    // 帳密正確後才進 Email 驗證碼畫面
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6 lg:hidden">
        <img src={bakertillyLogo} alt="Baker Tilly" className="w-48" />
      </div>

      <h2 className="text-2xl font-semibold text-slate-900">歡迎登入</h2>

      <p className="mt-2 text-sm text-slate-500">請輸入您的員工編號與密碼</p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">員工編號</label>

          <input
            value={employeeNo}
            onChange={(event) => setEmployeeNo(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="請輸入員工編號"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">密碼</label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="請輸入密碼"
          />
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</div>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
      >
        登入
      </button>

      <button
        type="button"
        className="mt-4 w-full text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        忘記密碼？
      </button>
    </form>
  );
}
