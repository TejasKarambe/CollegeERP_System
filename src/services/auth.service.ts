import { api } from "@/lib/api";

export type MeResponse = {
  userId: number;
  role: "Staff" | "Student";
  permissions?: string[];
};

export const getMe = async (): Promise<MeResponse> => {
  const { data } = await api.get("/api/auth/me");
  return data;
};

export const logout = async () => {
  await api.post("/api/auth/logout");
};
