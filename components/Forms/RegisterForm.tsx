import React from "react";
import CustomInput from "@/components/Inputs/Input";
import CustomButton from "@/components/Buttons/Button";
import useRegister from "@/hooks/useRegister";

const RegisterForm = () => {
  const { data, handleChange, handleRegister } = useRegister();
  return (
    <div className="flex flex-col w-full h-full mt-[50px]">
      <div className="flex w-full h-full items-center">
        <div className="flex flex-col items-center">
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
        <div className="flex flex-col items-center">
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
        <CustomButton text={"Register"} onClick={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterForm;
