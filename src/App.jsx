import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "@/contexts/AuthProvider";
import RecentlyContextProvider from "@/contexts/RecentlyProvider";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

import DashboardPage from "@/pages/Dashboard";
import LoginPage from "@/pages/Login";
import CustomersPage from "@/pages/Customers";
import CustomersShowPage from "@/pages/Customers/Show";
import QuotesPage from "@/pages/Quotes";
import DocumentsPage from "@/pages/Documents";
import SettingsPage from "@/pages/Settings";
import AppLayout from "@/layouts/AppLayout";
import Unauthorized from "@/pages/Unauthorized";
import MissingPage from "@/pages/Missing";

function App() {
  return (
    <AuthContextProvider>
      <RecentlyContextProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<AppLayout unauthorized={<Unauthorized/>}/>}>
              <Route index element={<DashboardPage />} />
              <Route path="/portfolio" element={<CustomersPage />} />
              <Route path="/portfolio/:id" element={<CustomersShowPage />} />
              <Route path="/quotes" element={<QuotesPage />} />
              <Route path="/documents" element={<DocumentsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<MissingPage />} />
          </Routes>
        </LocalizationProvider>
      </RecentlyContextProvider>
    </AuthContextProvider>
  )
}

export default App
