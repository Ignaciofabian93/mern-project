import React, { useState, useEffect } from "react";
import { login } from "@/slices/userSlice";
import { useAppDispatch } from "@/store/store";

const useLogin = () => {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const { email, password } = data;
    if (!email && !password) {
      setErrorMessage("Please fill in all fields");
    } else {
      const result = await dispatch(login(data));
      if (result.payload.token) {
        setErrorMessage("");
        localStorage.setItem("token", result.payload.token);
      }
    }
  };

  return { data, handleChange, handleLogin };
};

export default useLogin;
