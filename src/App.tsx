import { Routes, Route } from "react-router-dom";
import './App.css';
import { HomeLayout } from "./components/HomeLayout";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { ProfilePage } from "./pages/Profile";
import { SettingsPage } from "./pages/Setting";
import 'antd/dist/antd.min.css';
import { userApi } from "./services/userApi";
import { useCookies } from 'react-cookie';

function App() {
  const [cookies] = useCookies(['logged_in']);
  const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const loading = isLoading || isFetching;

  const user = userApi.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => data,
  });

  if (loading) {
    return <h1>.....loading.......</h1>;
  }

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {
        (cookies.logged_in || user) &&
          <Route path="/dashboard" element={<ProtectedLayout />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
      }
      
    </Routes>
  );
}

export default App;
