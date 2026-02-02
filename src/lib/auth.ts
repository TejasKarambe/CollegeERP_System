// src/lib/auth.ts
import { cookies } from "next/headers";

export async function isAuthenticated() {
  return (await cookies()).has("access_token");
}
