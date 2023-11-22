import React, { useState } from "react";
import { register } from "@/slices/userSlice";
import { useAppDispatch } from "@/store/store";

const useRegister = () => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    const { name, lastname, email, password, password2 } = data;
    if (!name && !lastname && !email && !password && !password2) {
      setErrorMessage("Please fill in all fields");
    } else if (password !== password2) {
      setErrorMessage("Passwords do not match");
    } else {
      const user = { name, lastname, email, password };
      const result = await dispatch(register(user));
      if (result.payload) {
        setErrorMessage("");
      }
    }
  };

  return { data, handleChange, handleRegister };
};

export default useRegister;
