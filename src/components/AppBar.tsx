import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AppBar = ({ pages }: {pages: any}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleCloseNavMenu = (path: string) => {
    setAnchorElNav(null);
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
                <li key={"logout"} onClick={logout}>Logout</li>
            )}
        </ul>
    </>
              
  );
};
