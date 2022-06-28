import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    login({
      email: "123",
      password: "456"
    });
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
    </div>
  );
};
