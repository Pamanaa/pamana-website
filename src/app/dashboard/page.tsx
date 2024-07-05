import React from "react";
import { getAuth } from "../features/auth/queries/get-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { user } = await getAuth();
  if (!user) {
    redirect("/sign-in");
  }
  return <h1 className="dongle-header-active">LOGGED IN</h1>;
};

export default Dashboard;
