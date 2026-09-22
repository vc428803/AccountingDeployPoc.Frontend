type SignRecord = {
  id: string;
  quarter: 1 | 2 | 3 | 4;

  signedByUserId: string;
  signedByName: string;

  role?: "lead" | "secondary" | "other";

  signedAt: string;
};
type ContractWorkTracking = {
  contractId: string;
  contractNo: string;
  customerName: string;

  serviceSummary: string[];

  signRecords: SignRecord[];
};
