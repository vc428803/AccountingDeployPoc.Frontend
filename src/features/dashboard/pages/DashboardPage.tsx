import PendingContractApprovalSection from "../components/PendingContractApprovalSection";
import ExpiringContractSection from "../components/ExpiringContractSection";
import OverdueBorrowingSection from "../components/OverdueBorrowingSection";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">儀表板</h1>
        <p className="mt-1 text-sm text-slate-500">查看目前需要處理的工作與提醒。</p>
      </div>

      <PendingContractApprovalSection />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ExpiringContractSection />
        <OverdueBorrowingSection />
      </div>
    </div>
  );
}
