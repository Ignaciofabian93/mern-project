"use client";
import React from "react";
import Layout from "@/components/Layout/Layout";
import LoginForm from "@/components/Forms/LoginForm";

const Login = () => {
  return (
    <Layout>
      <div className="w-full max-h-screen">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Login;
