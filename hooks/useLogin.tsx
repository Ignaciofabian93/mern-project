import React, { useState } from "react";
import { login } from "@/slices/userSlice";
import { useAppDispatch } from "@/store/store";
import { getUserData } from "@/slices/userSlice";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
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

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogin = async () => {
    const { email, password } = data;
    if (email === "" || password === "") {
      setMessage("Please fill in all fields");
      setOpenModal(true);
    } else {
      const result = await dispatch(login(data));
      console.log("result login: ", result);

      if (result.payload.token) {
        setMessage("");
        localStorage.setItem("token", result.payload.token);
        await dispatch(getUserData(result.payload.token));
      }
    }
  };

  return {
    data,
    handleChange,
    handleLogin,
    message,
    handleCloseModal,
    openModal,
  };
};

export default useLogin;
