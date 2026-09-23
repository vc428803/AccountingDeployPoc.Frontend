import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";
import VerificationForm from "../components/VerificationForm";

type AuthStep = "login" | "verify";

export default function AuthPage() {
  const [step, setStep] = useState<AuthStep>("login");

  return (
    <AuthLayout>
      {step === "login" ? (
        <LoginForm
          onSuccess={() => setStep("verify")}
        />
      ) : (
        <VerificationForm
          onBack={() => setStep("login")}
        />
      )}
    </AuthLayout>
  );
}