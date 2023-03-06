import { useAuth } from "@/hooks";
import React from "react";

const Home = () => {
  useAuth();
  return <div>Home</div>;
};

export default Home;
