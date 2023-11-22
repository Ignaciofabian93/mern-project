import React from "react";
import CustomInput from "@/components/Inputs/Input";
import CustomButton from "@/components/Buttons/Button";
import useRegister from "@/hooks/useRegister";

const RegisterForm = () => {
  const { data, handleChange, handleRegister } = useRegister();
  return (
    <div>
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
      <CustomButton text={"Register"} onClick={handleRegister} />
    </div>
  );
};

export default RegisterForm;
