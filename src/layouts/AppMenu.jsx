import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Settings, Logout } from "@mui/icons-material";

export default function AppMenu({ anchorEl, open, onClose, onLogout }) {
  return (
    <Menu
      id="basic-menu"
      open={open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      anchorEl={anchorEl}
      elevation={3}
      aria-label="menu"
    >
      <MenuItem onClick={onClose}>
        <ListItemIcon>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={onLogout}>
        <ListItemIcon>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}
