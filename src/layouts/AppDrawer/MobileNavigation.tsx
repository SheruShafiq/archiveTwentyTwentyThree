import {
  SwipeableDrawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

export type MobileNavigationProps = {
  menuItems: route[];
  open: boolean;
  onClose: () => void;
};

export type route = {
  text: string;
  route: string;
  icon: React.ReactNode;
  testId: string;
  permission?: string;
}

export default function MobileNavigation({ menuItems, open, onClose }: MobileNavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isCurrentRoute = (itemRoute: string) =>
    location.pathname.startsWith(itemRoute) &&
    (itemRoute !== "/" || location.pathname === "/");

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={() => { }}
      sx={{
        display: { xs: "block", sm: "none" },
      }}
      PaperProps={{
        sx: {
          width: "100%",
        },
      }}
    >
      {menuItems.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              px: 2.5,
              bgcolor: isCurrentRoute(item.route) ? "#E4EAF2" : "transparent",
              borderRadius: "8px",
              color: isCurrentRoute(item.route) ? "#111927" : "#6C737F",
              "&:hover": {
                bgcolor: "#E4EAF2",
              },
            }}
            onClick={() => {
              onClose();
              navigate(item.route);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
                color: isCurrentRoute(item.route) ? "#155793" : "#6C737F",
                mr: 3,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: 600,
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </SwipeableDrawer>
  );
};
