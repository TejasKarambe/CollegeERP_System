export type MenuItem = {
  label: string;
  path: string;
  permission?: string;
};

export const MENU_CONFIG: Record<"Staff" | "Student", MenuItem[]> = {
  Staff: [
    {
      label: "Dashboard",
      path: "/secured/staff/dashboard",
      permission: "STAFF_DASHBOARD",
    },
    {
      label: "Profile",
      path: "/secured/staff/profile",
      permission: "STAFF_PROFILE",
    },
  ],
  Student: [
    {
      label: "Dashboard",
      path: "/secured/student/dashboard",
      permission: "STUDENT_DASHBOARD",
    },
    {
      label: "Profile",
      path: "/secured/student/profile",
      permission: "STUDENT_PROFILE",
    },
  ],
};
