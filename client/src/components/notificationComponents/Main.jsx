import React from "react";
import SingularJob from "../../components/jobComponents/SingularJob";
import SingleNotification from "./SingleNotification";

const RecommendedforYou = () => {
  return (
    <div className="bg-white w-full text-sm">
      <SingleNotification />
      <SingleNotification />
      <SingleNotification />
      <SingleNotification />
      <SingleNotification />
    </div>
  );
};

export default RecommendedforYou;
