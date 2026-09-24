type ApprovalStatus = "approved" | "in_progress" | "pending" | "not_started";

type ApprovalStep = {
  id: string;
  order: number;
  roleName: string;
  approverName: string | null;
  status: ApprovalStatus;
  approvedAt?: string;
};

type ApprovalTimelineProps = {
  steps: ApprovalStep[];
};

const statusLabel: Record<ApprovalStatus, string> = {
  approved: "已完成",
  in_progress: "進行中",
  pending: "待簽核",
  not_started: "尚未開始",
};

function getStatusStyle(status: ApprovalStatus) {
  switch (status) {
    case "approved":
      return {
        circle: "bg-emerald-500 text-white",
        badge: "bg-emerald-50 text-emerald-700",
        line: "bg-emerald-300",
      };

    case "in_progress":
      return {
        circle: "bg-blue-600 text-white",
        badge: "bg-blue-50 text-blue-700",
        line: "bg-blue-300",
      };

    case "pending":
      return {
        circle: "bg-amber-500 text-white",
        badge: "bg-amber-50 text-amber-700",
        line: "bg-slate-200",
      };

    default:
      return {
        circle: "bg-slate-300 text-white",
        badge: "bg-slate-100 text-slate-600",
        line: "bg-slate-200",
      };
  }
}

export default function ApprovalTimeline({ steps }: ApprovalTimelineProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-900">簽核流程</h2>

        <p className="mt-1 text-sm text-slate-500">顯示目前合約各簽核角色的處理狀態與紀錄。</p>
      </div>

      <div className="p-6">
        <div className="relative">
          {steps.map((step, index) => {
            const style = getStatusStyle(step.status);
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="relative flex gap-5 pb-8 last:pb-0">
                {/* 左側時間軸 */}
                <div className="relative flex w-10 shrink-0 justify-center">
                  {!isLast && (
                    <div className={`absolute top-9 h-[calc(100%+4px)] w-0.5 ${style.line}`} />
                  )}

                  <div
                    className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold shadow-sm ${style.circle}`}
                  >
                    {step.status === "approved" ? "✓" : step.order}
                  </div>
                </div>

                {/* 右側步驟內容 */}
                <div
                  className={`flex-1 rounded-xl border p-4 ${
                    step.status === "in_progress"
                      ? "border-blue-200 bg-blue-50/40"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-slate-900">{step.roleName}</h3>

                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-medium ${style.badge}`}
                        >
                          {statusLabel[step.status]}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-slate-600">
                        {step.approverName ?? "尚未指定"}
                      </p>

                      {step.approvedAt && (
                        <p className="mt-1 text-sm text-slate-500">簽核時間：{step.approvedAt}</p>
                      )}
                    </div>

                    {step.status === "in_progress" && (
                      <button
                        type="button"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      >
                        進行簽核
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
