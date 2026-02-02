import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import AppShell from "@/components/layout/AppShell";
import { UserProvider } from "@/components/providers/UserProvider";

export default async function SecuredLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get("access_token");
  if (!token) redirect("/login");

  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}
