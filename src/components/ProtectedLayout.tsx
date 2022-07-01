import { Navigate, useOutlet } from "react-router-dom";
import { useAppSelector } from "../hooks/appHook";
import { AppBar } from "./AppBar";

export const ProtectedLayout = () => {
    const user = useAppSelector(state => state.userState.user);
    const outlet = useOutlet();

    if (!user) {
      return <Navigate to="/" />;
    }
  
    return (
      <div>
        <AppBar
          pages={[
            { label: "Settings", path: "settings" },
            { label: "Profile", path: "profile" }
          ]}
        />
        {outlet}
      </div>
    );
};
  