import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

type VerificationFormProps = {
  onBack: () => void;
};

export default function VerificationForm({ onBack }: VerificationFormProps) {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    const nextCodes = [...codes];
    nextCodes[index] = digit;

    setCodes(nextCodes);

    // 輸入完成後，自動跳到下一格
    if (digit && index < codes.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    // 當前格沒有值時按 Backspace，回到上一格
    if (event.key === "Backspace" && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verificationCode = codes.join("");
  const isComplete = verificationCode.length === 6;

  const handleVerify = () => {
    if (!isComplete) {
      return;
    }

    // Demo 固定驗證碼
    if (verificationCode !== "123456") {
      alert("驗證碼錯誤");
      return;
    }

    // Demo：驗證成功後進入 Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <button
        type="button"
        onClick={onBack}
        className="text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        ← 返回登入
      </button>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-slate-900">輸入驗證碼</h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          我們已將 6 位數驗證碼寄送至您的公司信箱
        </p>

        <p className="mt-1 text-sm font-medium text-slate-700">k***@bakertilly.com.tw</p>
      </div>

      {/* OTP 6 格輸入 */}
      <div className="mt-6 grid grid-cols-6 gap-2">
        {codes.map((code, index) => (
          <input
            key={index}
            ref={(element) => {
              inputRefs.current[index] = element;
            }}
            value={code}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            inputMode="numeric"
            maxLength={1}
            className="h-12 w-full rounded-lg border border-slate-300 text-center text-xl font-semibold text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-500">驗證碼有效時間：10 分鐘</p>

      <button
        type="button"
        onClick={handleVerify}
        disabled={!isComplete}
        className={[
          "mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white transition",
          isComplete ? "bg-blue-600 hover:bg-blue-700" : "cursor-not-allowed bg-slate-300",
        ].join(" ")}
      >
        確認驗證
      </button>

      <button
        type="button"
        onClick={() => {
          console.log("resend verification code");
        }}
        className="mt-3 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        重新寄送驗證碼
      </button>
    </div>
  );
}
