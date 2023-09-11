import  {
  Announcement as AnnouncementIcon,
  Dashboard as DashboardIcon,
  FileCopy as FileCopyIcon,
  List as ListIcon,
  MenuBook as MenuBookIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  SpeakerNotes as SpeakerNotesIcon
} from "@mui/icons-material";

import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

import { useWindowSize } from 'usehooks-ts'
import useAuth from "@/hooks/useAuth";

const ROUTES = [
  { text: "Dashboard", route: "/", icon: <DashboardIcon />, testId: "dashboard" },

  {
    text: "Portefeuille",
    route: "/portfolio",
    icon: <PeopleIcon />,
    testId: "portfolio",
    permission: "portfolio",
  },
  {
    text: "Gebruikersbeheer",
    route: "/userManagement",
    icon: <PeopleIcon />,
    testId: "userManagement",
    accordian: true,
    permission: "users-management",
  },
  {
    text: "Offertes",
    route: "/quotes",
    icon: <FileCopyIcon />,
    testId: "quotes",
    permission: "quotes",
  },
  {
    text: "Meldingen beheer",
    route: "/notificationsAdmin",
    icon: <AnnouncementIcon />,
    testId: "notificationsAdmin",
    permission: "announcements-management",
  },
  {
    text: "Documenten",
    route: "/documents",
    icon: <MenuBookIcon />,
    testId: "documents",
    permission: "documents",
  },
  {
    text: "Documentenbeheer",
    route: "/documentsAdmin",
    icon: <FileCopyIcon />,
    testId: "documentsAdmin",
    permission: "documents-management",
  },
  {
    text: "Foutenlog",
    route: "/errorLogging",
    icon: <ListIcon />,
    testId: "errorLog",
    permission: "logging",
  },
  {
    text: "Kennisbeheer",
    route: "/FaqAdmin",
    icon: <MenuBookIcon />,
    testId: "faqAdmin",
    permission: "faqs-management",
  },
  {
    text: "Nieuwsbeheer",
    route: "/newsAdmin",
    icon: <SpeakerNotesIcon />,
    testId: "faqAdmin",
    permission: "news-management",
  },
  {
    text: "Instellingen",
    route: "/settings",
    icon: <SettingsIcon />,
    testId: "settings",
    accordian: true,
  },
];

export default function Drawer({ open, onClose }) {
  const { session } = useAuth();
  const { width } = useWindowSize();

  const menuItems = ROUTES.filter((route) =>
    !route.permission || session.permissions.includes(route.permission)
  );

  if (width <= 600) {
    return <MobileNavigation menuItems={menuItems} open={open} onClose={onClose} />
  } else {
    return <Navigation drawerWidth={300} menuItems={menuItems} open={open} onClose={onClose} />
  }
}
