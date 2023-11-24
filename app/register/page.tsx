"use client";
import React from "react";
import Layout from "@/components/Layout/Layout";
import RegisterForm from "@/components/Forms/RegisterForm";
import Link from "next/link";

const Register = () => {
  return (
    <Layout>
      <div className="w-full max-h-screen">
        <Link href={"/login"} className="text-white italic underline">
          Go back to login
        </Link>
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default Register;
