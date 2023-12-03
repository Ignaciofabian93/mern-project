"use client";
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import { useAppSelector } from "@/store/store";
import { CircularProgress } from "@nextui-org/react";
import UpdateUser from "@/components/Forms/UpdateUser";

const Account = () => {
  const { userData } = useAppSelector((store) => store.user);

  return (
    <PageLayout>
      <section className="w-full h-full">
        {userData._id ? (
          <div className="w-full h-full px-4 py-2 flex items-center justify-evenly shadow-lg bg-white/70 rounded-md">
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold">
                {userData.name} {userData.lastname}
              </h1>
              <p className="font-semibold">{userData.email}</p>
            </div>
            <div>
              <UpdateUser />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <CircularProgress size="sm" aria-label="loading..." />
          </div>
        )}
      </section>
    </PageLayout>
  );
};

export default Account;
