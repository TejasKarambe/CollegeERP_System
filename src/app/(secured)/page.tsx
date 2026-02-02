import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function SecuredIndex() {
  const token = (await cookies()).get("access_token")?.value;
  if (!token) redirect("/login");

  const payload: any = jwt.decode(token);

  if (payload?.role === "Staff") {
    redirect("/secured/staff/dashboard");
  }

  if (payload?.role === "Student") {
    redirect("/secured/student/dashboard");
  }

  redirect("/login");
}
