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

const drawerWidth = 240;

export default function Sidebar({ role }: { role: "Staff" | "Student" }) {
  const menus = MENU_CONFIG[role];

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
