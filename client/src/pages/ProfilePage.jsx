import React, { useContext, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import ProfileHeader from "../components/profileComponents/ProfileHeader";
import Analytics from "../components/profileComponents/Analytics";
import Resources from "../components/profileComponents/Resources";
import About from "../components/profileComponents/About";
import Activity from "../components/profileComponents/Activity";
import EditIntroModal from "../pages/EditIntroModal";
import Experience from "../components/profileComponents/Experience";
import Education from "../components/profileComponents/Education";
import Skills from "../components/profileComponents/Skills";
import Footer from "../components/profileComponents/Footer";
import ProfileEdit from "../components/profileComponents/ProfileEdit";
import PeopleAlsoViewed from "../components/profileComponents/PeopleAlsoViewed";
import PeopleYouMayKnow from "../components/profileComponents/PeopleYouMayKnow";

import ad from "../assets/ad.png";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div
      className={` ${
        isModalOpen
          ? " bg-[rgba(0,0,0,0.3)] overflow-hidden max-h-[100vh] "
          : "bg-gray-100"
      }`}
    >
      <Navigation isOpen={isModalOpen} />
      <EditIntroModal isOpen={isModalOpen} onClose={handleModalToggle} />

      <div className=" grid grid-cols-12 mt-5 px-2 md:px-5 lg:px-12 ">
        <div className=" hidden md:block md:col-span-1 lg:col-span-3"></div>
        <div className=" col-span-12 md:col-span-6 lg:col-span-6 px-2">
          <ProfileHeader
            isOpen={isModalOpen}
            handleToggle={handleModalToggle}
          />
          <Analytics isOpen={isModalOpen} />
          <Resources isOpen={isModalOpen} />
          <About isOpen={isModalOpen} handleToggle={handleModalToggle} />
          <Activity isOpen={isModalOpen} />
          <Experience isOpen={isModalOpen} handleToggle={handleModalToggle} />
          <Education isOpen={isModalOpen} handleToggle={handleModalToggle} />
          <Skills isOpen={isModalOpen} />
        </div>
        <div className=" col-span-12 md:col-span-5 lg:col-span-3">
          <ProfileEdit isOpen={isModalOpen} />
          <PeopleAlsoViewed isOpen={isModalOpen} />
          <PeopleYouMayKnow isOpen={isModalOpen} />
          <img src={ad} className="w-full h-56 p-2 rounded-2xl" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
