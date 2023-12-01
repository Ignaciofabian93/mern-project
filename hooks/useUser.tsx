import React, { useState } from "react";

const useUser = () => {
  const [changePassword, setChangePassword] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setChangePassword({ ...changePassword, [name]: value });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async () => {};

  return {
    changePassword,
    handleChangeData,
    handleCloseModal,
    handleSubmit,
    message,
    openModal,
  };
};

export default useUser;
