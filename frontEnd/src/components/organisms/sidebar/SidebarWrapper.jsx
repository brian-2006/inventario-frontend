import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Inventory2Outlined,
  LocalShippingOutlined,
  AssignmentOutlined,
} from "@mui/icons-material";

import SidebarItemExpandable from "./SidebarItemExpandable";

const SidebarWrapper = () => {
  const [openInventario, setOpenInventario] = useState(false);
  const [openRecepcion, setOpenRecepcion] = useState(false);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          bgcolor: "#F9FAFB",
          borderRight: "1px solid #E0E0E0",
        },
      }}
    >
      <List>
        <SidebarItemExpandable
          icon={<Inventory2Outlined />}
          text="Inventario"
          open={openInventario}
          onClick={() => setOpenInventario(!openInventario)}
          subItems={[
            { label: "Inventario principal", path: "/inventario/principal" },
            { label: "Subinventario", path: "/inventario/subinventario" },
            { label: "Devoluciones", path: "/inventario/devoluciones" },
          ]}
        />

        <Divider sx={{ my: 1 }} />

        <SidebarItemExpandable
          icon={<LocalShippingOutlined />}
          text="Recepción técnica"
          open={openRecepcion}
          onClick={() => setOpenRecepcion(!openRecepcion)}
          subItems={[
            { label: "Registrar recepción", path: "/recepcion/nueva" },
            { label: "Historial de recepciones", path: "/recepcion/historial" },
          ]}
        />

        <Divider sx={{ my: 1 }} />

        <ListItemButton>
          <ListItemIcon>
            <AssignmentOutlined />
          </ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default SidebarWrapper;
