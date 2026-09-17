import { z } from "zod";

export const customerContactSchema = z.object({
  name: z.string(),
  title: z.string(),
  phone: z.string(),
  email: z.string().email("電郵格式不正確").or(z.literal("")),
});

export const customerSchema = z.object({
  customerNo: z.string(),

  customerName: z.string().min(1, "請輸入客戶完整名稱"),

  uniformNo: z.string().regex(/^\d{8}$/, "統一編號必須為 8 碼數字"),

  taxRegistrationNo: z
    .string()
    .regex(/^\d{9}$/, "稅籍編號必須為 9 碼數字")
    .or(z.literal("")),

  industry: z.string(),
  organizationType: z.string(),
  organizationSubType: z.string(),

  registeredAddress: z.string(),
  contactAddress: z.string(),
  responsiblePerson: z.string(),
  taxBureau: z.string(),

  contacts: z.array(customerContactSchema),
});

export type CustomerFormValues = z.infer<typeof customerSchema>;
