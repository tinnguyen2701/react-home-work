import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../redux/api/authApi";
import { userApi } from "../redux/api/userApi";

export const HomePage = () => {
    const navigate = useNavigate();
    const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
      skip: false,
      refetchOnMountOrArgChange: true,
    });
  
    const user = userApi.endpoints.getMe.useQueryState(null, {
      selectFromResult: ({ data }) => data,
    });
  
  const [triggerLogout, {isSuccess: isLogoutSuccess}] = useLogoutUserMutation();

  const handleNavMenu = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  const handleLogout = () => {
    triggerLogout().unwrap().then(() => {
      if(isLogoutSuccess) {
        navigate("/", { replace: true })
      }
    });
  }
  
  return <>
        <h1>Home Page</h1>
        {
            <ul>
                {!!user ? (
                    <>
                        <li onClick={() => handleNavMenu("/dashboard/profile")}>Profile</li>
                        <li onClick={() => handleNavMenu("/dashboard/settings")}>Settings</li>
                        <li onClick={() => handleNavMenu("/admin")}>Admin</li>
                        <li onClick={() => handleLogout()}>Logout</li>
                    </>
                ) : (
                    <li onClick={() => handleNavMenu("/login")}>Login</li>
                )}
        </ul>
        }
    </>;
};
  