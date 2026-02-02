import { MenuItem } from "./menu.config";

export const filterMenusByPermission = (
  menus: MenuItem[],
  permissions?: string[]
) => {
  if (!permissions || permissions.length === 0) return menus;

  return menus.filter(
    (menu) =>
      !menu.permission || permissions.includes(menu.permission)
  );
};
