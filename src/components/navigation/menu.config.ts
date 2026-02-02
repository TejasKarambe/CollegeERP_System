export type MenuItem = {
  label: string;
  path: string;
};

export const MENU_CONFIG: Record<"Staff" | "Student", MenuItem[]> = {
  Staff: [
    {
      label: "Dashboard",
      path: "/secured/staff/dashboard",
    },
    {
      label: "Profile",
      path: "/secured/staff/profile",
    },
  ],
  Student: [
    {
      label: "Dashboard",
      path: "/secured/student/dashboard",
    },
    {
      label: "Profile",
      path: "/secured/student/profile",
    },
  ],
};
