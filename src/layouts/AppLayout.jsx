import { useMemo, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import SessionTimeout from "@/components/SessionTimeout";
import MyAppBar from './AppBar'
import AppDrawer from "./AppDrawer";
import { Box } from "@mui/system";

const ROUTE_PERMISSIONS = {
  "/documents": ["documents"],
};

export default function AppLayout({ unauthorized }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { session, logout } = useAuth();
  const location = useLocation();

  const authorized = useMemo(() => {
    const required_permissions = ROUTE_PERMISSIONS[location.pathname];
    return session.permissions && (!required_permissions || required_permissions.length === 0 || required_permissions.some(r=> session.permissions.includes(r)))
  }, [location.pathname, session.permissions])

  if (!session.user) {
    return <Navigate to="/login" replace/>
  }

  const toggleDrawer = () => {
    setDrawerOpen((state) => !state);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <MyAppBar
        onLogout={logout}
        onClickDrawerMenu={toggleDrawer}
      />
      <Box sx={{ display: 'flex', width: '100%' }}>
        <AppDrawer open={drawerOpen} onClose={toggleDrawer} />
        <Box
          sx={{
            padding: "1.5rem",
            width: "100%",
            overflow: "scroll",
            paddingTop: "5.25rem",
            paddingBottom: "1.5rem",
            px: "1.5rem",
          }}
        >
          {authorized ? <Outlet /> : unauthorized }
        </Box>
      </Box>
      <SessionTimeout />
    </Box>
  );
}
