import React from "react";
import CustomInput from "../Inputs/Input";
import useUser from "@/hooks/useUser";
import AlertModal from "../Modals/AlertModal";
import CustomButton from "../Buttons/Button";

const UpdateUser = () => {
  const { changePassword, handleChangeData, message, openModal, handleCloseModal, handleSubmit } =
    useUser();
  return (
    <div className="flex flex-col w-full h-full mt-[50px]">
      <div className="flex flex-col w-full h-full items-center justify-center">
        <p className="text-xl font-semibold mb-4">Change password</p>
        <CustomInput
          type={"password"}
          name={"newPassword"}
          value={changePassword.newPassword}
          onChange={handleChangeData}
          label={"New password"}
        />
        <CustomInput
          type={"password"}
          name={"confirmNewPassword"}
          value={changePassword.confirmNewPassword}
          onChange={handleChangeData}
          label={"Confirm password"}
        />
        <div className="w-full flex items-center justify-center mt-4">
          <CustomButton text={"Save"} onClick={handleSubmit} />
        </div>
      </div>
      {message && openModal && (
        <AlertModal isOpen={openModal} onClose={handleCloseModal} text={message} />
      )}
    </div>
  );
};

export default UpdateUser;
