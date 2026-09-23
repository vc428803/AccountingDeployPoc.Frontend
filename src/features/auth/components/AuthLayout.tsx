import type { ReactNode } from "react";
import bakertillyLogo from "../../../assets/brand/bakertilly-logo-white.png";
import loginHeroBg from "../../../assets/images/login-hero-bg.png";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* 左側品牌區 */}
        <section className="relative hidden min-h-screen overflow-hidden lg:block">
          <img src={loginHeroBg} alt="" className="absolute inset-0 h-full w-full object-cover" />

          {/* 深色遮罩，讓文字更清楚 */}
          <div className="absolute inset-0 bg-slate-950/25" />

          <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">
            <div>
              <img
                src={bakertillyLogo}
                alt="Baker Tilly"
                className="h-12 w-auto brightness-0 invert"
              />

              <div className="mt-12">
                <h1 className="text-[56px] xl:text-[68px] font-bold leading-[1.15] tracking-[-0.02em]">
                  專業洞察
                  <br />
                  成就更好的未來
                </h1>
              </div>
            </div>

            <p className="text-4xl xl:text-5xl font-semibold tracking-wide text-white/95">
              正風聯合會計師事務所
            </p>
          </div>
        </section>

        {/* 右側表單區 */}
        <section className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-10 sm:px-10">
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </div>
  );
}
