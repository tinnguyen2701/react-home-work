import { Navigate, useOutlet } from "react-router-dom";
import { useAppSelector } from "../hooks/appHook";
import { userApi } from "../services/userApi";
import { AppBar } from "./AppBar";

export const HomeLayout = () => {
  const user = useAppSelector(state => state.userState.user);
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Home", path: "/" },
          { label: "Login", path: "/login" }
        ]}
      />
      {outlet}
    </div>
  );
};
