import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";
import VerificationForm from "../components/VerificationForm";

type AuthStep = "login" | "verification";

export default function AuthPage() {
  const [step, setStep] = useState<AuthStep>("login");
  const navigate = useNavigate();

  function handleLoginSuccess() {
    // 先模擬：登入成功後進入驗證碼畫面
    setStep("verification");
  }

  function handleVerificationSuccess() {
    // 先模擬：驗證成功後進 dashboard
    navigate("/dashboard");
  }

  return (
    <AuthLayout>
      {step === "login" ? (
        <LoginForm onSuccess={handleLoginSuccess} />
      ) : (
        <VerificationForm
          email="vic.chiao@bakertilly.com.tw"
          onBack={() => setStep("login")}
          onSuccess={handleVerificationSuccess}
        />
      )}
    </AuthLayout>
  );
}
