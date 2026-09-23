import { useRef, useState } from "react";

type VerificationFormProps = {
  email: string;
  onBack: () => void;
  onSuccess: () => void;
};

const DEMO_CODE = "123456";

export default function VerificationForm({ email, onBack, onSuccess }: VerificationFormProps) {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  function handleChange(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);

    const next = [...digits];
    next[index] = digit;
    setDigits(next);

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const code = digits.join("");

    if (code.length !== 6) {
      setError("請完整輸入 6 碼驗證碼");
      return;
    }

    if (code !== DEMO_CODE) {
      setError("驗證碼錯誤，請重新輸入");
      return;
    }

    setError("");
    onSuccess();
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Email 驗證</h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        系統已將 6 碼驗證碼寄送至：
        <br />
        <span className="font-medium text-slate-700">{email}</span>
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <label className="mb-3 block text-sm font-medium text-slate-700">驗證碼</label>

        <div className="grid grid-cols-6 gap-2">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(element) => {
                inputRefs.current[index] = element;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(event) => handleChange(index, event.target.value)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              className="h-12 w-full rounded-lg border border-slate-300 text-center text-xl font-semibold outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          ))}
        </div>

        {error && (
          <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
        >
          驗證並登入系統
        </button>

        <div className="mt-5 flex items-center justify-between text-sm">
          <button
            type="button"
            onClick={onBack}
            className="font-medium text-slate-500 hover:text-slate-700"
          >
            返回登入
          </button>

          <button type="button" className="font-medium text-blue-600 hover:text-blue-700">
            重新寄送驗證碼
          </button>
        </div>

        <p className="mt-5 text-xs text-slate-400">Demo 驗證碼：123456</p>
      </form>
    </div>
  );
}
