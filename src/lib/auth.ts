import { useUser } from "@/components/providers/UserProvider";

export const useRequireRole = (role: "Staff" | "Student") => {
  const { user } = useUser();
  if (user.role !== role) {
    window.location.href = "/secured/forbidden";
  }
};
