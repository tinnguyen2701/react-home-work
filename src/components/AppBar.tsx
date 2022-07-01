import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/appHook";
import { useLogoutUserMutation } from "../services/authApi";

export const AppBar = ({ pages }: {pages: any}) => {
  const navigate = useNavigate();
  const user = useAppSelector(state => state.userState.user);

  const [triggerLogout, {isSuccess: isLogoutSuccess}] = useLogoutUserMutation();


  const handleLogout = () => {
    triggerLogout().unwrap().then(() => {
      if(isLogoutSuccess) {
        navigate("/", { replace: true })
      }
    });
  }

  const handleCloseNavMenu = (path: string) => {
    if (path) {
      navigate(path);
    }
  };
  
  return (
    <>
        <ul>
            {pages?.map((page: any) => (
                <li key={page.label} onClick={() => handleCloseNavMenu(page.path)}>{page.label}</li>
            ))}

            {!!user && (
                <li key={"logout"} onClick={() => handleLogout()}>Logout</li>
            )}
        </ul>
    </>
              
  );
};
