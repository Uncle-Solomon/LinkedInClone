import React from "react";
import background from "../../assets/background.png";

import SingularPeopleViewed from "./SingularPeopleViewed";

const PeopleAlsoViewed = () => {
  return (
    <div className="rounded-md px-4 py-2 my-2 w-[95%] mx-auto shadow-md  z-0 bg-white  ">
      <h1 className="my-2">People also viewed</h1>
      <SingularPeopleViewed />
      <SingularPeopleViewed />
      <SingularPeopleViewed />
      <SingularPeopleViewed />
    </div>
  );
};

export default PeopleAlsoViewed;
