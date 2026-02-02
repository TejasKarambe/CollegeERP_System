"use client";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import { MENU_CONFIG } from "../navigation/menu.config";
import { filterMenusByPermission } from "../navigation/permission.utils";
import { useUser } from "../providers/UserProvider";

const drawerWidth = 240;

export default function Sidebar({ role }: { role: "Staff" | "Student" }) {
  const { user } = useUser();

  const menus = filterMenusByPermission(
    MENU_CONFIG[role],
    user.permissions
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
    >
      <Toolbar />
      <List>
        {menus.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            href={item.path}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
