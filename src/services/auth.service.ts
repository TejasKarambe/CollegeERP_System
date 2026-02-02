import { api } from "@/lib/api";

export type MeResponse = {
  userId: number;
  role: "Staff" | "Student";
  name?: string;
};

export const getMe = async (): Promise<MeResponse> => {
  const { data } = await api.get("/api/auth/me");
  return data;
};
