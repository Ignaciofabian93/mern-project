import React, { useState } from "react";
import { register } from "@/slices/userSlice";
import { useAppDispatch } from "@/store/store";

const useRegister = () => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
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

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleRegister = async () => {
    const { name, lastname, email, password, password2 } = data;
    if (name === "" || lastname === "" || email === "" || password === "" || password2 === "") {
      setMessage("Please fill in all fields");
      setOpenModal(true);
    } else if (password !== password2) {
      setMessage("Passwords do not match");
      setOpenModal(true);
    } else {
      const user = { name, lastname, email, password };
      const result = await dispatch(register(user));

      if (result.payload) {
        setData({
          name: "",
          lastname: "",
          email: "",
          password: "",
          password2: "",
        });

        setMessage(result.payload.message);
        setOpenModal(true);
      }
    }
  };

  return {
    data,
    handleChange,
    handleRegister,
    message,
    openModal,
    handleCloseModal,
  };
};

export default useRegister;
