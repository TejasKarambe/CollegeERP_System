import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import AppShell from "@/components/layout/AppShell";

export default async function SecuredLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get("access_token")?.value;
  if (!token) redirect("/login");

  const payload: any = jwt.decode(token);
  if (!payload?.role) redirect("/login");

  return (
    <AppShell role={payload.role}>
      {children}
    </AppShell>
  );
}
