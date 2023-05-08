import React from "react";
import Navigation from "../components/Navigation";
import ProfileHeader from "../components/profileComponents/ProfileHeader";
import Analytics from "../components/profileComponents/Analytics";
import Resources from "../components/profileComponents/Resources";
import About from "../components/profileComponents/About";
import Activity from "../components/profileComponents/Activity";
import Experience from "../components/profileComponents/Experience";
import Education from "../components/profileComponents/Education";
import Skills from "../components/profileComponents/Skills";
import Interest from "../components/profileComponents/Interest";

const ProfilePage = () => {
  return (
    <div className=" bg-gray-100 min-h-[100vh]">
      <Navigation />
      <div className=" grid grid-cols-12 mt-5 px-2 md:px-5 lg:px-12 ">
        <div className=" hidden md:block md:col-span-1 lg:col-span-3"></div>
        <div className=" col-span-7 md:col-span-6 lg:col-span-6 px-2">
          {" "}
          <ProfileHeader />
          <Analytics />
          <Resources />
          <About />
          <Activity />
          <Experience />
          <Education />
          <Skills />
          <Interest />
        </div>
        <div className=" col-span-4 md:col-span-5 lg:col-span-3"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
