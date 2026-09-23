import bakertillyLogo from "../../../assets/brand/bakertilly-logo.png";
type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        {/* 品牌區 */}
        <div className="hidden border-r border-slate-200 bg-white p-12 lg:flex lg:flex-col lg:justify-between">
          <div>
            <img src={bakertillyLogo} alt="Baker Tilly" className="w-60" />

            <div className="mt-16">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900">
                專業洞察
                <br />
                成就更好的未來
              </h1>

              <p className="mt-5 text-base text-slate-500">
                Professional Insight
                <br />A Brighter Tomorrow
              </p>
            </div>
          </div>

          <div className="text-sm text-slate-500">
            <p className="font-medium text-slate-700">正風聯合會計師事務所</p>
            <p>Baker Tilly Taiwan</p>
          </div>
        </div>

        {/* 表單區 */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}
