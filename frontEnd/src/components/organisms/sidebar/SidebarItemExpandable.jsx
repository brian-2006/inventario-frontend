import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import { ExpandLess, ExpandMore, ArrowRightOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SidebarItemExpandable = ({ icon, text, open, onClick, subItems = [] }) => {
  const navigate = useNavigate();

  return (
    <>
      <ListItemButton onClick={onClick}>
        <ListItemIcon sx={{ color: "text.secondary" }}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subItems.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{ pl: 4 }}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>
                <ArrowRightOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarItemExpandable;
