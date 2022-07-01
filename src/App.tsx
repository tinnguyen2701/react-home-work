import { Routes, Route } from "react-router-dom";
import 'antd/dist/antd.min.css';
import './App.css';
import { HomePage } from "./pages/Home.page";
import { LoginPage } from "./pages/Login.page";
import { ProfilePage } from "./pages/Profile.page";
import { SettingsPage } from "./pages/Setting.page";
import Layout from "./components/Layout";
import RequireUser from "./components/requireUser";
import AdminPage from "./pages/admin.page";
import UnauthorizePage from "./pages/unauthorize.page";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* Private Route */}
        <Route element={<RequireUser allowedRoles={['user', 'admin']} />}>
          <Route path='/dashboard/profile' element={<ProfilePage />} />
          <Route path='/dashboard/settings' element={<SettingsPage />} />
        </Route>
        <Route element={<RequireUser allowedRoles={['admin']} />}>
          <Route path='admin' element={<AdminPage />} />
        </Route>
        <Route path='unauthorized' element={<UnauthorizePage />} />
      </Route>

      <Route path='login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
