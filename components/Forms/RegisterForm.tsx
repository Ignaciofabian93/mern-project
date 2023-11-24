import React from "react";
import CustomInput from "@/components/Inputs/Input";
import CustomButton from "@/components/Buttons/Button";
import useRegister from "@/hooks/useRegister";
import AlertModal from "../Modals/AlertModal";

const RegisterForm = () => {
  const {
    data,
    handleChange,
    handleRegister,
    message,
    openModal,
    handleCloseModal,
  } = useRegister();
  return (
    <div className="flex flex-col w-full h-full mt-[50px]">
      <div className="flex w-full h-full items-center justify-center">
        <div className="flex flex-col items-center justify-start h-[300px] mx-8">
          <CustomInput
            type={"text"}
            name={"name"}
            value={data.name}
            onChange={handleChange}
            label={"Name"}
          />
          <CustomInput
            type={"text"}
            name={"lastname"}
            value={data.lastname}
            onChange={handleChange}
            label={"Lastname"}
          />
          <CustomInput
            type={"text"}
            name={"email"}
            value={data.email}
            onChange={handleChange}
            label={"Email"}
          />
        </div>
        <div className="flex flex-col items-center justify-start h-[300px] mx-8">
          <CustomInput
            type={"password"}
            name={"password"}
            value={data.password}
            onChange={handleChange}
            label={"Password"}
          />
          <CustomInput
            type={"password"}
            name={"password2"}
            value={data.password2}
            onChange={handleChange}
            label={"Confirm Password"}
          />
        </div>
      </div>
      {message && openModal && (
        <AlertModal
          isOpen={openModal}
          onClose={handleCloseModal}
          text={message}
        />
      )}
      <div className="w-full flex items-center justify-center">
        <CustomButton text={"Register"} onClick={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterForm;
