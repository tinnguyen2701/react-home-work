import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useLoginUserMutation } from "../services/authApi";

export const LoginPage = () => {
  // const { login } = useAuth();
  const [
    loginUser, // This is the mutation trigger
    { isLoading: isLoging, isError: isErrorLogin }, // This is the destructured mutation result
  ] = useLoginUserMutation();

  useEffect(() => {
    if (isErrorLogin) {
      alert("login failed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoging]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    loginUser({email: "123", password: "456"});
    // login({
    //   email: "123",
    //   password: "456"
    // });
  };

  return (
    <div>
        <h1>Login Page</h1>
        <form>
            <input type="text" id="email" name="email" placeholder="..email.." />
            <input type="password" id="password" name="password" placeholder="..password.." />
            <p>
                <button type="submit" onClick={(e) => handleSubmit(e)}>Login In</button>
            </p>
        </form>
        {isLoging && <p>loging....</p>}
    </div>
  );
};
