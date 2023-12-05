import { useState } from "react";
import { updatePassword } from "@/slices/userSlice";
import { useAppDispatch } from "@/store/store";
import useSession from "./useSession";

const useUser = () => {
  const dispatch = useAppDispatch();
  const { token } = useSession();
  const [changePassword, setChangePassword] = useState({
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

  const handleSubmit = async () => {
    if (changePassword.newPassword !== changePassword.confirmNewPassword) {
      setMessage("Passwords don't match");
      setOpenModal(true);
      return;
    } else {
      if (token) {
        const data = {
          token: token,
          password: changePassword.newPassword,
        };
        const res = await dispatch(updatePassword(data));
        setMessage(res.payload.message);
        setOpenModal(true);
      } else {
        setMessage("You are not logged in");
        setOpenModal(true);
      }
    }
  };

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
